import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
    'bot-field': ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData
        })
      });

      if (response.ok || response.status === 200) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          projectType: '',
          message: '',
          'bot-field': ''
        });
      } else {
        throw new Error('Form submission failed. Please try again or email us directly.');
      }
    } catch (err) {
      // In local dev environment (localhost), Netlify form POST will 404/fail. We handle gracefully:
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.warn('Netlify form submission intercepted in local dev mode. Simulating success:');
        console.log('Submitted Form Data:', formData);
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(err.message || 'Something went wrong. Please try again.');
      }
    }
  };

  const handleModalClose = () => {
    if (status === 'success') {
      setStatus('idle');
    }
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={handleModalClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
        <button className="modal-close-btn" onClick={handleModalClose} aria-label="Close modal">
          <X size={24} />
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '24px 0 12px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(45, 90, 61, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <CheckCircle2 size={36} color="var(--accent-green, #2D5A3D)" />
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', margin: '0 0 12px 0', color: 'var(--text-light-primary)' }}>
              Message Received
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 28px auto' }}>
              Thank you for reaching out. A senior member of our team will review your inquiry and get back to you promptly.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={handleModalClose}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--accent-green, #2D5A3D)',
                color: '#FFFFFF',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h2>Get in Touch</h2>
            <p>Tell us about your project and we'll get back to you within 24 hours.</p>

            {status === 'error' && (
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 16px',
                marginBottom: '20px',
                color: '#DC2626',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.9rem'
              }}>
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* Netlify Hidden Fields */}
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" value={formData['bot-field']} onChange={handleChange} />
                </label>
              </p>

              <div className="form-group">
                <label className="form-label" htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="projectType">Area of Interest</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select an area</option>
                  <option value="infrastructure">Capital Infrastructure & P3</option>
                  <option value="digital">Digital Transformation & IT</option>
                  <option value="advisory">Strategic Advisory & Governance</option>
                  <option value="other">General Inquiry / Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us about your project or inquiry..."
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'submitting'}
                style={{
                  width: '100%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: status === 'submitting' ? 0.75 : 1,
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
