import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact']

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.35s ease',
      padding: '0 24px'
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', height: 70,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <a href="#hero" onClick={e => handleNav(e, 'hero')} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.35rem', fontWeight: 700,
          color: scrolled ? '#E11D48' : '#E11D48',
          letterSpacing: '-0.01em'
        }}>
          Priyanshi<span style={{ color: '#0F172A' }}>.dev</span>
        </a>

        <ul style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="nav-desktop">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={e => handleNav(e, link)}
                style={{
                  padding: '8px 14px', borderRadius: 50, fontSize: '0.9rem',
                  fontWeight: 500, color: '#1F2937',
                  transition: 'all 0.2s', display: 'block'
                }}
                onMouseEnter={e => { e.target.style.background = '#FFF1F2'; e.target.style.color = '#E11D48' }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#1F2937' }}
              >{link}</a>
            </li>
          ))}
          <li>
            <a href="mailto:ypriyanshi399@gmail.com" className="btn-primary" style={{ padding: '9px 20px', fontSize: '0.88rem' }}>
              Hire Me
            </a>
          </li>
        </ul>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', flexDirection: 'column', gap: 5, padding: 8
        }} id="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: '#1F2937', borderRadius: 2,
              transition: 'all 0.3s'
            }} />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(12px)',
          borderTop: '1px solid #F3F4F6', padding: '16px 0 24px'
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={e => handleNav(e, link)}
              style={{
                display: 'block', padding: '12px 24px', fontSize: '0.95rem',
                fontWeight: 500, color: '#1F2937',
                borderBottom: '1px solid #F9FAFB'
              }}
            >{link}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          #hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
