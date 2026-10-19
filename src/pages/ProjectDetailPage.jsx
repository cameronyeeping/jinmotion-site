import { getAssetUrl } from '../utils/assets';
import { useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import MethodologyGraphic from '../components/MethodologyGraphic';
import NotFoundPage from './NotFoundPage';
import { getProjectData, getProjectCategory } from '../data/siteContent';


export default function ProjectDetailPage({ onContactClick }) {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const activeCategory = getProjectCategory(searchParams.get('category'))?.id;
  const projectsUrl = activeCategory ? `/projects?category=${activeCategory}` : '/projects';
  const project = getProjectData(id);

  useEffect(() => { document.title = project?.title ? `${project.title} | JIM Co.` : 'Project not found | JIM Co.'; }, [project]);

  if (!project) return <NotFoundPage title="Project not found" to={projectsUrl} label="Back to Projects" />;

  const features = Array.isArray(project.features) ? project.features : [];
  const scopeElements = Array.isArray(project.scopeElements) ? project.scopeElements : [];

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh' }}>
      {/* Project Hero Section */}
      <div style={{ position: 'relative', width: '100%', height: '55vh', minHeight: '380px', overflow: 'hidden', backgroundColor: '#231815' }}>
        <img
          src={getAssetUrl(project.image)}
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
            to={projectsUrl}
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

      {/* Main Content Section */}
      <section className="section-light" style={{ padding: '60px 0 100px 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* Breadcrumb Navigation */}
          <div style={{ marginBottom: '32px' }}>
            <Link
              to={projectsUrl}
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

          {/* Two-column layout: content + at a glance sidebar */}
          <div className="project-detail-layout">

            {/* Main content column */}
            <div>
              {/* Project Header */}
              <div style={{ marginBottom: '40px' }}>
                <h1
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0',
                    color: 'var(--text-dark-primary)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {project.title}
                </h1>
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
              {Array.isArray(project.galleryImages) && project.galleryImages.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px', marginBottom: '40px' }}>
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
                        src={getAssetUrl(imgUrl)}
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

            {/* Project Summary sidebar */}
            <aside className="project-detail-sidebar" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>

              <MethodologyGraphic compact activeStages={project.methodologyStages} />

              {/* Category */}
              <div>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-dark-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px'
                }}>
                  Services
                </div>
                <ul className="project-detail-list" role="list">
                  {project.categories.map((categoryId) => {
                    const category = getProjectCategory(categoryId);
                    return category && <li key={categoryId}>{category.label}</li>;
                  })}
                </ul>
              </div>

              {/* Client */}
              <div>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-dark-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px'
                }}>
                  Client
                </div>
                <ul className="project-detail-list" role="list">
                  <li>{project.client}</li>
                  {(project.city || project.country) && <li>{[project.city, project.country].filter(Boolean).join(', ')}</li>}
                </ul>
              </div>

              {/* Year */}
              {project.year && (<div>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-dark-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px'
                }}>
                  Opening Year
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-dark-secondary)', lineHeight: 1.5 }}>
                  {project.year}
                </div>
              </div>)}

              {/* Project Features */}
              {features.length > 0 && (<div>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-dark-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px'
                }}>
                  Project Features
                </div>
                <ul className="project-detail-list" role="list">
                  {features.map((feature, index) => <li key={index}>{feature}</li>)}
                </ul>
              </div>)}

              {/* Key Scope Elements */}
              {scopeElements.length > 0 && (<div>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-dark-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px'
                }}>
                  Highlights
                </div>
                <ul className="project-detail-list" role="list">
                  {scopeElements.map((highlight, index) => <li key={index}>{highlight}</li>)}
                </ul>
              </div>)}

            </aside>

          </div>
        </div>
      </section>

      {/* Dark CTA Banner */}
      <CtaBanner onContactClick={onContactClick} />
    </div>
  );
}
