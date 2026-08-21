import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import { aboutPage } from '../data/siteContent';

const TeamMemberCard = ({ member }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={`/team/${member.id}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '28px',
                flex: 1,
                minWidth: '280px',
                maxWidth: '400px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 16px 32px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
            }}
        >
            <div style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                width: '100%',
                aspectRatio: '4/3',
                backgroundColor: '#EDE8E3',
                position: 'relative'
            }}>
                <img
                    src={member.image}
                    alt={member.alt || member.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease',
                        transform: isHovered ? 'scale(1.03)' : 'scale(1)'
                    }}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        color: 'var(--text-dark-primary)',
                        margin: '0 0 6px 0',
                        fontWeight: 700
                    }}>
                        {member.name}
                    </h3>
                    <div style={{
                        fontWeight: 600,
                        color: 'var(--accent-green, #2D5A3D)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        fontSize: '0.85rem'
                    }}>
                        {member.title}
                    </div>
                </div>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--accent-green, #2D5A3D)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'transform 0.2s ease',
                    transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                }}>
                    View Bio <ArrowRight size={16} />
                </div>
            </div>
        </Link>
    );
};

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
                        <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-light-primary)', margin: '0 0 16px 0', lineHeight: 1.1,  }}>{aboutPage.hero.title}</h1>
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

            {/* Team Section */}
            <section style={{ backgroundColor: 'var(--accent-green)', padding: '80px 0' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#FFFFFF', margin: '0 0 16px 0' }}>{aboutPage.team.heading}</h2>
                        <p style={{ color: '#FFFFFF', opacity: 0.85, fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                            {aboutPage.team.subtitle}
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {aboutPage.team.members.map((member) => (
                            <TeamMemberCard key={member.id} member={member} />
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
