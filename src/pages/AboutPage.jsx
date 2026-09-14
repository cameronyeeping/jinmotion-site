import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import { aboutPage } from '../data/siteContent';

const AboutPage = ({ onContactClick }) => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="hero-wrapper" style={{ minHeight: '50vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
                <div className="hero-bg-media" style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                    <img
                        src={aboutPage.hero.bgImage}
                        alt={aboutPage.hero.bgAlt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>
                <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(35, 24, 21, 0.8), rgba(35, 24, 21, 0.5))', zIndex: -1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <div className="hero-content" style={{ maxWidth: '700px' }}>
                        <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-light-primary)', margin: '0 0 16px 0', lineHeight: 1.1 }}>{aboutPage.hero.title}</h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-light-secondary)', margin: '0', lineHeight: 1.6 }}>
                            {aboutPage.hero.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* About Content Section */}
            <section className="section-light" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-dark-primary)', margin: '0 0 32px 0', lineHeight: 1.3 }}>
                            {aboutPage.content.heading}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {aboutPage.content.paragraphs.map((paragraph, index) => (
                                <p 
                                    key={index} 
                                    style={{ 
                                        color: 'var(--text-dark-secondary)', 
                                        fontSize: '1.125rem', 
                                        lineHeight: 1.7, 
                                        margin: 0 
                                    }}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '600px', marginTop: '48px' }}>
                        {aboutPage.stats.map((stat, idx) => (
                            <div key={idx}>
                                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-green)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>{stat.value}</div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '8px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guiding Principles Section */}
            {aboutPage.guidingPrinciples && (
                <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
                    <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '48px' }}>
                            <span style={{
                                color: 'var(--accent-green)',
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '12px'
                            }}>
                                How We Work
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '2.5rem',
                                color: 'var(--text-dark-primary)',
                                margin: '0',
                                lineHeight: 1.3
                            }}>
                                {aboutPage.guidingPrinciples.heading}
                            </h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '28px',
                            marginBottom: '48px'
                        }}>
                            {aboutPage.guidingPrinciples.principles.map((principle, idx) => (
                                <div key={idx} style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 'var(--radius-lg, 16px)',
                                    padding: '40px 36px',
                                    border: '1px solid var(--border-light)',
                                    boxShadow: '0 2px 8px rgba(35, 24, 21, 0.03)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '1.35rem',
                                        color: 'var(--accent-green)',
                                        margin: '0 0 12px 0',
                                        fontWeight: 700
                                    }}>
                                        {principle.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--text-dark-secondary)',
                                        fontSize: '1rem',
                                        lineHeight: 1.7,
                                        margin: 0
                                    }}>
                                        {principle.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Closing Statement */}
                        <div style={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            textAlign: 'center',
                            padding: '32px 36px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 'var(--radius-lg, 16px)',
                            border: '1px solid var(--border-light)',
                            boxShadow: '0 2px 8px rgba(35, 24, 21, 0.03)'
                        }}>
                            <p style={{
                                color: 'var(--text-dark-primary)',
                                fontSize: '1.1rem',
                                lineHeight: 1.7,
                                fontWeight: 500,
                                margin: 0
                            }}>
                                {aboutPage.guidingPrinciples.closing}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Meet the Team Section */}
            <section style={{ backgroundColor: 'var(--accent-green)', padding: '80px 0' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#FFFFFF', margin: '0 0 16px 0' }}>
                            {aboutPage.team.heading}
                        </h2>
                        <p style={{ color: '#FFFFFF', opacity: 0.85, fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 36px auto', lineHeight: 1.6 }}>
                            {aboutPage.team.subtitle}
                        </p>
                        <Link
                            to="/team"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: '#FFFFFF',
                                color: 'var(--accent-green)',
                                padding: '14px 32px',
                                borderRadius: '8px',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 700,
                                fontSize: '1rem',
                                textDecoration: 'none',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Meet Our Team <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaBanner onContactClick={onContactClick} />
        </div>
    );
};

export default AboutPage;
