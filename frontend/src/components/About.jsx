export default function About() {
  const highlights = [
    { icon: '🎓', title: 'B.Sc. Information Technology', desc: 'KES Shroff College — CGPA 8.41' },
    { icon: '💻', title: 'Full-Stack Developer', desc: 'MERN Stack + Django + REST APIs' },
    { icon: '🏢', title: 'Software Developer', desc: 'MCM BPO PVT LTD (Dec 2025 – Jul 2026)' },
    { icon: '📍', title: 'Location', desc: 'Kandivali, Mumbai, India' },
  ]

  return (
    <section id="about" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center'
        }} className="about-grid">
          <div>
            <p className="section-label">About Me</p>
            <h2 className="section-title">Passionate about building great web experiences</h2>
            <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: 1.85, marginBottom: 24 }}>
              I'm a highly motivated developer with strong backend engineering and MERN stack skills.
              I enjoy building dynamic web applications with clean code, scalable architecture, and real-world impact.
            </p>
            <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: 1.85, marginBottom: 32 }}>
              I've worked on everything from lead management systems with Django to full-stack portals using React and Node.js.
              I'm always looking for ways to grow and take on new technical challenges.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="mailto:ypriyanshi399@gmail.com" className="btn-primary">
                Email Me
              </a>
              <a href="https://linkedin.com/in/priyanshiyadav296" target="_blank" rel="noopener noreferrer" className="btn-outline">
                LinkedIn
              </a>
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16
          }}>
            {highlights.map(h => (
              <div key={h.title} style={{
                background: '#FFF1F2',
                borderRadius: 16, padding: '24px 20px',
                border: '1px solid #FFE4E6',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#FFE4E6'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(225,29,72,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#FFF1F2'
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{h.icon}</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>{h.title}</div>
                <div style={{ fontSize: '0.82rem', color: '#9CA3AF', lineHeight: 1.5 }}>{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
