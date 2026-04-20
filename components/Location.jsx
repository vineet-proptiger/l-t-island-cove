'use client'
import React, { useState } from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationCategories = [
  {
    title: 'Commute',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    items: [
      { name: 'Mahim Bus Station', time: '0.20 km' },
      { name: 'Mahim Bus Stand', time: '0.33 km' },
      { name: 'Mahim', time: '0.39 km' },
      { name: 'Mahim Junction', time: '0.44 km' },
      { name: 'Mahim Kajve Koliwada', time: '0.53 km' },
    ],
  },
  {
    title: 'Healthcare',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    items: [
      { name: 'Lion Tarachand Bapa Hospital And Research Centre', time: '0.26 km' },
      { name: 'SL Raheja Hospital', time: '0.33 km' },
      { name: 'S L Raheja Hospital', time: '0.34 km' },
      { name: 'Pikale Hospital', time: '0.41 km' },
      { name: 'Singh Nursing Home', time: '0.42 km' },
    ],
  },
  {
    title: 'Education',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    items: [
      { name: "St. Michael's High School", time: '0.35 km' },
      { name: 'Sacred Heart High School', time: '0.48 km' },
      { name: 'Don Bosco High School', time: '0.62 km' },
      { name: 'Mahim Municipal School', time: '0.70 km' },
      { name: 'St. Joseph High School', time: '0.85 km' },
    ],
  },
  {
    title: 'Shopping',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    items: [
      { name: 'Godhra Timber Mart', time: '0.34 km' },
      { name: 'Arctic Circle', time: '0.39 km' },
      { name: 'Indian Bank', time: '0.48 km' },
      { name: 'Citizen Credit Co-Operative Bank Ltd.', time: '0.50 km' },
      { name: 'Shirda Super Market', time: '0.50 km' },
    ],
  },
  {
    title: 'Entertainment',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
    items: [
      { name: 'Dadar Chowpatty Beach', time: '1.20 km' },
      { name: 'Shivaji Park', time: '1.40 km' },
      { name: 'Mahim Beach', time: '0.60 km' },
      { name: 'Worli Sea Face', time: '2.10 km' },
      { name: 'Band Stand Promenade', time: '3.50 km' },
    ],
  },
  {
    title: 'Food',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    items: [
      { name: 'Gee-Lee Chinese', time: '0.47 km' },
      { name: 'Capri Bar & Restaurant', time: '0.48 km' },
      { name: 'Swagat', time: '0.48 km' },
      { name: 'Hotel Gopal Krishna', time: '0.48 km' },
      { name: 'Shree Shiv Sagar Glass House', time: '0.49 km' },
    ],
  },
]

const Location = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="location" style={{
      padding: '56px 0',
      background: '#f8f9fa',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: '48px 48px',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-teal-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-teal)',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-teal-light)', marginBottom: '10px',
          }}>Mahim, Mumbai</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: '0 0 6px', letterSpacing: '-0.01em',
          }}>
            Location{' '}
            <span style={{ color: 'var(--color-teal)' }}>Advantages</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', borderRadius: '2px', margin: '8px auto 12px' }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT — Accordion */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid #f0f0f0',
              overflow: 'hidden',
            }}>
              {locationCategories.map((cat, ci) => {
                const isOpen = openIndex === ci
                return (
                  <div key={ci} style={{ borderBottom: ci < locationCategories.length - 1 ? '1px solid #f0f0f0' : 'none' }}>

                    {/* Accordion Header */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : ci)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 20px',
                        background: isOpen
                          ? 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'
                          : '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background 0.25s ease',
                        borderLeft: isOpen ? '4px solid var(--color-teal)' : '4px solid transparent',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: isOpen ? 'var(--color-teal)' : '#9ca3af', transition: 'color 0.25s' }}>
                          {cat.icon}
                        </span>
                        <span style={{
                          fontFamily: F_JOST, fontSize: '13px', fontWeight: '800',
                          color: isOpen ? '#fff' : '#374151',
                          textTransform: 'uppercase', letterSpacing: '0.06em',
                          transition: 'color 0.25s',
                        }}>
                          {cat.title}
                        </span>
                      </div>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={isOpen ? 'var(--color-teal)' : '#9ca3af'}
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Accordion Body */}
                    <div style={{
                      maxHeight: isOpen ? '400px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}>
                      <div style={{ padding: '4px 20px 12px' }}>
                        {cat.items.map((item, i) => (
                          <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 0',
                            borderBottom: i < cat.items.length - 1 ? '1px solid #f8f8f8' : 'none',
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span style={{
                                width: '7px', height: '7px', borderRadius: '50%',
                                background: 'var(--color-teal)', flexShrink: 0,
                              }} />
                              <span style={{
                                fontSize: '13.5px', color: '#4b5563', fontWeight: '500',
                                fontFamily: F_SANS, letterSpacing: '0.01em',
                              }}>{item.name}</span>
                            </div>
                            {item.time && (
                              <span style={{
                                fontSize: '12px', color: 'var(--color-teal-dark)', fontWeight: '800',
                                fontFamily: F_JOST, whiteSpace: 'nowrap', marginLeft: '10px',
                                background: 'var(--color-teal-bg)', padding: '2px 10px',
                                borderRadius: '20px', border: '1px solid var(--color-teal-light)',
                              }}>{item.time}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 8px 32px var(--color-shadow-inner)',
              border: '2px solid var(--color-teal)',
              height: '100%', minHeight: '420px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', zIndex: 10,
              }} />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4623371734206!2d72.83994687520459!3d19.043399582154514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9874b617a9b%3A0x785ada12f8d1c061!2sL%26T%20Realty%20Island%20Cove%20Mahim%20Sales%20Experience%20Gallery!5e0!3m2!1sen!2sin!4v1776684144060!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-teal)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Mahim, Mumbai
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
