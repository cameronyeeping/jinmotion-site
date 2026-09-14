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
                maxWidth: '360px',
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
                aspectRatio: '4/5',
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

const TeamPage = ({ onContactClick }) => {
    return (
        <div className="team-page">
            {/* Hero Section */}
            <section className="hero-wrapper" style={{ minHeight: '50vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
                <div className="hero-bg-media" style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                    <img
                        src="/vancouver.webp"
                        alt="Team Background"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>
                <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(35, 24, 21, 0.8), rgba(35, 24, 21, 0.5))', zIndex: -1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <div className="hero-content" style={{ maxWidth: '700px' }}>
                        <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-light-primary)', margin: '0 0 16px 0', lineHeight: 1.1 }}>
                            {aboutPage.team.heading}
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-light-secondary)', margin: '0', lineHeight: 1.6 }}>
                            {aboutPage.team.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
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

export default TeamPage;
