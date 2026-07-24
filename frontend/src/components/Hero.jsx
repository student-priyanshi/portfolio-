import photo from '../assets/image.png';
import resume from '../assets/Resume.pdf';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFF1F2 0%, #FFFFFF 50%, #FFF1F2 100%)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 64,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '45%',
          height: '100%',
          background: 'radial-gradient(ellipse at top right, #FECDD3 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '30%',
          height: '50%',
          background: 'radial-gradient(ellipse at bottom left, #FFE4E6 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Left Side */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#FFE4E6',
                borderRadius: 50,
                padding: '8px 18px',
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#E11D48',
                  boxShadow: '0 0 0 3px rgba(225,29,72,0.2)',
                  display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }}
              />

              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#BE123C',
                }}
              >
                Available for opportunities
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#0F172A',
                marginBottom: 16,
              }}
            >
              Hi, I'm{' '}
              <span
                style={{
                  color: '#E11D48',
                  background: 'linear-gradient(135deg, #E11D48, #FB7185)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Priyanshi
              </span>
              <br />
              Yadav
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                fontWeight: 500,
                color: '#334155',
                marginBottom: 16,
                letterSpacing: '0.02em',
              }}
            >
              Full-Stack Developer &amp; MERN Specialist
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: '#6B7280',
                lineHeight: 1.8,
                marginBottom: 40,
                maxWidth: 480,
              }}
            >
              Highly motivated B.Sc. IT graduate skilled in MERN stack, Django,
              REST APIs, and database integration. Passionate about building
              scalable, user-friendly web applications.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 16,
                flexWrap: 'wrap',
                marginBottom: 48,
              }}
            >
              <a href="mailto:ypriyanshi399@gmail.com" className="btn-primary">
                Get In Touch
              </a>

              <a
                href={resume}
                download="Priyanshi_Yadav_Resume.pdf"
                className="btn-outline"
              >
                Download Resume
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 32,
                flexWrap: 'wrap',
              }}
            >
              {[
                { num: '10+', label: 'Projects Built' },
                { num: '8.41', label: 'CGPA' },
                { num: '1+', label: 'Year Experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#E11D48',
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </div>

                  <div
                    style={{
                      fontSize: '0.82rem',
                      color: '#9CA3AF',
                      marginTop: 4,
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: -16,
                  background:
                    'linear-gradient(135deg, #FECDD3, #FB7185, #E11D48)',
                  borderRadius: '50%',
                  opacity: 0.15,
                  filter: 'blur(24px)',
                }}
              />

              <div
                className="hero-photo-wrap"
                style={{
                  width: 360,
                  height: 360,
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #FFE4E6 0%, #FECDD3 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 24px 80px rgba(225,29,72,0.18)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={photo}
                  alt="Priyanshi Yadav"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: 20,
                  right: -20,
                  background: '#FFFFFF',
                  borderRadius: 16,
                  padding: '12px 20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>💼</span>

                <div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: '#9CA3AF',
                      fontWeight: 500,
                    }}
                  >
                    Experience Role
                  </div>

                  <div
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#0F172A',
                    }}
                  >
                    Software Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%,100%{
            opacity:1;
          }
          50%{
            opacity:0.4;
          }
        }

        @media (max-width:768px){
          .hero-grid{
            grid-template-columns:1fr !important;
            gap:40px !important;
          }

          .hero-photo-wrap{
            width:280px !important;
            height:280px !important;
          }
        }
      `}</style>
    </section>
  );
}