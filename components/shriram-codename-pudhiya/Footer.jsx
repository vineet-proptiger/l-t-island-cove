'use client'
import React from 'react'
import Link from 'next/link'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer style={{ background: '#1a1a1a', color: '#fff' }}>

    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '52px 24px 28px', textAlign: 'center' }}>
      <h2 style={{
        fontSize: '22px', fontWeight: '800', fontFamily: F_JOST,
        marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.06em',
      }}>
        Shriram Codename Pudhiya
      </h2>
      <p style={{
        fontSize: '12px', color: '#EB2027', fontFamily: F_JOST,
        fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px',
      }}>
        Thirumazhisai, Chennai · By Shriram Properties
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <span style={{ width: '36px', height: '2px', background: '#EB2027', borderRadius: '2px' }} />
      </div>
      <p style={{
        fontSize: '14px', color: '#bbb', fontFamily: F_SANS, lineHeight: 1.8,
        marginBottom: '0', textAlign: 'center',
      }}>
        Shriram Codename Pudhiya is a premium residential project by Shriram Properties, offering 1, 2 &amp; 3 BHK homes starting ₹32 Lakhs* at Thirumazhisai, Chennai. Spread across 8.9 acres with 7 towers, 1,053 apartments, and 45+ modern amenities — designed for a complete, vibrant lifestyle in West Chennai.
      </p>
    </div>

    <div
      className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 py-4 px-6 border-t"
      style={{ borderColor: '#2d2d2d', maxWidth: '1200px', margin: '0 auto' }}
    >
      <p style={{ fontSize: '12px', color: '#777', fontFamily: F_SANS }}>
        &copy; 2026 Shriram Codename Pudhiya. All rights reserved.
      </p>
      <Link href="/shriram-codename-pudhiya/privacy-policy" style={{ fontSize: '12px', color: '#EB2027', fontFamily: F_SANS }}>
        Privacy Policy
      </Link>
    </div>

    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '10px 24px 20px', textAlign: 'center' }}>
      <p style={{ fontSize: '10px', color: '#666', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
        <strong style={{ color: '#999' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>
    </div>
  </footer>
)

export default Footer
