function SkillBar({ name, level }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1F2937' }}>{name}</span>
        <span style={{ fontSize: '0.82rem', color: '#9CA3AF', fontWeight: 500 }}>{level}%</span>
      </div>
      <div style={{
        height: 8, background: '#F3F4F6', borderRadius: 50, overflow: 'hidden'
      }}>
        <div style={{
          height: '100%', width: `${level}%`,
          background: 'linear-gradient(90deg, #E11D48, #FB7185)',
          borderRadius: 50,
          transition: 'width 1s ease'
        }} />
      </div>
    </div>
  )
}

function SkillTag({ name }) {
  return (
    <span style={{
      display: 'inline-block',
      background: '#FFF1F2',
      color: '#BE123C',
      border: '1px solid #FECDD3',
      borderRadius: 50,
      padding: '7px 18px',
      fontSize: '0.85rem',
      fontWeight: 600,
      transition: 'all 0.2s'
    }}
      onMouseEnter={e => {
        e.target.style.background = '#E11D48'
        e.target.style.color = '#FFFFFF'
        e.target.style.borderColor = '#E11D48'
      }}
      onMouseLeave={e => {
        e.target.style.background = '#FFF1F2'
        e.target.style.color = '#BE123C'
        e.target.style.borderColor = '#FECDD3'
      }}
    >
      {name}
    </span>
  )
}

export default function Skills() {
  const proficiencies = [
    { name: 'JavaScript', level: 88 },
    { name: 'React.js / Next.js', level: 85 },
    { name: 'Node.js / Express.js', level: 82 },
    { name: 'Python / Django', level: 80 },
    { name: 'MongoDB / PostgreSQL', level: 78 },
    { name: 'SQL', level: 85 },
  ]

  const categories = [
    { title: 'Frontend', skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'TypeScript', 'Responsive Web Design'] },
    { title: 'Backend', skills: ['Node.js', 'Express.js', 'Django', 'REST APIs'] },
    { title: 'Database', skills: ['MongoDB', 'PostgreSQL'] },
    { title: 'Languages', skills: ['JavaScript', 'Python', 'SQL'] },
    { title: 'Version Control', skills: ['Git', 'GitHub'] }
  ]

  return (
    <section id="skills" style={{ background: '#F9FAFB' }}>
      <div className="container">
        <div className="section-header centered">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle">
            A curated set of technologies I use to build modern, scalable web applications.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 64, alignItems: 'start'
        }} className="skills-grid">
          <div style={{
            background: '#FFFFFF', borderRadius: 20, padding: 40,
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem', fontWeight: 700,
              color: '#0F172A', marginBottom: 32
            }}>Proficiency Levels</h3>
            {proficiencies.map(s => <SkillBar key={s.name} {...s} />)}
          </div>

          <div>
            {categories.map(cat => (
              <div key={cat.title} style={{ marginBottom: 32 }}>
                <h4 style={{
                  fontSize: '0.82rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#E11D48', marginBottom: 14
                }}>{cat.title}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {cat.skills.map(s => <SkillTag key={s} name={s} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}