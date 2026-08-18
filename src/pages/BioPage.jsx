import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Top Navigation Bar / Breadcrumb */}
      <section style={{ backgroundColor: 'var(--bg-light-secondary, #EDE8E3)', borderBottom: '1px solid var(--border-light)', padding: '20px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            to="/about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-dark-primary)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'color var(--transition-fast)'
            }}
          >
            <ArrowLeft size={18} color="var(--accent-green, #2D5A3D)" /> Back to About
          </Link>
          <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dark-secondary)', fontWeight: 600 }}>
            Team Profile
          </span>
        </div>
      </section>

      {/* Main Profile Section */}
      <section style={{ padding: '60px 0 100px 0' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '56px',
            alignItems: 'start'
          }}>
            {/* Left Column: Circular Headshot */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 16px 36px rgba(35, 24, 21, 0.12)',
                border: '4px solid #FFFFFF',
                backgroundColor: '#EDE8E3',
                width: '300px',
                height: '300px',
                aspectRatio: '1/1',
                position: 'relative'
              }}>
                <img
                  src={getImageUrl(member.image)}
                  alt={member.alt || member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Right Column: Name, Role, & Biography */}
            <div>
              <span style={{
                color: 'var(--accent-green, #2D5A3D)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px'
              }}>
                Leadership & Team
              </span>

              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                color: 'var(--text-dark-primary)',
                margin: '0 0 12px 0',
                lineHeight: 1.1,
                fontWeight: 700
              }}>
                {member.name}
              </h1>

              <div style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--accent-green-dark, #1E3D29)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '32px'
              }}>
                {member.title}
              </div>

              <div style={{
                height: '2px',
                width: '64px',
                backgroundColor: 'var(--accent-green, #2D5A3D)',
                marginBottom: '32px'
              }} />

              {/* Bio Paragraphs */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                color: 'var(--text-dark-secondary)',
                fontSize: '1.125rem',
                lineHeight: 1.8
              }}>
                {Array.isArray(member.bio) ? (
                  member.bio.map((paragraph, idx) => (
                    <p key={idx} style={{ margin: 0 }}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p style={{ margin: 0 }}>
                    {member.bio}
                  </p>
                )}
              </div>

              {/* Return to About link */}
              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-light)' }}>
                <Link
                  to="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--accent-green, #2D5A3D)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '1rem'
                  }}
                >
                  <ArrowLeft size={16} /> View all team members
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onContactClick={onContactClick} />
    </div>
  );
}
