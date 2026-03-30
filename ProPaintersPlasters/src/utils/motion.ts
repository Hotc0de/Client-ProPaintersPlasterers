import {
  type MotionStyle,
  type Transition,
  type Variants,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'

export const luxuryEase: Transition['ease'] = [0.22, 1, 0.36, 1]

export const durations = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
} as const

export const revealViewport = {
  once: true,
  amount: 0.22,
} as const

export function getRevealProps(reduceMotion: boolean | null) {
  if (reduceMotion) {
    return {
      initial: false as const,
      animate: 'visible' as const,
    }
  }

  return {
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: revealViewport,
  }
}

export function fadeUp(delay = 0, distance = 24): Variants {
  return {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.base,
        ease: luxuryEase,
        delay,
      },
    },
  }
}

export function fadeIn(delay = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: durations.base,
        ease: luxuryEase,
        delay,
      },
    },
  }
}

export function staggerContainer(staggerChildren = 0.12, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }
}

export function softScaleIn(delay = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      scale: 0.975,
      y: 16,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: durations.base,
        ease: luxuryEase,
        delay,
      },
    },
  }
}

export const scaleOnHover = {
  scale: 1.02,
  y: -3,
  transition: {
    duration: durations.fast,
    ease: luxuryEase,
  },
} as const

export function useSubtleParallax(distance = 18): MotionStyle {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : distance])

  return { y }
}