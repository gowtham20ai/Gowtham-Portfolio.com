import { useEffect } from 'react'

const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.fade-in-up, .scale-in, .slide-in-left, .puff-in-center'
    )

    if (!elements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}

export default useScrollReveal
