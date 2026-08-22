function ProjectCard({ project }) {
  return (
    <div style={{
      background: '#FFFFFF', borderRadius: 20,
      overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      border: '1px solid #F3F4F6',
      transition: 'all 0.4s ease',
      display: 'flex', flexDirection: 'column'
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(225,29,72,0.18)'
        e.currentTarget.style.borderColor = '#FECDD3'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
        e.currentTarget.style.borderColor = '#F3F4F6'
      }}
    >
      <div style={{
        height: 200, position: 'relative', overflow: 'hidden',
        background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <span style={{
          fontSize: '3.5rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))'
        }}>{project.icon}</span>
        <div style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(255,255,255,0.95)', borderRadius: 50,
          padding: '5px 14px', fontSize: '0.74rem', fontWeight: 700,
          color: '#BE123C', letterSpacing: '0.05em', textTransform: 'uppercase'
        }}>{project.category}</div>
      </div>

      <div style={{ padding: 28, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.3rem', fontWeight: 700,
          color: '#0F172A', marginBottom: 10
        }}>{project.title}</h3>
        <p style={{
          fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.7,
          marginBottom: 20, flexGrow: 1
        }}>{project.desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          {project.tech.map(t => (
            <span key={t} style={{
              background: '#FFF1F2', color: '#BE123C',
              fontSize: '0.74rem', fontWeight: 600,
              padding: '4px 10px', borderRadius: 6
            }}>{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 16, paddingTop: 16, borderTop: '1px solid #F3F4F6' }}>
          {project.links.map(link => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: '0.85rem', fontWeight: 600, color: '#E11D48',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => { e.target.style.color = '#BE123C' }}
              onMouseLeave={e => { e.target.style.color = '#E11D48' }}
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const projects = [
    {
      title: 'ShopNow',
      category: 'Web App',
      icon: '🛒',
      gradient: ['#FFE4E6', '#FB7185'],
      desc: 'A full-stack e-commerce platform with product browsing, cart, wishlist, Razorpay payment integration, and complete order management.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/ShopNow', icon: '⌨️' },
        { label: 'Live', url: 'https://shop-now-psi.vercel.app/', icon: '🌐' }
      ]
    },
    {
      title: 'IssueDashboard',
      category: 'Web App',
      icon: '📊',
      gradient: ['#DBEAFE', '#3B82F6'],
      desc: 'A web-based issue tracking and management application for reporting, monitoring, assigning, and resolving support tickets efficiently.',
      tech: ['Python', 'Django'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/UCAAS-Issue-Dashboard', icon: '⌨️' },
        { label: 'Live', url: 'https://supportdesk-crm.vercel.app/', icon: '🌐' }
      ]
    },
    {
      title: 'SwiftMove',
      category: 'Web App',
      icon: '🚚',
      gradient: ['#FFE4E6', '#FECDD3'],
      desc: 'A relocation services platform for booking movers, with service listings, booking flow, and an admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/swiftMove', icon: '⌨️' },
        { label: 'Live', url: 'https://swift-move-jz4a.vercel.app/', icon: '🌐' }
      ]
    },
    {
      title: 'Real State',
      category: 'Web App',
      icon: '🏠',
      gradient: ['#FECDD3', '#FDA4AF'],
      desc: 'A property listing portal where users browse, filter, and inquire about residential and commercial properties.',
      tech: ['React', 'Node.js', 'MongoDB'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/realState', icon: '⌨️' },
        { label: 'Live', url: 'https://real-state-wq17.vercel.app/', icon: '🌐' }
      ]
    },
    {
      title: 'Gym Website',
      category: 'Web App',
      icon: '🏋️',
      gradient: ['#FDA4AF', '#FB7185'],
      desc: 'A fitness and gym landing site featuring class schedules, trainer profiles, and a membership inquiry form.',
      tech: ['React', 'Node.js', 'MongoDB'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/gym-webiste', icon: '⌨️' },
        { label: 'Live', url: 'https://gym-webiste-ten.vercel.app/', icon: '🌐' }
      ]
    },
    {
      title: 'Restaurant',
      category: 'Web App',
      icon: '🍽️',
      gradient: ['#FB7185', '#F43F5E'],
      desc: 'A restaurant website with menu display, table reservation, and an admin panel for menu management.',
      tech: ['React', 'Node.js', 'MongoDB'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/resturant', icon: '⌨️' },
        { label: 'Live', url: 'https://resturant-delta-eight.vercel.app/', icon: '🌐' }
      ]
    },
    {
      title: 'Movers & Packers',
      category: 'Web App',
      icon: '📦',
      gradient: ['#F43F5E', '#E11D48'],
      desc: 'A booking platform for movers and packers services with service categories and quote requests.',
      tech: ['React', 'Node.js', 'MongoDB'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/MoversPackers', icon: '⌨️' },
        { label: 'Live', url: 'https://movers-packers-nu.vercel.app/', icon: '🌐' }
      ]
    },
    {
      title: 'Translator App',
      category: 'Web App',
      icon: '🌐',
      gradient: ['#E11D48', '#BE123C'],
      desc: 'A language translation web application supporting multi-language text conversion in real time.',
      tech: ['React', 'JavaScript'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/Translator-App', icon: '⌨️' }
      ]
    },
    {
      title: 'Job Portal',
      category: 'Web App',
      icon: '💼',
      gradient: ['#BE123C', '#9F1239'],
      desc: 'A job search and posting platform with applicant tracking, role filtering, and employer dashboards.',
      tech: ['React', 'Node.js', 'MongoDB'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/Job_Portal', icon: '⌨️' }
      ]
    },
    {
      title: 'Influencer Booking',
      category: 'Web App',
      icon: '⭐',
      gradient: ['#FB7185', '#E11D48'],
      desc: 'A platform that connects brands with influencers for booking campaigns and managing collaborations.',
      tech: ['React', 'Node.js', 'MongoDB'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/influencer-booking', icon: '⌨️' }
      ]
    },
    {
      title: 'Bookly',
      category: 'Web App',
      icon: '📚',
      gradient: ['#FECDD3', '#FB7185'],
      desc: 'A book discovery and management application to browse, search, and organize a personal reading list.',
      tech: ['React', 'JavaScript'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/Bookly', icon: '⌨️' }
      ]
    },
    {
      title: 'Restuarnt',
      category: 'Web App',
      icon: '🥘',
      gradient: ['#FDA4AF', '#F43F5E'],
      desc: 'A second restaurant management web app featuring online ordering and an admin control panel.',
      tech: ['React', 'Node.js'],
      links: [
        { label: 'GitHub', url: 'https://github.com/student-priyanshi/Restuarnt', icon: '⌨️' }
      ]
    },
  ]

  return (
    <section id="projects" style={{ background: '#F9FAFB' }}>
      <div className="container">
        <div className="section-header centered">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of full-stack web applications I've designed, built, and deployed.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 28
        }}>
          {projects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  )
}