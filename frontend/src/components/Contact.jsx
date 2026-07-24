import { useState } from 'react'
import resume from '../assets/Resume.pdf'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:ypriyanshi399@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'ypriyanshi399@gmail.com', href: 'mailto:ypriyanshi399@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 8652667719', href: 'tel:+918652667719' },
    { icon: '📍', label: 'Location', value: 'Kandivali, Mumbai, India', href: null },
  ]

  const socials = [
  {
    icon: '⌨️',
    label: 'GitHub',
    url: 'https://github.com/student-priyanshi'
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/priyanshiyadav296'
  },
  {
    icon: '📄',
    label: 'Resume',
    url: resume,
    download: true
  }
]

  return (
    <section id="contact" style={{
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      color: '#FFFFFF', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '40%', height: '100%',
        background: 'radial-gradient(ellipse at top right, rgba(225,29,72,0.18) 0%, transparent 65%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header centered">
          <p className="section-label" style={{ color: '#FB7185' }}>Get In Touch</p>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>Let's Work Together</h2>
          <p className="section-subtitle" style={{ color: '#9CA3AF' }}>
            Have a project in mind or just want to say hello? I'm always open to discussing new opportunities.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56
        }} className="contact-grid">
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.4rem', fontWeight: 700,
              marginBottom: 16
            }}>Contact Information</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 36 }}>
              Reach out through any of the channels below — I usually respond within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
              {contactInfo.map(c => (
                <a key={c.label} href={c.href || '#'} style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '16px 20px', background: 'rgba(255,255,255,0.04)',
                  borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(225,29,72,0.12)'
                    e.currentTarget.style.borderColor = 'rgba(225,29,72,0.3)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  }}
                >
                  <span style={{ fontSize: '1.3rem' }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#FFFFFF' }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              {socials.map((s) => (
  <a
    key={s.label}
    href={s.url}
    target={s.download ? '_self' : '_blank'}
    rel="noopener noreferrer"
    download={s.download ? 'Priyanshi_Yadav_Resume.pdf' : undefined}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 18px',
      borderRadius: 50,
      background: 'rgba(225,29,72,0.15)',
      color: '#FB7185',
      fontSize: '0.85rem',
      fontWeight: 600,
      border: '1px solid rgba(225,29,72,0.25)',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = '#E11D48';
      e.currentTarget.style.color = '#FFFFFF';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'rgba(225,29,72,0.15)';
      e.currentTarget.style.color = '#FB7185';
    }}
  >
    {s.icon} {s.label}
  </a>
))}
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.04)', borderRadius: 20, padding: 32,
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>✉️</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginBottom: 12 }}>
                  Opening your email client…
                </h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>
                  If nothing happened, email me directly at ypriyanshi399@gmail.com
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem', fontWeight: 700, marginBottom: 24
                }}>Send Me a Message</h3>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#9CA3AF', marginBottom: 8, fontWeight: 500 }}>
                    Your Name
                  </label>
                  <input
                    type="text" required value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 10, color: '#FFFFFF',
                      fontSize: '0.92rem', fontFamily: 'inherit',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={e => e.target.style.borderColor = '#E11D48'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#9CA3AF', marginBottom: 8, fontWeight: 500 }}>
                    Email Address
                  </label>
                  <input
                    type="email" required value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 10, color: '#FFFFFF',
                      fontSize: '0.92rem', fontFamily: 'inherit'
                    }}
                    onFocus={e => e.target.style.borderColor = '#E11D48'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#9CA3AF', marginBottom: 8, fontWeight: 500 }}>
                    Message
                  </label>
                  <textarea
                    required rows={5} value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 10, color: '#FFFFFF',
                      fontSize: '0.92rem', fontFamily: 'inherit',
                      resize: 'vertical', minHeight: 120
                    }}
                    onFocus={e => e.target.style.borderColor = '#E11D48'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
