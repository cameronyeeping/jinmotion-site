import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import { projectDatabase, getProjectData } from '../data/siteContent';

// Sunburst Hero Artwork Graphic matching Figma Screen 4 aesthetic
const SunburstHeroGraphic = ({ title, colors }) => {
  const [c1, c2, c3, c4, c5] = colors || ['#F9D2BA', '#EEA2A5', '#7E3A65', '#13629B', '#10B981'];

  return (
    <div style={{ position: 'relative', width: '100%', height: '55vh', minHeight: '380px', overflow: 'hidden', backgroundColor: '#231815' }}>
      <svg
        viewBox="0 0 1400 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <defs>
          <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c1} />
            <stop offset="40%" stopColor={c2} />
            <stop offset="75%" stopColor={c3} />
            <stop offset="100%" stopColor="#231815" />
          </linearGradient>
          <radialGradient id="glowCenter" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#231815" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base Background Gradient */}
        <rect width="1400" height="600" fill="url(#heroBg)" />

        {/* Sunburst Ray Geometry (Figma Screen 4 Ray Burst Aesthetic) */}
        <g stroke="none">
          <polygon points="700,650 -100,-100 50,-100" fill={c1} opacity="0.65" />
          <polygon points="700,650 150,-100 300,-100" fill={c2} opacity="0.85" />
          <polygon points="700,650 400,-100 550,-100" fill={c3} opacity="0.75" />
          <polygon points="700,650 650,-100 800,-100" fill="var(--accent-green)" opacity="0.8" />
          <polygon points="700,650 900,-100 1050,-100" fill={c4} opacity="0.7" />
          <polygon points="700,650 1150,-100 1300,-100" fill={c5} opacity="0.85" />
          <polygon points="700,650 1400,-100 1550,-100" fill={c1} opacity="0.6" />
          
          <polygon points="700,650 -100,100 -100,250" fill={c3} opacity="0.4" />
          <polygon points="700,650 1500,100 1500,250" fill={c2} opacity="0.4" />
        </g>

        {/* Central Glow Overlay */}
        <rect width="1400" height="600" fill="url(#glowCenter)" />

        {/* Subtle Arch Grid Lines */}
        <ellipse cx="700" cy="650" rx="300" ry="200" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <ellipse cx="700" cy="650" rx="550" ry="380" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="6 6" />
        <ellipse cx="700" cy="650" rx="800" ry="550" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      </svg>

      {/* Glassmorphism Title Overlay Badge inside Hero */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 48px)',
          maxWidth: '1200px',
          padding: '24px 32px',
          background: 'rgba(35, 24, 21, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div>
          <span style={{ color: 'var(--accent-green-light)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Featured Project
          </span>
          <h2 style={{ color: '#FFFFFF', fontFamily: 'var(--font-heading)', fontSize: '1.75rem', margin: 0, fontWeight: 700 }}>
            {title}
          </h2>
        </div>
        <Link
          to="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#FFFFFF',
            fontSize: '0.9rem',
            fontWeight: 600,
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: 'var(--radius-pill)',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.2s'
          }}
        >
          <ArrowLeft size={16} /> All Projects
        </Link>
      </div>
    </div>
  );
};

export default function ProjectDetailPage({ onContactClick }) {
  const { id } = useParams();
  const project = getProjectData(id);

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh' }}>
      {/* Figma Sunburst Hero Section */}
      <SunburstHeroGraphic title={project.title} colors={project.heroColors} />

      {/* Main Content Section on Light Cream Background (Figma Screen 4 layout) */}
      <section className="section-light" style={{ padding: '60px 0 100px 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* Breadcrumb Navigation */}
          <div style={{ marginBottom: '32px' }}>
            <Link
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-dark-muted)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
            >
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <div style={{ marginBottom: '40px' }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                marginBottom: '12px',
                color: 'var(--text-dark-primary)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              {project.title}
            </h1>

            {/* Subtitle / Category Badge */}
            <div
              style={{
                fontStyle: 'italic',
                color: 'var(--accent-green)',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '24px'
              }}
            >
              {project.category}
            </div>

            {/* Metadata Bar */}
            <div
              style={{
                display: 'flex',
                gap: '24px',
                padding: '16px 24px',
                backgroundColor: 'var(--bg-light-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                flexWrap: 'wrap',
                fontSize: '0.9rem'
              }}
            >
              <div>
                <span style={{ color: 'var(--text-dark-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Year</span>
                <strong style={{ color: 'var(--text-dark-primary)' }}>{project.year}</strong>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--border-light)' }}></div>
              <div>
                <span style={{ color: 'var(--text-dark-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Client</span>
                <strong style={{ color: 'var(--text-dark-primary)' }}>{project.client}</strong>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--border-light)' }}></div>
              <div>
                <span style={{ color: 'var(--text-dark-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Location</span>
                <strong style={{ color: 'var(--text-dark-primary)' }}>{project.location}</strong>
              </div>
            </div>
          </div>

          {/* Project Summary Lead */}
          <div
            style={{
              fontSize: '1.25rem',
              lineHeight: 1.6,
              fontWeight: 500,
              color: 'var(--text-dark-primary)',
              marginBottom: '36px',
              borderLeft: '4px solid var(--accent-green)',
              paddingLeft: '20px'
            }}
          >
            {project.short_description || project.description}
          </div>

          {/* Long Description Body */}
          <div className="project-content" style={{ marginBottom: '56px' }}>
            {Array.isArray(project.long_description || project.longDescription) ? (
              (project.long_description || project.longDescription).map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    color: 'var(--text-dark-secondary)',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    marginBottom: '24px'
                  }}
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p
                style={{
                  color: 'var(--text-dark-secondary)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  marginBottom: '24px'
                }}
              >
                {project.long_description || project.longDescription}
              </p>
            )}
          </div>

          {/* Gallery Images */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {project.galleryImages.map((imgUrl, idx) => (
              <div key={idx} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
                <img
                  src={imgUrl}
                  alt={`${project.title} detail ${idx + 1}`}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Dark CTA Banner */}
      <CtaBanner onContactClick={onContactClick} />
    </div>
  );
}
