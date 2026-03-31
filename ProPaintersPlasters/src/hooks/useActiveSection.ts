import { useEffect, useState } from 'react'

function getSectionIdFromHash(hash: string) {
  return hash.startsWith('#') ? hash.slice(1) : hash
}

function isIntersectingEntry(
  entry: IntersectionObserverEntry | undefined,
): entry is IntersectionObserverEntry {
  return Boolean(entry?.isIntersecting)
}

type UseActiveSectionOptions = {
  defaultSectionId: string
}

export function useActiveSection(
  sectionIds: string[],
  { defaultSectionId }: UseActiveSectionOptions,
) {
  const [activeSection, setActiveSection] = useState(defaultSectionId)

  useEffect(() => {
    const getHeaderOffset = () => {
      const headerElement = document.querySelector<HTMLElement>('.site-header')

      if (!headerElement) {
        return 110
      }

      return Math.ceil(headerElement.getBoundingClientRect().height + 8)
    }

    const getRootMargin = (headerOffset: number) =>
      `-${headerOffset}px 0px -55% 0px`

    const resolveActiveSection = () => {
      const headerOffset = getHeaderOffset()
      const viewportAnchor = window.scrollY + headerOffset + 6
      let currentSection = defaultSectionId

      const isNearPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2

      if (isNearPageBottom) {
        const lastSectionId = sectionIds[sectionIds.length - 1]

        if (lastSectionId) {
          setActiveSection((previous) =>
            previous === lastSectionId ? previous : lastSectionId,
          )
          return
        }
      }

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId)

        if (!element) {
          continue
        }

        if (element.offsetTop <= viewportAnchor) {
          currentSection = sectionId
        }
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection,
      )
    }

    const matchingHashSection = getSectionIdFromHash(window.location.hash)

    if (sectionIds.includes(matchingHashSection)) {
      setActiveSection(matchingHashSection)
    }

    const visibleEntries = new Map<string, IntersectionObserverEntry>()
    let observer: IntersectionObserver

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        visibleEntries.set(entry.target.id, entry)
      }

      const intersectingEntries = sectionIds
        .map((sectionId) => visibleEntries.get(sectionId))
        .filter(isIntersectingEntry)

      if (intersectingEntries.length === 0) {
        resolveActiveSection()
        return
      }

      const viewportTarget = getHeaderOffset() + 8
      const bestEntry = intersectingEntries.sort((entryA, entryB) => {
        const entryAPassedTop = entryA.boundingClientRect.top <= viewportTarget
        const entryBPassedTop = entryB.boundingClientRect.top <= viewportTarget

        if (entryAPassedTop !== entryBPassedTop) {
          return entryAPassedTop ? -1 : 1
        }

        if (Math.abs(entryB.intersectionRatio - entryA.intersectionRatio) > 0.06) {
          return entryB.intersectionRatio - entryA.intersectionRatio
        }

        const entryATopDistance = Math.abs(
          entryA.boundingClientRect.top - viewportTarget,
        )
        const entryBTopDistance = Math.abs(
          entryB.boundingClientRect.top - viewportTarget,
        )

        return entryATopDistance - entryBTopDistance
      })[0]

      setActiveSection((previous) =>
        previous === bestEntry.target.id ? previous : bestEntry.target.id,
      )
    }

    const observeSections = () => {
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId)

        if (element) {
          observer.observe(element)
        }
      }
    }

    const resetObserverWithHeaderOffset = () => {
      const headerOffset = getHeaderOffset()
      const rootMargin = getRootMargin(headerOffset)

      if (observer) {
        observer.disconnect()
      }
      visibleEntries.clear()

      observer = new IntersectionObserver(observerCallback, {
        rootMargin,
        threshold: [0, 0.2, 0.4, 0.6, 0.8],
      })

      observeSections()
      resolveActiveSection()
    }

    resetObserverWithHeaderOffset()

    let isTicking = false
    const onScroll = () => {
      if (isTicking) {
        return
      }

      isTicking = true
      window.requestAnimationFrame(() => {
        resolveActiveSection()
        isTicking = false
      })
    }

    const onHashChange = () => {
      const currentHashSection = getSectionIdFromHash(window.location.hash)

      if (sectionIds.includes(currentHashSection)) {
        setActiveSection(currentHashSection)
        return
      }

      resolveActiveSection()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('resize', resetObserverWithHeaderOffset)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('resize', resetObserverWithHeaderOffset)
    }
  }, [defaultSectionId, sectionIds])

  return {
    activeSection,
    setActiveSection,
  }
}