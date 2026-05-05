'use client'
import Image from 'next/image'
import { heroImages } from '../../lib/shriram-images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const RED = '#EB2027'

const highlights = [
  'Enhanced ventilation & abundant natural light',
  'Zero space wastage – every sq. ft. optimized',
  'Vastu-compliant, harmonious family living',
  'Prime location near Poonamallee & Porur IT hub',
]

export default function Hero({ setIsOpen }) {
  return (
    <div style={{ marginTop: '68px', position: 'relative', width: '100%' }}>

      {/* ── Full-width hero image ── */}
      <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 68px)', minHeight: '520px' }}>

        <Image
          src={heroImages.banner}
          alt="Shriram Codename Pudhiya"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.20) 55%, rgba(0,0,0,0.05) 100%)',
          zIndex: 1,
        }} />

        {/* Bottom extra darkening for text area */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '45%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }} />

        {/* ── Text content overlay ── */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          zIndex: 2,
          padding: '0 0 0 0',
        }}>
          {/* Main text block */}
          <div className="container mx-auto px-4 md:px-10" style={{ paddingBottom: '28px' }}>

            {/* Project name */}
            <h1 style={{
              fontFamily: F_JOST,
              fontSize: 'clamp(26px, 3.5vw, 50px)',
              fontWeight: '800',
              color: '#ffffff',
              margin: '0 0 6px',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}>
              Shriram Codename Pudhiya
            </h1>

            {/* Location */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              marginBottom: '14px',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="rgba(255,255,255,0.85)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{
                fontFamily: F_SANS, fontSize: '14px', fontWeight: '500',
                color: 'rgba(255,255,255,0.85)',
              }}>
                Thirumazhisai, Chennai
              </span>
            </div>

            {/* Subtitle */}
            <h2 style={{
              fontFamily: F_JOST,
              fontSize: 'clamp(14px, 1.6vw, 20px)',
              fontWeight: '700',
              color: '#ffffff',
              margin: '0 0 12px',
            }}>
              Luxurious 1, 2 and 3 BHK Apartments
            </h2>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '18px' }}>
              {highlights.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontFamily: F_SANS, fontSize: '13px', color: 'rgba(255,255,255,0.88)',
                    fontWeight: '400',
                  }}>
                    <span style={{ fontWeight: '700', marginRight: '4px' }}>&raquo;</span>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Price — directly on hero image, no separate strip */}
            <div style={{ marginBottom: '4px' }}>
              <p style={{
                fontFamily: F_SANS, fontSize: '12px', fontWeight: '500',
                color: 'rgba(255,255,255,0.70)', margin: '0 0 2px',
              }}>
                Starts at
              </p>
              <p style={{
                fontFamily: F_JOST, fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: '700',
                color: RED, margin: 0, lineHeight: 1,
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}>
                32 Lakhs*
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
