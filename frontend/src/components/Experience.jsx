
function ExperienceCard({ job, index }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 32,
      marginBottom: 40,
      position: 'relative'
    }}>
      <div style={{ position: 'relative', paddingTop: 8 }}>
        <div style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#E11D48',
          marginBottom: 4,
          whiteSpace: 'pre-line'
        }}>
          {job.duration}
        </div>

        <div style={{
          position: 'absolute',
          left: 110,
          top: 12,
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: '#E11D48',
          boxShadow: '0 0 0 4px #FFE4E6'
        }} />
      </div>

      <div style={{
        background: '#FFFFFF',
        borderRadius: 16,
        padding: 28,
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        border: '1px solid #F3F4F6',
        transition: 'all 0.3s ease'
      }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow =
            '0 8px 32px rgba(225,29,72,0.12)'
          e.currentTarget.style.borderColor = '#FECDD3'
          e.currentTarget.style.transform = 'translateX(6px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow =
            '0 2px 12px rgba(0,0,0,0.05)'
          e.currentTarget.style.borderColor = '#F3F4F6'
          e.currentTarget.style.transform = 'none'
        }}
      >

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          flexWrap: 'wrap',
          gap: 12,
          marginBottom: 8
        }}>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#0F172A'
          }}>
            {job.role}
          </h3>

          <span style={{
            background: '#FFF1F2',
            color: '#BE123C',
            fontSize: '0.78rem',
            fontWeight: 600,
            padding: '4px 12px',
            borderRadius: 50
          }}>
            {job.type}
          </span>
        </div>

        <div style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          color: '#E11D48',
          marginBottom: 16
        }}>
          {job.company}
        </div>

        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {job.points.map((p, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                gap: 12,
                marginBottom: 10,
                fontSize: '0.9rem',
                color: '#6B7280',
                lineHeight: 1.7
              }}
            >
              <span style={{
                color: '#E11D48',
                marginTop: 8,
                flexShrink: 0,
                width: 6,
                height: 6,
                background: '#E11D48',
                borderRadius: '50%',
                display: 'inline-block'
              }} />

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
        'Developed reusable React.js components and responsive pages for the Twiching platform, integrating REST APIs to display dynamic data.',

        'Integrated a chatbot into the Twiching website to support user queries and improve visitor engagement.',

        'Implemented on-page SEO for the Twiching website, including optimized meta titles and descriptions, semantic HTML with proper heading structure, image alt text, clean URLs, and page speed improvements.',

        'Developed and maintained internal business applications using Python, Django, and SQL, with CRUD operations, database integration, API handling, and debugging.'
      ]
    },

    {
      role: 'Web Developer Intern',
      company: 'Anush IT Solution, Mumbai',
      duration: 'Jun 2025\nNov 2025',
      type: 'Internship',

      points: [
        'Built RESTful APIs using Node.js and Express.js, implementing server-side business logic, CRUD operations, authentication workflows, and validation.',

        'Designed and integrated PostgreSQL database schemas for efficient data storage and retrieval.',

        'Developed and customized responsive WordPress websites, including themes, pages, plugins, and forms, using HTML5, CSS3, JavaScript, and PHP.',

        'Collaborated with the team on debugging, performance optimization, and code quality while following Git best practices.'
      ]
    }
  ]

  return (
    <section id="experience" style={{ background: '#FFFFFF' }}>
      <div className="container">

        <div className="section-header centered">
          <p className="section-label">Career Path</p>

          <h2 className="section-title">
            Work Experience
          </h2>

          <p className="section-subtitle">
            My professional journey building and shipping real-world applications.
          </p>
        </div>

        <div style={{
          maxWidth: 900,
          margin: '0 auto'
        }}>
          {jobs.map((job, i) => (
            <ExperienceCard
              key={i}
              job={job}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

