'use client'
import React from 'react'
import Image from 'next/image'
import { masterplanImages } from '../../lib/shriram-codename-pudhiya/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const RED = '#EB2027'

const plans = [
  { label: '2 BHK',       img: masterplanImages.bhk2 },
  { label: '3 BHK',       img: masterplanImages.bhk3 },
  { label: 'Master Plan', img: masterplanImages.masterPlan },
]

const MasterPlan = ({ setIsOpen }) => {
  return (
    <section id="masterplan" style={{ padding: '64px 0', background: '#ffffff', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container mx-auto px-4 md:px-10">

        {/* Heading */}
        <h2 style={{
          fontFamily: F_JOST, fontSize: '28px', fontWeight: '700',
          color: RED, margin: '0 0 36px', letterSpacing: '-0.01em',
        }} data-aos="fade-up">
          Floor Plan
        </h2>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          data-aos="fade-up" data-aos-delay="60"
        >
          {plans.map((plan, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              {/* Black pill label */}
              <div style={{
                background: '#111',
                color: '#fff',
                fontFamily: F_JOST,
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.06em',
                padding: '7px 24px',
                borderRadius: '4px',
                marginBottom: '-14px',
                zIndex: 2,
                position: 'relative',
              }}>
                {plan.label}
              </div>

              {/* Card */}
              <div style={{
                width: '100%',
                border: '1.5px solid #d1d5db',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                background: '#f9f9f9',
                paddingTop: '14px',
              }}>
                {/* Blurred image */}
                <div style={{ position: 'relative', height: '260px' }}>
                  <Image
                    src={plan.img}
                    alt={plan.label}
                    fill
                    className="object-contain"
                    style={{ filter: 'blur(5px)', transform: 'scale(1.05)', padding: '16px' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* CTA overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <button
                      onClick={() => setIsOpen(true)}
                      className="btn-teal-outline"
                      style={{
                        background: 'rgba(255,255,255,0.92)',
                        backdropFilter: 'blur(4px)',
                        padding: '9px 22px',
                        fontSize: '12px',
                      }}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MasterPlan
