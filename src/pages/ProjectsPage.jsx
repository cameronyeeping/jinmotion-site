import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';
import { projectsPage } from '../data/siteContent';

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={`/projects/${project.id}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: 'var(--bg-light-card, #FFFFFF)',
                borderRadius: 'var(--radius-md, 14px)',
                overflow: 'hidden',
                border: '1px solid var(--border-light, rgba(35,24,21,0.1))',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 12px 24px rgba(0,0,0,0.1)' : 'none'
            }}
        >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                    src={project.image}
                    alt={project.title}
                    style={{
                        width: '100%',
                        aspectRatio: '4/3',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                />
            </div>
            <div style={{ padding: '24px' }}>
                <span
                    style={{
                        display: 'inline-block',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--accent-green, #10B981)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '8px'
                    }}
                >
                    {project.category}
                </span>
                <h3
                    style={{
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: 'var(--text-dark-primary, #1F1513)',
                        marginBottom: '8px',
                        fontFamily: 'var(--font-heading)'
                    }}
                >
                    {project.title}
                </h3>
                <p
                    style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-dark-secondary, #5C4E47)',
                        lineHeight: 1.5,
                        margin: 0
                    }}
                >
                    {project.short_description || project.description}
                </p>
            </div>
        </Link>
    );
};

export default function ProjectsPage({ onContactClick }) {
    return (
        <div>
            <section className="hero-wrapper" style={{ minHeight: '50vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
                <div className="hero-bg-media" style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                    <img
                        src={projectsPage.hero.bgImage}
                        alt={projectsPage.hero.bgAlt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>
                <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(35, 24, 21, 0.8), rgba(35, 24, 21, 0.5))', zIndex: -1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <div className="hero-content" style={{ maxWidth: '700px' }}>
                        <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-light-primary)', margin: '0 0 16px 0', lineHeight: 1.1 }}>
                            {projectsPage.hero.title}
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-light-secondary)', margin: '0', lineHeight: 1.6 }}>
                            {projectsPage.hero.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-light" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-light, #F8F5F0)' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '32px'
                        }}
                    >
                        {projectsPage.projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner onContactClick={onContactClick} />
        </div>
    );
}
