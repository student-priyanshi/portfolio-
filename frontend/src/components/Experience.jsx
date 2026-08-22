function ExperienceCard({ job, index }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '120px 1fr',
      gap: 32, marginBottom: 40, position: 'relative'
    }}>
      <div style={{ position: 'relative', paddingTop: 8 }}>
        <div style={{
          fontSize: '0.85rem', fontWeight: 700,
          color: '#E11D48', marginBottom: 4,
          whiteSpace: 'pre-line'
        }}>{job.duration}</div>
        <div style={{
          position: 'absolute', left: 110, top: 12,
          width: 14, height: 14, borderRadius: '50%',
          background: '#E11D48',
          boxShadow: '0 0 0 4px #FFE4E6'
        }} />
      </div>

      <div style={{
        background: '#FFFFFF', borderRadius: 16, padding: 28,
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        border: '1px solid #F3F4F6',
        transition: 'all 0.3s ease'
      }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(225,29,72,0.12)'
          e.currentTarget.style.borderColor = '#FECDD3'
          e.currentTarget.style.transform = 'translateX(6px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'
          e.currentTarget.style.borderColor = '#F3F4F6'
          e.currentTarget.style.transform = 'none'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A' }}>{job.role}</h3>
          <span style={{
            background: '#FFF1F2', color: '#BE123C',
            fontSize: '0.78rem', fontWeight: 600,
            padding: '4px 12px', borderRadius: 50
          }}>{job.type}</span>
        </div>
        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#E11D48', marginBottom: 16 }}>
          {job.company}
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {job.points.map((p, i) => (
            <li key={i} style={{
              display: 'flex', gap: 12, marginBottom: 10,
              fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.7
            }}>
              <span style={{ color: '#E11D48', marginTop: 8, flexShrink: 0, width: 6, height: 6, background: '#E11D48', borderRadius: '50%', display: 'inline-block' }} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  const jobs = [
    {
      role: 'Software Developer',
      company: 'MCM BPO Pvt. Ltd., Mumbai',
      duration: 'Dec 2025\nJul 2026',
      type: 'Full-time',
      points: [
        'Developed reusable React.js frontend components and integrated REST APIs for scalable and maintainable web applications.',
        'Designed and developed responsive pages for the Twiching communication platform, including Team Chat, SMS/MMS, HD Video Meetings, and Voice Communication features using React.js.',
        'Implemented responsive and user-friendly interfaces with cross-browser compatibility and consistent layouts across desktop, tablet, and mobile devices.',
        'Collaborated with developers and designers to implement pixel-perfect UI designs, improve user experience, and convert business requirements into functional web interfaces.',
        'Integrated REST APIs with frontend applications to retrieve, process, and display dynamic application data.',
        'Worked with Python, Django, SQL, and frontend technologies to develop and maintain internal business applications.',
        'Implemented CRUD operations, database integration, API handling, debugging, and feature enhancements for internal applications.'
      ]
    },
  ]

  return (
    <section id="experience" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header centered">
          <p className="section-label">Career Path</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey building and shipping real-world applications.
          </p>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {jobs.map((job, i) => <ExperienceCard key={i} job={job} index={i} />)}
        </div>
      </div>
    </section>
  )
}