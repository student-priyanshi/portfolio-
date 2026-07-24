export default function Education() {
  const education = [
    {
      degree: 'B.Sc. in Information Technology',
      school: 'KES Shroff College of Arts & Commerce',
      duration: '2022 – 2025',
      detail: 'CGPA: 8.41 / 10 — Foundation in software engineering, databases, web development, and systems design.',
      badge: '🎓'
    },
    {
      degree: 'Higher Secondary (HSC)',
      school: 'KES Shroff College',
      duration: '2021 – 2022',
      detail: 'Science Stream — Completed pre-university education with focus on foundational computing and mathematics.',
      badge: '🏫'
    },
  ]

  const certifications = [
    { title: 'Full-Stack Web Development', issuer: 'Self-Taught + Internship', icon: '💻' },
    { title: 'Django & REST API Development', issuer: 'On-the-job Training', icon: '🐍' },
    { title: 'React.js Frontend Development', issuer: 'Project-Based Learning', icon: '⚛️' },
    { title: 'Database Management (SQL)', issuer: 'Academic + Professional', icon: '🗄️' },
  ]

  return (
    <section id="education" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header centered">
          <p className="section-label">Background</p>
          <h2 className="section-title">Education &amp; Certifications</h2>
          <p className="section-subtitle">
            Academic foundation and continuous learning that shape my technical expertise.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56
        }} className="edu-grid">
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem', fontWeight: 700,
              color: '#0F172A', marginBottom: 28
            }}>Education</h3>
            {education.map(ed => (
              <div key={ed.degree} style={{
                display: 'flex', gap: 20, marginBottom: 24,
                background: '#FFF1F2', borderRadius: 16, padding: 24,
                border: '1px solid #FFE4E6'
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: '#FFFFFF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', flexShrink: 0
                }}>{ed.badge}</div>
                <div>
                  <div style={{
                    fontSize: '0.78rem', fontWeight: 600,
                    color: '#E11D48', marginBottom: 4
                  }}>{ed.duration}</div>
                  <div style={{
                    fontSize: '1rem', fontWeight: 700,
                    color: '#0F172A', marginBottom: 4
                  }}>{ed.degree}</div>
                  <div style={{
                    fontSize: '0.85rem', color: '#6B7280',
                    marginBottom: 8, fontWeight: 500
                  }}>{ed.school}</div>
                  <div style={{ fontSize: '0.84rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                    {ed.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem', fontWeight: 700,
              color: '#0F172A', marginBottom: 28
            }}>Certifications &amp; Training</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {certifications.map(c => (
                <div key={c.title} style={{
                  background: '#FFFFFF', borderRadius: 16, padding: 24,
                  border: '1px solid #F3F4F6',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#FECDD3'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(225,29,72,0.10)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#F3F4F6'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  <div style={{ fontSize: '1.6rem', marginBottom: 12 }}>{c.icon}</div>
                  <div style={{
                    fontSize: '0.88rem', fontWeight: 700,
                    color: '#0F172A', marginBottom: 6, lineHeight: 1.4
                  }}>{c.title}</div>
                  <div style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>{c.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
