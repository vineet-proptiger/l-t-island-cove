'use client'
import React, { useState, useEffect } from 'react'
import { PROJECT_ID, PROJECT_NAME, API_ENDPOINT, SHEET_NAME, SECRET_KEY, CITY_DISPLAY } from '../../lib/shriram-config'
import { getGeo, buildTrackingFields } from '../../lib/formMeta'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const inputClass = 'form-input mb-3'

const LeadForm = ({ formName = 'Hero Form', btnText = 'Submit Details', btnClass = 'btn-gold' }) => {
  const [formData, setFormData]     = useState({ fullname: '', email: '', phone: '' })
  const [loading, setLoading]       = useState(false)
  const [success, setSuccess]       = useState(false)
  const [error, setError]           = useState('')
  const [ipAddress, setIpAddress]   = useState('')
  const [geoAddress, setGeoAddress] = useState(null)

  useEffect(() => {
    getGeo().then(d => {
      if (!d) return
      setIpAddress(d.ip || '')
      setGeoAddress({ city: d.city, region: d.region, postal_code: d.postal_code, country: d.country })
    })
  }, [])

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    if (!formData.phone || formData.phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }
    setError(''); setLoading(true)
    const tracking = buildTrackingFields(ipAddress, geoAddress)
    const payload  = new FormData()
    payload.append('fullname',    formData.fullname)
    payload.append('email',       formData.email)
    payload.append('phone',       formData.phone)
    payload.append('projectId',   PROJECT_ID)
    payload.append('projectName', PROJECT_NAME)
    payload.append('form_name',   formName)
    payload.append('sheet_name',  SHEET_NAME)
    payload.append('secret',      SECRET_KEY)
    payload.append('city',        CITY_DISPLAY)
    Object.entries(tracking).forEach(([k, v]) => payload.append(k, v))
    try {
      const res  = await fetch(API_ENDPOINT, { method: 'POST', body: payload })
      const data = await res.json()
      if (data.status) {
        setSuccess(true)
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || []
          const nameParts = formData.fullname.trim().split(' ')
          window.dataLayer.push({
            event: 'lead_submit_success', form_name: formName,
            user_data: {
              email:      formData.email.trim() || undefined,
              phone:      formData.phone,
              first_name: nameParts[0] || '',
              last_name:  nameParts.slice(1).join(' ') || '',
              address:    geoAddress,
            },
          })
        }
      } else {
        setError(data.msg || 'Submission failed. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) return (
    <div style={{ textAlign: 'center', padding: '32px 0' }}>
      <div style={{
        width: '56px', height: '56px', borderRadius: '50%',
        background: '#FEF2F2',
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px',
      }}>
        <svg width="26" height="26" fill="none" stroke="#EB2027" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', fontFamily: F_JOST, margin: '0 0 6px' }}>
        Thank You!
      </h4>
      <p style={{ color: '#6b7280', fontSize: '13px', fontFamily: F_SANS }}>
        Our team will contact you shortly.
      </p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

      {/* Name */}
      <input
        type="text" name="fullname" required
        placeholder="Name"
        value={formData.fullname} onChange={handleChange}
        className={inputClass}
        style={{ fontFamily: F_SANS }}
      />

      {/* Email */}
      <input
        type="email" name="email"
        placeholder="Email (optional)"
        value={formData.email} onChange={handleChange}
        className={inputClass}
        style={{ fontFamily: F_SANS }}
      />

      {/* Phone with +91 prefix */}
      <div style={{ position: 'relative', marginBottom: '12px' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          display: 'flex', alignItems: 'center',
          padding: '0 10px 0 14px',
          borderRight: '1px solid #e5e7eb',
          fontFamily: F_SANS, fontSize: '14px', color: '#374151', fontWeight: '500',
          pointerEvents: 'none',
        }}>
          +91
        </div>
        <input
          type="tel" name="phone" required
          placeholder="Phone"
          maxLength={10}
          value={formData.phone} onChange={handleChange}
          className="form-input"
          style={{ fontFamily: F_SANS, paddingLeft: '56px' }}
        />
      </div>

      {error && (
        <p style={{ color: '#EB2027', fontSize: '12px', fontFamily: F_SANS, margin: '-4px 0 10px' }}>
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className={btnClass}
        style={{ width: '100%', padding: '13px', fontSize: '13px', marginBottom: '14px' }}
      >
        {loading ? 'Submitting...' : btnText}
      </button>

      {/* Consent */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
        <input
          type="checkbox" id="privacy-lead" required defaultChecked
          style={{ accentColor: '#EB2027', marginTop: '3px', flexShrink: 0, width: '13px', height: '13px' }}
        />
        <label htmlFor="privacy-lead" style={{
          fontSize: '11px', color: '#6b7280', fontFamily: F_SANS,
          lineHeight: 1.6, cursor: 'pointer',
        }}>
          I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
        </label>
      </div>

    </form>
  )
}

export default LeadForm
