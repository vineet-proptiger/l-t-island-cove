'use client'
import React, { useEffect, useCallback } from 'react'
import Image from 'next/image'

const RED = '#EB2027'

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  // Keyboard navigation
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (currentIndex === null || currentIndex === undefined) return null

  const img = images[currentIndex]
  const src = typeof img === 'string' ? img : (img.src || img.img)
  const alt = typeof img === 'string' ? '' : (img.alt || img.label || '')

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '16px', right: '16px', zIndex: 10,
          width: '40px', height: '40px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)', border: 'none',
          color: '#fff', fontSize: '24px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        ✕
      </button>

      {/* Counter */}
      <div style={{
        position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: '500',
      }}>
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        style={{
          position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, width: '44px', height: '44px', borderRadius: '50%',
          background: currentIndex === 0 ? 'rgba(255,255,255,0.1)' : RED,
          border: 'none', color: '#fff', fontSize: '24px',
          cursor: currentIndex === 0 ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
        }}
      >
        ‹
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '90vw', height: '75vh',
          maxWidth: '1000px',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        style={{
          position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, width: '44px', height: '44px', borderRadius: '50%',
          background: currentIndex >= images.length - 1 ? 'rgba(255,255,255,0.1)' : RED,
          border: 'none', color: '#fff', fontSize: '24px',
          cursor: currentIndex >= images.length - 1 ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
        }}
      >
        ›
      </button>
    </div>
  )
}
