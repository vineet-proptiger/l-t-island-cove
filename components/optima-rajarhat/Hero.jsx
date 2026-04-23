'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { heroImages } from '../../lib/optima-rajarhat/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS  = 'var(--font-sans), "Open Sans", sans-serif'

const slides = [heroImages.banner, heroImages.banner2]
const INTERVAL = 5500

export default function Hero({ setIsOpen }) {
  const [cur, setCur] = useState(0)
  const rafRef  = useRef(null)

  useEffect(() => {
    cancelAnimationFrame(rafRef.current)
    const timer = setTimeout(() => setCur(p => (p + 1) % slides.length), INTERVAL)
    return () => { clearTimeout(timer); cancelAnimationFrame(rafRef.current) }
  }, [cur])

  const goTo = (idx) => setCur(idx)

  const specs = [
    { val: '11.3',     lbl: 'Acres\nTownship'   },
    { val: '2 & 3 BHK', lbl: 'Config-\nuration' },
    { val: '70%',      lbl: 'Open Green\nSpaces' },
    { val: '₹65L+',   lbl: 'Starting\nPrice'    },
  ]

  return (
    <>
      <style>{`
        @keyframes heroFadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes heroRiseUp   { from{opacity:0;transform:translateY(22px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes heroSlideUp  { from{opacity:0;transform:translateY(30px)}  to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* ═══════════ MOBILE LAYOUT (hidden on lg+) ═══════════ */}
      <div className="lg:hidden" style={{ marginTop: '64px', background: '#0d1a24' }}>

        {/* Mobile hero image */}
        <div style={{ position: 'relative', width: '100%', height: '56vw', minHeight: '220px', maxHeight: '360px', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex',
            transform: `translateX(-${cur * 100}%)`,
            transition: 'transform 1s cubic-bezier(0.86,0,0.07,1)',
          }}>
            {slides.map((src, idx) => (
              <div key={idx} style={{ flex: '0 0 100%', height: '100%', position: 'relative' }}>
                <Image src={src} alt={`Srijan Optima ${idx + 1}`} fill className="object-cover" priority={idx === 0} sizes="100vw" />
              </div>
            ))}
          </div>

          {/* Gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,26,36,0.85) 0%, rgba(13,26,36,0.1) 55%)', zIndex: 2 }} />

          {/* Badge top-right */}
          <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 5 }}>
            <span style={{
              fontFamily: F_SANS, fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--color-teal)',
              border: '1px solid var(--color-teal-light)',
              padding: '4px 10px', borderRadius: '2px',
              background: 'rgba(13,26,36,0.65)', backdropFilter: 'blur(6px)',
            }}>Booking Open</span>
          </div>

          {/* Project title bottom-left */}
          <div style={{ position: 'absolute', bottom: '14px', left: '16px', zIndex: 5 }}>
            <p style={{ fontFamily: F_SANS, fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-teal)', margin: '0 0 4px' }}>
              Rajarhat Main Road, Kolkata
            </p>
            <h1 style={{ fontFamily: F_JOST, fontSize: 'clamp(24px, 7vw, 36px)', fontWeight: 800, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>
              Srijan <span style={{ color: 'var(--color-teal)' }}>Optima</span>
            </h1>
          </div>

          {/* Pip dots */}
          <div style={{ position: 'absolute', bottom: '14px', right: '16px', zIndex: 5, display: 'flex', gap: '6px' }}>
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => goTo(idx)} style={{
                height: '2px', border: 'none', borderRadius: '1px', cursor: 'pointer', padding: 0,
                width: cur === idx ? '28px' : '14px',
                background: cur === idx ? 'var(--color-teal)' : 'rgba(255,255,255,0.3)',
                transition: 'all 0.4s ease',
              }} />
            ))}
          </div>
        </div>

        {/* Mobile — 2×2 Specs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--color-bg, #F4F8F9)' }}>
          {specs.map((s, i) => (
            <div key={i} style={{
              padding: '14px 16px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              borderRight: i % 2 === 0 ? '1px solid rgba(13,26,36,0.1)' : 'none',
              borderBottom: i < 2 ? '1px solid rgba(13,26,36,0.1)' : 'none',
            }}>
              <p style={{ fontFamily: F_JOST, fontSize: '20px', fontWeight: 700, color: 'var(--color-dark)', lineHeight: 1, marginBottom: '3px' }}>{s.val}</p>
              <p style={{ fontFamily: F_SANS, fontSize: '9px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#6b7280', lineHeight: 1.35, whiteSpace: 'pre-line', margin: 0 }}>{s.lbl}</p>
            </div>
          ))}
        </div>

        {/* Mobile — CTA */}
        <div style={{ background: '#0d1a24', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{ fontFamily: F_JOST, fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', textAlign: 'center', margin: 0 }}>
            2 &amp; 3 BHK Affordable Residences
          </p>
          <p className="blink-price" style={{ fontFamily: F_JOST, fontSize: '26px', fontWeight: 700, color: 'var(--color-teal)', textAlign: 'center', lineHeight: 1, margin: 0 }}>
            ₹65 Lacs*
          </p>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              width: '100%', padding: '13px',
              background: 'var(--color-teal)', color: '#fff',
              border: 'none', borderRadius: '6px',
              fontFamily: F_JOST, fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.10em', textTransform: 'uppercase', cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(74,140,152,0.4)',
            }}
          >
            Book Site Visit
          </button>
        </div>
      </div>

      {/* ═══════════ DESKTOP LAYOUT (hidden below lg) ═══════════ */}
      <div className="hidden lg:flex" style={{
        width: '100%',
        height: 'calc(100vh - 80px)',
        marginTop: '80px',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#0d1a24'
      }}>

        {/* IMAGE STAGE — top 65% */}
        <div style={{ flex: '0 0 65%', position: 'relative', overflow: 'hidden' }}>

          {/* Carousel track */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex',
            transform: `translateX(-${cur * 100}%)`,
            transition: 'transform 1s cubic-bezier(0.86,0,0.07,1)',
          }}>
            {slides.map((src, idx) => (
              <div key={idx} style={{ flex: '0 0 100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', inset: '-3%',
                  transform: cur === idx ? 'scale(1.06)' : 'scale(1)',
                  transition: 'transform 8s ease-out',
                }}>
                  <Image src={src} alt={`Srijan Optima ${idx + 1}`} fill className="object-cover" priority={idx === 0} sizes="100vw" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom vignette */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', zIndex: 3,
            background: 'linear-gradient(to top, rgba(13,26,36,0.82) 0%, rgba(13,26,36,0.18) 60%, transparent 100%)',
            pointerEvents: 'none',
          }} />

          {/* Badge */}
          <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 lg:p-10"
            style={{ background: 'linear-gradient(to bottom, rgba(13,26,36,0.65) 0%, transparent 100%)', animation: 'heroFadeDown 0.7s 0.2s ease both' }}>
            <div style={{ animation: 'heroFadeDown 0.7s 0.2s ease both' }}>
              <span style={{
                fontFamily: F_SANS, fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--color-teal)',
                border: '1px solid var(--color-teal-light)',
                padding: '5px 14px', borderRadius: '2px',
                background: 'rgba(13,26,36,0.5)', backdropFilter: 'blur(8px)',
              }}>
                Booking Window Opens
              </span>
            </div>
          </nav>

          {/* Project title overlaid on image */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, zIndex: 5,
            padding: '0 40px 22px',
            animation: 'heroRiseUp 0.9s 0.3s cubic-bezier(0.16,1,0.3,1) both',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ display: 'block', width: '28px', height: '1px', background: 'var(--color-teal)', opacity: 0.8 }} />
              <span style={{ fontFamily: F_SANS, fontSize: '10px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-teal)' }}>
                Largest Township in Rajarhat Main Road
              </span>
            </div>
            <h1 style={{
              fontFamily: F_JOST,
              fontSize: 'clamp(28px, 3.4vw, 52px)',
              fontWeight: 800, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em',
            }}>
              Srijan <span style={{ color: 'var(--color-teal)' }}>Optima</span>
            </h1>
          </div>

          {/* Pip dots */}
          <div style={{ position: 'absolute', bottom: '20px', right: '40px', zIndex: 6, display: 'flex', gap: '7px' }}>
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => goTo(idx)} style={{
                height: '2px', border: 'none', borderRadius: '1px', cursor: 'pointer', padding: 0,
                width: cur === idx ? '40px' : '22px',
                background: cur === idx ? 'var(--color-teal)' : 'rgba(255,255,255,0.3)',
                transition: 'all 0.4s ease',
              }} />
            ))}
          </div>
        </div>

        {/* INFO STRIP — bottom 35% */}
        <div className="flex flex-row" style={{
          flex: 1,
          background: 'var(--color-bg, #F4F8F9)',
          animation: 'heroSlideUp 0.8s 0.5s cubic-bezier(0.16,1,0.3,1) both',
          overflow: 'hidden',
        }}>

          {/* A — Project description */}
          <div style={{
            width: '260px', flexShrink: 0,
            padding: '16px 20px',
            background: 'var(--color-dark, #0d1a24)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {[
                'Elevated Living in Rajarhat',
                'Modern 2 & 3 BHK Residences',
                '70% Open Green Spaces',
                'Spread across 11.3 Acres',
              ].map((line, i) => (
                <p key={i} style={{ fontFamily: F_SANS, fontSize: '12px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', fontWeight: 400, margin: 0, textAlign: 'center' }}>
                  {line}
                </p>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
              {[
                { icon: '🎧', label: 'Call\nBack'  },
                { icon: '🚗', label: 'Site\nVisit' },
                { icon: '🏷️', label: 'Best\nPrice' },
              ].map((b, i) => (
                <div key={i} style={{
                  flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px',
                  padding: '5px 2px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.04)',
                }}>
                  <span style={{ fontSize: '13px', lineHeight: 1 }}>{b.icon}</span>
                  <span style={{ fontFamily: F_SANS, fontSize: '9px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textAlign: 'center', lineHeight: 1.2, whiteSpace: 'pre-line' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* B — Specs 2×2 */}
          <div style={{
            width: '300px', flexShrink: 0,
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            borderRight: '1px solid rgba(13,26,36,0.1)',
          }}>
            {specs.map((s, i) => (
              <div key={i} style={{
                padding: '14px 16px',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                borderRight: i % 2 === 0 ? '1px solid rgba(13,26,36,0.1)' : 'none',
                borderBottom: i < 2 ? '1px solid rgba(13,26,36,0.1)' : 'none',
                background: 'var(--color-bg, #F4F8F9)',
              }}>
                <p style={{ fontFamily: F_JOST, fontSize: '20px', fontWeight: 700, color: 'var(--color-dark)', lineHeight: 1, marginBottom: '3px' }}>{s.val}</p>
                <p style={{ fontFamily: F_SANS, fontSize: '9px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#6b7280', lineHeight: 1.35, whiteSpace: 'pre-line', margin: 0 }}>{s.lbl}</p>
              </div>
            ))}
          </div>

          {/* C — Location Advantages */}
          <div style={{
            flex: 1, padding: '14px 20px',
            borderRight: '1px solid rgba(13,26,36,0.1)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px',
          }}>
            <p style={{ fontFamily: F_JOST, fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-teal-dark)', marginBottom: '4px' }}>
              Location Advantages
            </p>
            {[
              'Close to New Town IT Hub',
              'Excellent Airport Connectivity',
              'Upcoming Infrastructure Boost',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-teal)', flexShrink: 0, opacity: 0.8 }} />
                <span style={{ fontFamily: F_SANS, fontSize: '13px', fontWeight: 500, color: 'var(--color-dark)' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* D — Price + CTA */}
          <div style={{
            width: '240px', flexShrink: 0, padding: '16px 20px',
            background: 'var(--color-dark, #0d1a24)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px',
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: F_SANS, fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', marginBottom: '4px' }}>
                2 &amp; 3 BHK Affordable Flats From
              </p>
              <p className="blink-price" style={{ fontFamily: F_JOST, fontSize: '30px', fontWeight: 700, color: 'var(--color-teal)', lineHeight: 1, margin: 0 }}>
                ₹65 Lacs*
              </p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              style={{
                width: '100%', padding: '12px',
                background: 'var(--color-teal)', color: '#fff',
                border: 'none', borderRadius: '6px',
                fontFamily: F_JOST, fontSize: '12px', fontWeight: 700,
                letterSpacing: '0.10em', textTransform: 'uppercase', cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(74,140,152,0.4)',
                transition: 'opacity 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Save This Deal
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
