export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: '#0F172A', color: '#9CA3AF',
      padding: '48px 0 32px', borderTop: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 24
        }}>
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 6
            }}>
              Priyanshi<span style={{ color: '#E11D48' }}>.dev</span>
            </div>
            <div style={{ fontSize: '0.85rem' }}>
              Full-Stack Developer &amp; MERN Specialist
            </div>
          </div>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a href="https://github.com/student-priyanshi" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#E11D48'}
              onMouseLeave={e => e.target.style.color = '#9CA3AF'}
            >GitHub</a>
            <a href="https://linkedin.com/in/priyanshiyadav296" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#E11D48'}
              onMouseLeave={e => e.target.style.color = '#9CA3AF'}
            >LinkedIn</a>
            <a href="mailto:ypriyanshi399@gmail.com"
              style={{ fontSize: '0.85rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#E11D48'}
              onMouseLeave={e => e.target.style.color = '#9CA3AF'}
            >Email</a>
          </div>
        </div>

        <div style={{
          marginTop: 32, paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          textAlign: 'center', fontSize: '0.82rem'
        }}>
          © {year} Priyanshi Yadav. Built with React &amp; Vite.
        </div>
      </div>
    </footer>
  )
}
