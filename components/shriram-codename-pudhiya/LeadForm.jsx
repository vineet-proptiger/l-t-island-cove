'use client'
import React, { useState } from 'react'
import { PROJECT_ID, PROJECT_NAME, API_ENDPOINT, SHEET_NAME, SECRET_KEY, CITY_DISPLAY } from '../../lib/shriram-codename-pudhiya/config'
import { buildTrackingFields } from '../../lib/formMeta'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const inputClass = 'form-input mb-3'

const LeadForm = ({ formName = 'Hero Form', btnText = 'Submit Details', btnClass = 'btn-teal' }) => {
  const [formData, setFormData]     = useState({ fullname: '', email: '', phone: '' })
  const [loading, setLoading]       = useState(false)
  const [success, setSuccess]       = useState(false)
  const [error, setError]           = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: name === 'phone' ? value.replace(/\D/g, '') : value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!/^\d{10}$/.test(formData.phone)) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }
    setError(''); setLoading(true)
    const tracking = buildTrackingFields()
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

      {/* Phone */}
      <input
        type="tel" name="phone" required
        placeholder="10-digit mobile number"
        maxLength={10}
        value={formData.phone} onChange={handleChange}
        className={inputClass}
        style={{ fontFamily: F_SANS }}
      />

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
        style={{ width: '80%', padding: '13px', fontSize: '13px', marginBottom: '14px', marginLeft: 'auto', marginRight: 'auto', display: 'flex' }}
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
          I agree to receive updates as per the{' '}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#EB2027', textDecoration: 'underline' }}>Privacy Policy</a>
        </label>
      </div>

    </form>
  )
}

export default LeadForm
