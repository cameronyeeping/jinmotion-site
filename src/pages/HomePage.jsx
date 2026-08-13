import React from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';
import { homePage } from '../data/siteContent';

const HomePage = ({ onContactClick }) => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-wrapper" style={{ minHeight: '90vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
                <div className="hero-bg-media" style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                    <img
                        src={homePage.hero.bgImage}
                        alt={homePage.hero.bgAlt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>
                <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(35, 24, 21, 0.8), rgba(35, 24, 21, 0.4))', zIndex: -1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <div className="hero-content" style={{ maxWidth: '700px' }}>
                        <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-light-primary)', margin: '0 0 24px 0', lineHeight: 1.1 }}>{homePage.hero.title}</h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-light-secondary)', margin: '0 0 40px 0', lineHeight: 1.6, maxWidth: '600px' }}>
                            {homePage.hero.subtitle}
                        </p>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <Link to="/projects" className="btn-primary" style={{ backgroundColor: 'var(--accent-green)', color: 'var(--text-light-primary)', padding: '16px 32px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', fontWeight: 600, transition: 'background var(--transition-fast)' }}>{homePage.hero.btnPrimary}</Link>
                            <Link to="/about" className="btn-secondary" style={{ backgroundColor: 'transparent', color: 'var(--text-light-primary)', padding: '16px 32px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', fontWeight: 600, border: '1px solid var(--border-dark)', transition: 'background var(--transition-fast)' }}>{homePage.hero.btnSecondary}</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-light" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <span style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>{homePage.approach.eyebrow}</span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-dark-primary)', margin: '0 0 24px 0', lineHeight: 1.2 }}>{homePage.approach.heading}</h2>
                            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '24px' }}>
                                {homePage.approach.paragraphs[0]}
                            </p>
                            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.125rem', lineHeight: 1.7, margin: 0 }}>
                                {homePage.approach.paragraphs[1]}
                            </p>
                        </div>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <img
                                src={homePage.approach.image}
                                alt={homePage.approach.imageAlt}
                                style={{ width: '100%', borderRadius: 'var(--radius-md)', display: 'block', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section style={{ backgroundColor: 'var(--accent-green)', padding: '80px 0' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-light-primary)', margin: '0 0 16px 0' }}>{homePage.values.heading}</h2>
                        <p style={{ color: '#FFFFFF', opacity: 0.85, fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                            {homePage.values.subtitle}
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', padding: '32px', flex: 1, minWidth: '280px' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-dark-primary)', margin: '0 0 16px 0' }}>{homePage.values.cards[0].title}</h3>
                            <p style={{ color: 'var(--text-dark-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                                {homePage.values.cards[0].paragraphs[0]}
                            </p>
                            <p style={{ color: 'var(--text-dark-secondary)', lineHeight: 1.6, margin: 0 }}>
                                {homePage.values.cards[0].paragraphs[1]}
                            </p>
                        </div>
                        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', padding: '32px', flex: 1, minWidth: '280px' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-dark-primary)', margin: '0 0 16px 0' }}>{homePage.values.cards[1].title}</h3>
                            <p style={{ color: 'var(--text-dark-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                                {homePage.values.cards[1].paragraphs[0]}
                            </p>
                            <p style={{ color: 'var(--text-dark-secondary)', lineHeight: 1.6, margin: 0 }}>
                                {homePage.values.cards[1].paragraphs[1]}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Gallery Section */}
            <section className="section-light" style={{ backgroundColor: 'var(--bg-light-secondary)', padding: '80px 0' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <span style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>{homePage.portfolio.eyebrow}</span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-dark-primary)', margin: '0 0 40px 0' }}>{homePage.portfolio.heading}</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
                        {homePage.portfolio.projects.map((project) => (
                            <Link
                                key={project.id}
                                to={`/projects/${project.id}`}
                                style={{
                                    display: 'block',
                                    borderRadius: 'var(--radius-sm)',
                                    overflow: 'hidden',
                                    textDecoration: 'none',
                                    backgroundColor: 'var(--bg-light-card)',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                                }}
                                className="project-thumbnail"
                            >
                                <div style={{ overflow: 'hidden' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            display: 'block',
                                            aspectRatio: '4/3',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '16px' }}>
                                    <span style={{ fontWeight: 600, color: 'var(--text-dark-primary)', display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>{project.title}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaBanner onContactClick={onContactClick} />
        </div>
    );
};

export default HomePage;
