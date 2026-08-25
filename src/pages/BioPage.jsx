import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import { getTeamMember } from '../data/siteContent';

export default function BioPage({ onContactClick }) {
  const { id } = useParams();
  const member = getTeamMember(id);

  const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) {
      return url;
    }
    return `/${url}`;
  };

  const portraitSrc = getImageUrl(member.portrait || member.image);
  const hasProfile = Array.isArray(member.profile) && member.profile.length > 0;
  const hasExpertise = Array.isArray(member.expertise) && member.expertise.length > 0;
  const hasExperience = Array.isArray(member.experience) && member.experience.length > 0;
  const hasCredentials = Array.isArray(member.credentials) && member.credentials.length > 0;
  const hasCredibility = Array.isArray(member.credibility) && member.credibility.length > 0;

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh' }}>

      {/* ───────────────────────────────────────────────
          1. SPLIT HERO — copy left, portrait right
      ──────────────────────────────────────────────── */}
      <section className="profile-hero">
        <div className="profile-hero-inner">
          {/* Text column */}
          <div className="profile-hero-text">
            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--accent-green)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.875rem',
                marginBottom: '16px'
              }}
            >
              <ArrowLeft size={16} /> Back to About
            </Link>

            <span style={{
              color: 'var(--accent-green)',
              fontWeight: 700,
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px'
            }}>
              Leadership
            </span>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: 'var(--text-dark-primary)',
              margin: '0 0 6px 0',
              lineHeight: 1.1,
              fontWeight: 700
            }}>
              {member.name}
            </h1>

            <div style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--accent-green-dark)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '16px'
            }}>
              {member.title}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {member.profile.map((para, idx) => (
                <p key={idx} style={{
                  margin: 0,
                  color: 'var(--text-dark-secondary)',
                  fontSize: '1.125rem',
                  lineHeight: 1.7
                }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Portrait column */}
          <div className="profile-hero-portrait">
            <div style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 20px 48px rgba(35, 24, 21, 0.14)',
              aspectRatio: '4/5',
              maxWidth: '320px',
              backgroundColor: '#EDE8E3'
            }}>
              <img
                src={portraitSrc}
                alt={member.alt || member.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          4. AREAS OF EXPERTISE — flat 2-column bullet list
      ──────────────────────────────────────────────── */}
      {hasExpertise && (
        <section style={{ padding: '24px 0', backgroundColor: 'var(--bg-light)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--text-dark-primary)',
              margin: '0 0 8px 0',
              fontWeight: 700
            }}>
              Areas of Expertise
            </h2>
            <div style={{ height: '3px', width: '100%', backgroundColor: 'var(--accent-green)', marginBottom: '20px' }} />

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px 40px'
            }}>
              {member.expertise.map((item, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--text-dark-primary)',
                  fontSize: '1.05rem',
                  lineHeight: 1.5
                }}>
                  <span style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-green)',
                    flexShrink: 0
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────
          5. SELECTED LEADERSHIP EXPERIENCE — flat project list
      ──────────────────────────────────────────────── */}
      {hasExperience && (
        <section style={{ padding: '24px 0', backgroundColor: 'var(--bg-light)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--text-dark-primary)',
              margin: '0 0 8px 0',
              fontWeight: 700
            }}>
              Selected Leadership Experience
            </h2>
            <div style={{ height: '3px', width: '100%', backgroundColor: 'var(--accent-green)', marginBottom: '20px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {member.experience.map((entry, idx) => (
                <div key={idx}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    color: 'var(--text-dark-primary)',
                    margin: '0 0 4px 0',
                    fontWeight: 700
                  }}>
                    {entry.project}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: 'var(--text-dark-secondary)',
                    fontSize: '1.05rem',
                    lineHeight: 1.7
                  }}>
                    {entry.role} — {entry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────
          7. CONFERENCE HIGHLIGHTS
      ──────────────────────────────────────────────── */}
      {Array.isArray(member.conferences) && member.conferences.length > 0 && (
        <section style={{ padding: '24px 0', backgroundColor: 'var(--bg-light)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--text-dark-primary)',
              margin: '0 0 8px 0',
              fontWeight: 700
            }}>
              Conference Highlights
            </h2>
            <div style={{ height: '3px', width: '100%', backgroundColor: 'var(--accent-green)', marginBottom: '20px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {member.conferences.map((conf, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      color: 'var(--text-dark-primary)',
                      margin: 0,
                      fontWeight: 700
                    }}>
                      {conf.event}
                    </h3>
                    <span style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-dark-secondary)',
                      fontWeight: 600,
                      flexShrink: 0
                    }}>
                      {conf.date}
                    </span>
                  </div>
                  <p style={{
                    margin: '4px 0 0 0',
                    color: 'var(--text-dark-secondary)',
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    fontStyle: 'italic'
                  }}>
                    {conf.topic}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* ───────────────────────────────────────────────
          6. CREDENTIALS — single inline line
      ──────────────────────────────────────────────── */}
      {hasCredentials && (
        <section style={{ padding: '24px 0 36px', backgroundColor: 'var(--bg-light)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--text-dark-primary)',
              margin: '0 0 8px 0',
              fontWeight: 700
            }}>
              Credentials
            </h2>
            <div style={{ height: '3px', width: '100%', backgroundColor: 'var(--accent-green)', marginBottom: '16px' }} />

            <p style={{
              margin: 0,
              color: 'var(--text-dark-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7
            }}>
              {member.credentials.join(' • ')}
            </p>
          </div>
        </section>
      )}


      {/* ───────────────────────────────────────────────
          8. DOWNLOADABLE ONE-PAGE PROFILE CTA
      ──────────────────────────────────────────────── */}
      {member.profilePdf && (
        <section style={{
          padding: '36px 0',
          backgroundColor: 'var(--bg-light)',
          borderTop: '1px solid var(--border-light)'
        }}>
          <div className="container" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center'
          }}>
            <Download size={28} color="var(--accent-green)" style={{ marginBottom: '12px' }} />
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--text-dark-primary)',
              margin: '0 0 6px 0'
            }}>
              Download resume
            </h3>
            <p style={{
              color: 'var(--text-dark-secondary)',
              fontSize: '1.05rem',
              margin: '0 0 20px 0',
              lineHeight: 1.6
            }}>
              Download {member.name.split(' ')[0]}'s background, expertise, and selected project experience.
            </p>
            <a
              href={getImageUrl(member.profilePdf)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--accent-green)',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'background var(--transition-fast)'
              }}
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────
          8. CONTACT CTA
      ──────────────────────────────────────────────── */}
      <CtaBanner onContactClick={onContactClick} />
    </div>
  );
}
