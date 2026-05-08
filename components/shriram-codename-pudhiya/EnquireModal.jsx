'use client'
import React, { useEffect, useRef } from 'react'
// import Image from 'next/image'
import LeadForm from './LeadForm'
// import { popupImage } from '../../lib/shriram-codename-pudhiya/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const EnquireModal = ({ isOpen, setIsOpen }) => {
  const autoTriggered = useRef(false)
  const intervalRef   = useRef(null)

  useEffect(() => {
    if (autoTriggered.current) return
    const initial = setTimeout(() => {
      autoTriggered.current = true
      setIsOpen(true)
      intervalRef.current = setInterval(() => setIsOpen(true), 30000)
    }, 30000)
    return () => {
      clearTimeout(initial)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [setIsOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)' }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative bg-white w-full rounded-xl overflow-hidden shadow-2xl flex flex-col sm:flex-row"
        style={{
          maxWidth: '400px',
          width: '92vw',
          maxHeight: '95vh',
          animation: 'slideInRight 0.4s cubic-bezier(0.22,1,0.36,1) forwards',
        }}
        onClick={e => e.stopPropagation()}
      >

        {/* LEFT — Image */}
        {/* <div className="hidden sm:block sm:w-[50%] shrink-0 relative" style={{ minHeight: '100%' }}>
          <Image
            src={popupImage}
            alt="Shriram Codename Pudhiya"
            fill
            className="object-cover"
            sizes="45vw"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 60%)',
          }} />
        </div> */}

        {/* RIGHT — Form */}
        <div className="flex-1 flex flex-col overflow-y-auto">

          {/* Mobile image strip */}
          {/* <div className="sm:hidden w-full h-44 relative shrink-0">
            <Image
              src={popupImage}
              alt="Shriram Codename Pudhiya"
              fill
              className="object-cover"
              style={{ objectPosition: 'top' }}
              sizes="100vw"
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
            }} />
          </div> */}

          {/* Form area */}
          <div style={{ padding: '40px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>

            {/* Title row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{
                fontFamily: F_JOST, fontSize: '18px', fontWeight: '700',
                color: '#111827', margin: 0, lineHeight: 1.2,
              }}>
                Shriram Codename Pudhiya
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#6b7280', fontSize: '22px', lineHeight: 1,
                  padding: '0 0 0 12px', flexShrink: 0,
                }}
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <LeadForm formName="Popup Modal" btnText="Download Brochure" btnClass="btn-teal" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnquireModal
