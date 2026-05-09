'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { amenityImages } from '../../lib/shriram-codename-pudhiya/images'
import Lightbox from './Lightbox'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const RED = '#EB2027'

const Amenities = ({ setIsOpen }) => {
  const [pos, setPos]       = useState(0)
  const [sliding, setSliding] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const visible = isMobile ? 1 : 3
  const totalPositions = amenityImages.length - visible + 1

  const goTo = (next) => {
    if (sliding) return
    setSliding(true)
    setPos(next)
    setTimeout(() => setSliding(false), 480)
  }

  const prev = () => pos > 0 && goTo(pos - 1)
  const next = () => pos < totalPositions - 1 && goTo(pos + 1)

  // Reset position when switching between mobile/desktop
  useEffect(() => {
    if (pos >= totalPositions) setPos(Math.max(0, totalPositions - 1))
  }, [isMobile, pos, totalPositions])

  return (
    <section
      id="amenities"
      style={{
        /* ── Fixed parallax background ── */
        backgroundImage: "url('/images/shriram-codename/hero/banner2.webp')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        padding: '60px 0 48px',
        borderBottom: '1px solid #111',
      }}
    >
      {/* Dark overlay so bg looks like screenshot */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(10,10,20,0.72)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* ── Main content ── */}
      <div
        className="container mx-auto px-4 md:px-10"
        style={{ position: 'relative', zIndex: 1 }}
      >

        {/* Heading */}
        <h2 style={{
          fontFamily: F_JOST, fontSize: '26px', fontWeight: '700',
          color: '#ffffff', margin: '0 0 24px',
        }}>
          Amenities
        </h2>

        {/* ── Slider ── */}
        <div style={{ position: 'relative' }}>

          {/* Overflow clip */}
          <div style={{ overflow: 'hidden', borderRadius: '4px' }}>

            {/* Moving strip — all images in one row */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                transform: `translateX(calc(-${pos} * ((100% - ${(visible - 1) * 12}px) / ${visible} + 12px)))`,
                transition: sliding
                  ? 'transform 0.48s cubic-bezier(0.4, 0, 0.2, 1)'
                  : 'none',
                willChange: 'transform',
              }}
            >
              {amenityImages.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  style={{
                    flexShrink: 0,
                    width: `calc((100% - ${(visible - 1) * 12}px) / ${visible})`,
                    position: 'relative',
                    aspectRatio: '4/3',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-cover"
                    sizes={isMobile ? '100vw' : '33vw'}
                  />

                  {/* Red gradient → solid label bar */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: `linear-gradient(to bottom, transparent 0%, ${RED} 55%)`,
                    padding: '32px 12px 10px',
                  }}>
                    <p style={{
                      fontFamily: F_SANS, fontSize: '13px', fontWeight: '600',
                      color: '#fff', margin: 0, textAlign: 'center',
                      letterSpacing: '0.02em',
                    }}>
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ← Prev arrow — inside left edge of card area */}
          <button
            onClick={prev}
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-60%)',   /* above label bar */
              zIndex: 10,
              width: '32px', height: '32px',
              background: RED,
              border: 'none',
              color: '#fff',
              fontSize: '20px',
              cursor: pos === 0 ? 'default' : 'pointer',
              opacity: pos === 0 ? 0.45 : 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'opacity 0.2s',
              borderRadius: '2px',
            }}
          >
            ‹
          </button>

          {/* → Next arrow — inside right edge of card area */}
          <button
            onClick={next}
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-60%)',
              zIndex: 10,
              width: '32px', height: '32px',
              background: RED,
              border: 'none',
              color: '#fff',
              fontSize: '20px',
              cursor: pos >= totalPositions - 1 ? 'default' : 'pointer',
              opacity: pos >= totalPositions - 1 ? 0.45 : 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'opacity 0.2s',
              borderRadius: '2px',
            }}
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '18px',
        }}>
          {Array.from({ length: totalPositions }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: '10px', height: '10px', borderRadius: '50%',
                border: 'none', padding: 0, cursor: 'pointer',
                background: i === pos ? '#fff' : 'rgba(255,255,255,0.35)',
                transition: 'background 0.25s',
              }}
            />
          ))}
        </div>

        {/* Enquire Now */}
        <div style={{ marginTop: '28px' }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              background: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
              borderRadius: '3px',
              padding: '9px 26px',
              fontFamily: F_JOST,
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.22s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#fff'
              e.currentTarget.style.color = '#111'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#fff'
            }}
          >
            Enquire Now
          </button>
        </div>

      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={amenityImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(Math.max(0, lightboxIndex - 1))}
          onNext={() => setLightboxIndex(Math.min(amenityImages.length - 1, lightboxIndex + 1))}
        />
      )}
    </section>
  )
}

export default Amenities
