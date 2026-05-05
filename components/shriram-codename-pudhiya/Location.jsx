'use client'
import { useState } from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const RED = '#EB2027'

const accordionData = [
  {
    title: 'Education',
    items: [
      { name: 'Spartan International School',                    dist: '5.1 Kms' },
      { name: 'Chennai Public School',                           dist: '6.2 Kms' },
      { name: 'Saveetha College Of Engineering',                 dist: '2.8 Kms' },
      { name: 'Rajalakshmi School Of Business and Technology',   dist: '2.6 Kms' },
    ],
  },
  {
    title: 'Healthcare',
    items: [
      { name: 'Saveetha Medical College & Hospital',                          dist: '4 Kms'   },
      { name: 'Panimalar Medical College Hospital & Research Institute',      dist: '8.9 Kms' },
    ],
  },
  {
    title: 'Entertainment',
    items: [
      { name: 'Santosa Cinema Hall (Formerly EVP Cinemas)', dist: '3.2 Kms' },
      { name: 'Queensland Amusement Park',                  dist: '4 Kms'   },
    ],
  },
  {
    title: 'Employment',
    items: [
      { name: 'Pattabiram Tidel Park',    dist: '12.8 Kms' },
      { name: 'DLF IT Park',             dist: '18.6 Kms' },
      { name: 'SIPCOT Irungattukottai',  dist: '7.1 Kms'  },
      { name: 'Sriperumbudur SIPCOT',    dist: '8 Kms'    },
      { name: 'Fintech City',            dist: '19.7 Kms' },
    ],
  },
]

const AccordionItem = ({ section, isOpen, toggle }) => (
  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
    <button
      onClick={toggle}
      style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 16px',
        background: isOpen ? RED : '#fff',
        border: 'none', cursor: 'pointer',
        transition: 'background 0.2s',
      }}
    >
      <span style={{
        fontFamily: F_JOST, fontSize: '14px', fontWeight: '600',
        color: isOpen ? '#fff' : RED, letterSpacing: '0.02em',
      }}>
        {section.title}
      </span>
      <svg
        width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke={isOpen ? '#fff' : RED} strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
        style={{ transition: 'transform 0.25s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>

    {isOpen && (
      <div style={{ padding: '12px 16px', background: '#fff' }}>
        {section.items.map((item, i) => (
          <p key={i} style={{
            fontFamily: F_SANS, fontSize: '13px', color: '#374151',
            margin: '0 0 6px', lineHeight: '1.5',
          }}>
            {item.name}{' '}–{' '}
            <strong style={{ fontFamily: F_JOST, color: '#1a1a1a', fontWeight: '700' }}>
              {item.dist}
            </strong>
          </p>
        ))}
      </div>
    )}
  </div>
)

const Location = ({ setIsOpen }) => {
  const [openIdx, setOpenIdx] = useState(0)

  const toggle = (i) => setOpenIdx(prev => prev === i ? -1 : i)

  return (
    <section id="location" style={{ padding: '64px 0', background: '#ffffff', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container mx-auto px-4 md:px-10">

        {/* Heading */}
        <h2 style={{
          fontFamily: F_JOST, fontSize: '28px', fontWeight: '700',
          color: RED, margin: '0 0 28px', letterSpacing: '-0.01em',
        }} data-aos="fade-up">
          Location
        </h2>

        {/* Map + Accordion */}
        <div className="flex flex-col lg:flex-row gap-6" style={{ alignItems: 'stretch' }} data-aos="fade-up">

          {/* Map */}
          <div className="w-full lg:w-[55%]">
            <div style={{
              borderRadius: '8px', overflow: 'hidden',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              minHeight: '380px',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.583187473769!2d80.02178517507775!3d13.047646487274758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b9bf14fb0df%3A0x36f2d9ebe4e763f8!2sShriram%20Codename%20Pudhiya%20Chennai!5e1!3m2!1sen!2sin!4v1777963230534!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shriram Codename Pudhiya Location"
              />
            </div>
          </div>

          {/* Accordion + CTA */}
          <div className="w-full lg:w-[45%]" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}>
              {accordionData.map((section, i) => (
                <AccordionItem
                  key={i}
                  section={section}
                  isOpen={openIdx === i}
                  toggle={() => toggle(i)}
                />
              ))}
            </div>

            {setIsOpen && (
              <div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn-gold-outline"
                  style={{ padding: '10px 28px' }}
                >
                  Enquire Now
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
