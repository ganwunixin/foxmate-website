'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-24 right-6 z-50 group">
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-orange-500 text-white rounded-full shadow-xl flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-orange-600 hover:scale-110"
            aria-label="回到顶部"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            回到顶部
          </span>
        </div>
      )}
    </>
  )
}
