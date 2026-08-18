import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import { projectDatabase, getProjectData } from '../data/siteContent';


export default function ProjectDetailPage({ onContactClick }) {
  const { id } = useParams();
  const project = getProjectData(id);

  const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) {
      return url;
    }
    return `/${url}`;
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh' }}>
      {/* Project Hero Section */}
      <div style={{ position: 'relative', width: '100%', height: '55vh', minHeight: '380px', overflow: 'hidden', backgroundColor: '#231815' }}>
        <img
          src={getImageUrl(project.image)}
          alt={project.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(35, 24, 21, 0.3) 0%, rgba(35, 24, 21, 0.6) 100%)' }}></div>

        {/* Glassmorphism Title Overlay Badge */}
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
            justifyContent: 'space-between',
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
              {project.title}
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
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              {project.galleryImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-light-secondary, #EDE8E3)',
                    aspectRatio: '16/10',
                    position: 'relative'
                  }}
                >
                  <img
                    src={getImageUrl(imgUrl)}
                    alt={`${project.title} detail ${idx + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Dark CTA Banner */}
      <CtaBanner onContactClick={onContactClick} />
    </div>
  );
}
