import React from 'react';
import CtaBanner from '../components/CtaBanner';
import { aboutPage } from '../data/siteContent';

const AboutPage = ({ onContactClick }) => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="hero-wrapper" style={{ minHeight: '60vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
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
                        <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-light-primary)', margin: '0 0 16px 0', lineHeight: 1.1, fontStyle: 'italic' }}>{aboutPage.hero.title}</h1>
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
                            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.125rem', lineHeight: 1.7, margin: 0 }}>
                                {aboutPage.content.paragraphs[0]}
                            </p>
                            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.125rem', lineHeight: 1.7, margin: 0 }}>
                                {aboutPage.content.paragraphs[1]}
                            </p>
                            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.125rem', lineHeight: 1.7, margin: 0 }}>
                                {aboutPage.content.paragraphs[2]}
                            </p>
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

            {/* Team Section */}
            <section style={{ backgroundColor: 'var(--accent-green)', padding: '80px 0' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#FFFFFF', margin: '0 0 16px 0' }}>{aboutPage.team.heading}</h2>
                        <p style={{ color: '#FFFFFF', opacity: 0.85, fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                            {aboutPage.team.subtitle}
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                        {aboutPage.team.members.map((member, idx) => (
                            <div key={idx} style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', padding: '32px', flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <img
                                    src={member.image}
                                    alt={member.alt}
                                    style={{ borderRadius: 'var(--radius-sm)', width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                                />
                                <div>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-dark-primary)', margin: '0 0 4px 0' }}>{member.name}</h3>
                                    <div style={{ fontWeight: 600, color: 'var(--accent-green-dark)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem' }}>{member.title}</div>
                                </div>
                                <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaBanner onContactClick={onContactClick} />
        </div>
    );
};

export default AboutPage;
