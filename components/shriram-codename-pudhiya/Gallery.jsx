'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { galleryImages } from '../../lib/shriram-codename-pudhiya/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const RED = '#EB2027'

const VISIBLE = 3
const TOTAL_POSITIONS = galleryImages.length - VISIBLE + 1  // 4

const Gallery = ({ setIsOpen }) => {
  const [pos, setPos] = useState(0)
  const [sliding, setSliding] = useState(false)

  const goTo = (next) => {
    if (sliding) return
    setSliding(true)
    setPos(next)
    setTimeout(() => setSliding(false), 500)
  }

  const prev = () => pos > 0 && goTo(pos - 1)
  const next = () => pos < TOTAL_POSITIONS - 1 && goTo(pos + 1)

  return (
    <section id="gallery" style={{ padding: '64px 0', background: '#ffffff', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container mx-auto px-4 md:px-10">

        {/* Heading */}
        <h2 style={{
          fontFamily: F_JOST, fontSize: '28px', fontWeight: '700',
          color: RED, margin: '0 0 28px',
        }} data-aos="fade-up">
          Gallery
        </h2>

        {/* Slider wrapper */}
        <div style={{ position: 'relative' }}>

          {/* Prev arrow */}
          <button
            onClick={prev}
            style={{
              position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
              zIndex: 10,
              width: '38px', height: '38px', borderRadius: '50%',
              background: pos === 0 ? 'rgba(235,32,39,0.35)' : RED,
              border: 'none', color: '#fff', fontSize: '22px',
              cursor: pos === 0 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              transition: 'background 0.2s',
            }}
          >
            ‹
          </button>

          {/* Overflow clip */}
          <div style={{ overflow: 'hidden' }}>
            {/* Moving strip */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                /* shift by (imageWidth + gap) * pos  ≈ one-third of container per step */
                transform: `translateX(calc(-${pos} * (100% / ${VISIBLE} + 4px)))`,
                transition: sliding ? 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                willChange: 'transform',
              }}
            >
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  style={{
                    flexShrink: 0,
                    width: `calc((100% - ${(VISIBLE - 1) * 12}px) / ${VISIBLE})`,
                    position: 'relative',
                    aspectRatio: '4/3',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            style={{
              position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
              zIndex: 10,
              width: '38px', height: '38px', borderRadius: '50%',
              background: pos >= TOTAL_POSITIONS - 1 ? 'rgba(235,32,39,0.35)' : RED,
              border: 'none', color: '#fff', fontSize: '22px',
              cursor: pos >= TOTAL_POSITIONS - 1 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              transition: 'background 0.2s',
            }}
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
          {Array.from({ length: TOTAL_POSITIONS }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === pos ? '24px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: 'none',
                background: i === pos ? RED : '#d1d5db',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '28px' }}>
          <button onClick={() => setIsOpen(true)} className="btn-gold-outline" style={{ padding: '10px 28px' }}>
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  )
}

export default Gallery
