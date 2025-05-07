import { useState, useEffect, useRef, MutableRefObject } from 'react'

function useInView<T extends HTMLElement = HTMLDivElement>(threshold: number = 0.2): [boolean, MutableRefObject<T | null>] {
  const [inView, setInView] = useState(false)
  const refElement = useRef<T | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setInView(entry.isIntersecting)
      },
      {
        threshold, 
      }
    )

    const currentElement = refElement.current

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold])

  return [inView, refElement]
}

export default useInView