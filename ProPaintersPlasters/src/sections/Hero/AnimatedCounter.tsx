import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

type AnimatedCounterProps = {
  value: string
  duration?: number
  delay?: number
}

export function AnimatedCounter({
  value,
  duration = 2,
  delay = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.7 })
  const reduceMotion = useReducedMotion()

  const numericValue = Number.parseInt(value.replace(/[^0-9]/g, ''), 10) || 0
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (!isInView) {
      return
    }

    if (reduceMotion) {
      setCount(numericValue)
      return
    }

    const timeoutId = window.setTimeout(() => {
      let startTime: number | null = null

      const animate = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime
        }

        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        const easedProgress = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easedProgress * numericValue)

        setCount(currentCount)

        if (progress < 1) {
          window.requestAnimationFrame(animate)
        } else {
          setCount(numericValue)
        }
      }

      window.requestAnimationFrame(animate)
    }, delay * 1000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [delay, duration, isInView, numericValue, reduceMotion])

  return (
    <motion.span
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      {count}
      {suffix}
    </motion.span>
  )
}