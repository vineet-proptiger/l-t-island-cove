'use client'
import Image from 'next/image'
import { heroImages } from '../../lib/shriram-codename-pudhiya/images'

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
      <div className="relative w-full h-[300px] md:h-[calc(100vh-68px)] md:min-h-[520px]">

        {/* Desktop Image */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src={heroImages.banner}
            alt="Shriram Codename Pudhiya"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-[1]" style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.20) 55%, rgba(0,0,0,0.05) 100%)',
          }} />
          {/* Bottom extra darkening for text area */}
          <div className="absolute bottom-0 left-0 right-0 h-[45%] z-[1] pointer-events-none" style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
          }} />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden absolute inset-0">
           <Image
            src={heroImages.mobile}
            alt="Shriram Codename Pudhiya"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
           <div className="absolute inset-0 z-[1] pointer-events-none" style={{
            background: 'linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.8) 100%)',
          }} />
        </div>

        {/* ── Text content overlay ── */}
        <div className="absolute bottom-0 left-0 right-0 z-[2] p-0">
          {/* Main text block */}
          <div className="container mx-auto px-4 md:px-10 pb-[60px] md:pb-[28px]">

            {/* Project name */}
            <h1 className="text-[clamp(26px,3.5vw,50px)] font-extrabold text-white mb-[6px] leading-[1.1] tracking-[-0.01em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" style={{
              fontFamily: F_JOST,
            }}>
              Shriram Codename Pudhiya
            </h1>

            {/* Location */}
            <div className="flex items-center gap-[6px] mb-[10px] md:mb-[14px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="rgba(255,255,255,0.85)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-[14px] font-medium text-white/85" style={{
                fontFamily: F_SANS,
              }}>
                Thirumazhisai, Chennai
              </span>
            </div>

            {/* Subtitle */}
            <h2 className="text-[clamp(14px,1.6vw,20px)] font-bold text-white mb-[8px] md:mb-[12px]" style={{
              fontFamily: F_JOST,
            }}>
              Luxurious 1, 2 and 3 BHK Apartments
            </h2>

             {/* Price — directly on hero image, no separate strip */}
             <div className="mb-[10px] md:mb-[18px]">
              <p className="text-[12px] font-medium text-white/70 m-0 mb-[2px]" style={{
                fontFamily: F_SANS,
              }}>
                Starts at
              </p>
              <p className="text-[clamp(26px,3vw,36px)] font-bold m-0 leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style={{
                fontFamily: F_JOST, color: RED,
              }}>
                32 Lakhs*
              </p>
            </div>

            {/* Highlights */}
            <div className="hidden md:flex flex-col gap-[5px] mb-[18px]">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-[8px]">
                  <span className="text-[13px] font-normal text-white/90" style={{
                    fontFamily: F_SANS,
                  }}>
                    <span className="font-bold mr-[4px]">&raquo;</span>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Highlights (Below Hero Image) */}
      <div className="flex md:hidden flex-col gap-[8px] px-4 py-5" style={{ backgroundColor: RED }}>
        {highlights.map((item, i) => (
          <div key={i} className="flex items-start gap-[8px]">
            <span className="text-[13px] font-normal text-white" style={{
              fontFamily: F_SANS,
            }}>
              <span className="font-bold mr-[4px]">&raquo;</span>
              {item}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}
