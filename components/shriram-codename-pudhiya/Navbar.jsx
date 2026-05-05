'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { logoImages } from '../../lib/shriram-images'

const RED = '#EB2027'

const navLinks = [
  { name: 'Home',       href: '#' },
  { name: 'Overview',   href: '#overview' },
  { name: 'Gallery',    href: '#gallery' },
  { name: 'Floor Plan', href: '#masterplan' },
  { name: 'Price',      href: '#pricing' },
  { name: 'Amenities',  href: '#amenities' },
  { name: 'Location',   href: '#location' },
]

const Navbar = ({ setIsOpen }) => {
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [scrolled, setScrolled]       = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)

      const sectionMap = [
        { id: 'location',   name: 'Location' },
        { id: 'amenities',  name: 'Amenities' },
        { id: 'pricing',    name: 'Price' },
        { id: 'masterplan', name: 'Floor Plan' },
        { id: 'gallery',    name: 'Gallery' },
        { id: 'overview',   name: 'Overview' },
      ]

      for (const s of sectionMap) {
        const el = document.getElementById(s.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 80) {
            setActiveSection(s.name)
            return
          }
        }
      }
      setActiveSection('Home')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.1)' : '0 1px 4px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between" style={{ height: '68px' }}>

          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src={logoImages.tarc}
              alt="Shriram Codename Pudhiya"
              style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = activeSection === link.name
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-jost), Montserrat, sans-serif',
                    fontSize: '13px',
                    fontWeight: '600',
                    padding: '6px 14px',
                    borderRadius: '3px',
                    background: isActive ? RED : 'transparent',
                    color: isActive ? '#fff' : '#333333',
                    transition: 'all 0.2s',
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = RED
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#333333'
                    }
                  }}
                >
                  {link.name}
                </a>
              )
            })}
          </div>

          {/* Enquire Now button — Desktop */}
          <button
            onClick={() => setIsOpen(true)}
            className="hidden lg:flex btn-gold-outline"
            style={{ fontSize: '13px', padding: '8px 22px' }}
          >
            Enquire Now
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          {navLinks.map(link => {
            const isActive = activeSection === link.name
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '13px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'var(--font-jost), Montserrat, sans-serif',
                  color: isActive ? RED : '#333',
                  borderBottom: '1px solid #f5f5f5',
                  background: isActive ? '#FEF2F2' : 'transparent',
                  borderLeft: isActive ? `3px solid ${RED}` : '3px solid transparent',
                }}
              >
                {link.name}
              </a>
            )
          })}
          <div className="p-4">
            <button
              onClick={() => { setIsOpen(true); setMobileOpen(false) }}
              className="w-full btn-gold"
              style={{ justifyContent: 'center' }}
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
