import React, { useState } from 'react';
import { Heart, Users, GraduationCap, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import { communityPage } from '../data/siteContent';

const iconMap = {
    'heart': Heart,
    'users': Users,
    'graduation-cap': GraduationCap,
    'building-2': Building2
};

const PillarImageCard = ({ pillar }) => {
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = iconMap[pillar.icon] || Heart;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg, 16px)',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 16px 32px rgba(35, 24, 21, 0.08)' : '0 2px 8px rgba(35, 24, 21, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxSizing: 'border-box'
            }}
        >
            <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img
                    src={pillar.image}
                    alt={pillar.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isHovered ? 'scale(1.06)' : 'scale(1)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(35, 24, 21, 0.5) 0%, transparent 60%)'
                }} />
                <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                    <IconComponent size={20} color="var(--accent-green, #2D6A4F)" />
                </div>
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    color: 'var(--text-dark-primary)',
                    margin: '0 0 10px 0',
                    fontWeight: 700,
                    lineHeight: 1.3
                }}>
                    {pillar.title}
                </h3>
                <p style={{
                    color: 'var(--text-dark-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    margin: 0
                }}>
                    {pillar.description}
                </p>
            </div>
        </div>
    );
};

const CharityCard = ({ charity }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg, 16px)',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 16px 32px rgba(35, 24, 21, 0.08)' : '0 2px 8px rgba(35, 24, 21, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxSizing: 'border-box'
            }}
        >
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                    src={charity.image}
                    alt={charity.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isHovered ? 'scale(1.06)' : 'scale(1)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(35, 24, 21, 0.4) 0%, transparent 60%)'
                }} />
                <span style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(45, 106, 79, 0.9)',
                    backdropFilter: 'blur(6px)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                }}>
                    {charity.category}
                </span>
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    color: 'var(--text-dark-primary)',
                    margin: '0 0 10px 0',
                    fontWeight: 700,
                    lineHeight: 1.3
                }}>
                    {charity.name}
                </h3>

                <p style={{
                    color: 'var(--text-dark-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                    flexGrow: 1
                }}>
                    {charity.description}
                </p>

                {charity.link && (
                    <a
                        href={charity.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: 'var(--accent-green)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'color var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green-dark)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
                    >
                        <span>Visit Foundation</span>
                        <ExternalLink size={14} />
                    </a>
                )}
            </div>
        </div>
    );
};

export default function CommunityPage({ onContactClick }) {
    const { hero, intro, stats, pillars, charities, gallery } = communityPage;

    return (
        <div className="community-page">
            {/* Hero Section */}
            <section className="hero-wrapper" style={{ minHeight: '50vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
                <div className="hero-bg-media" style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                    <img
                        src={hero.bgImage}
                        alt={hero.bgAlt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>
                <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(35, 24, 21, 0.8), rgba(35, 24, 21, 0.5))', zIndex: -1 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <div className="hero-content" style={{ maxWidth: '750px' }}>
                        <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-light-primary)', margin: '0 0 16px 0', lineHeight: 1.1 }}>
                            {hero.title}
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-light-secondary)', margin: '0', lineHeight: 1.6 }}>
                            {hero.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Visual Story & Intro (Side-by-side) */}
            <section className="section-light" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '48px',
                        alignItems: 'center'
                    }}>
                        <div>
                            <span style={{
                                color: 'var(--accent-green)',
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '14px'
                            }}>
                                {intro.eyebrow}
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '2.5rem',
                                color: 'var(--text-dark-primary)',
                                margin: '0 0 20px 0',
                                lineHeight: 1.2
                            }}>
                                {intro.heading}
                            </h2>
                            <p style={{
                                color: 'var(--text-dark-secondary)',
                                fontSize: '1.15rem',
                                lineHeight: 1.7,
                                margin: '0 0 32px 0'
                            }}>
                                {intro.summary}
                            </p>

                            {/* Stats Counter Row */}
                            {stats && (
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '20px',
                                    paddingTop: '24px',
                                    borderTop: '1px solid var(--border-light)'
                                }}>
                                    {stats.map((stat, idx) => (
                                        <div key={idx}>
                                            <div style={{
                                                fontSize: '2.5rem',
                                                fontWeight: 800,
                                                color: 'var(--accent-green)',
                                                fontFamily: 'var(--font-heading)',
                                                lineHeight: 1
                                            }}>
                                                {stat.value}
                                            </div>
                                            <div style={{
                                                fontSize: '0.825rem',
                                                fontWeight: 600,
                                                color: 'var(--text-dark-secondary)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.04em',
                                                marginTop: '8px'
                                            }}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Featured Photo Banner */}
                        <div style={{
                            position: 'relative',
                            borderRadius: 'var(--radius-lg, 20px)',
                            overflow: 'hidden',
                            boxShadow: '0 16px 36px rgba(35, 24, 21, 0.1)',
                            aspectRatio: '4/3'
                        }}>
                            <img
                                src={intro.featuredImage}
                                alt={intro.featuredImageAlt}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(35, 24, 21, 0.7) 0%, transparent 60%)'
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '24px',
                                left: '24px',
                                right: '24px',
                                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: 'var(--radius-md, 12px)',
                                padding: '16px 20px',
                                border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}>
                                <div style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    color: 'var(--text-dark-primary)',
                                    marginBottom: '4px'
                                }}>
                                    Partnering Where We Build
                                </div>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-dark-secondary)',
                                    lineHeight: 1.4
                                }}>
                                    Dedicated to leaving a lasting community benefit with every capital program.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Focus Areas (Image Cards) */}
            {pillars && pillars.length > 0 && (
                <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-light-secondary)' }}>
                    <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'left', marginBottom: '40px' }}>
                            <span style={{
                                color: 'var(--accent-green)',
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '10px'
                            }}>
                                FOCUS AREAS
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '2.5rem',
                                color: 'var(--text-dark-primary)',
                                margin: 0,
                                lineHeight: 1.2
                            }}>
                                How We Support Communities
                            </h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '24px'
                        }}>
                            {pillars.map((pillar) => (
                                <PillarImageCard key={pillar.id} pillar={pillar} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Supported Charities Grid (Image Cards) */}
            {charities && charities.length > 0 && (
                <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
                    <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '40px' }}>
                            <span style={{
                                color: 'var(--accent-green)',
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '10px'
                            }}>
                                GIVING & PARTNERSHIPS
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '2.5rem',
                                color: 'var(--text-dark-primary)',
                                margin: 0,
                                lineHeight: 1.2
                            }}>
                                Charities We Proudly Support
                            </h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                            gap: '24px'
                        }}>
                            {charities.map((charity, idx) => (
                                <CharityCard key={idx} charity={charity} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Community Gallery / Visual Moments */}
            {gallery && gallery.length > 0 && (
                <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-light-secondary)' }}>
                    <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '40px' }}>
                            <span style={{
                                color: 'var(--accent-green)',
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '10px'
                            }}>
                                OUR WORK IN THE COMMUNITY
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '2.5rem',
                                color: 'var(--text-dark-primary)',
                                margin: 0,
                                lineHeight: 1.2
                            }}>
                                Impact in Action
                            </h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '20px'
                        }}>
                            {gallery.map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        position: 'relative',
                                        borderRadius: 'var(--radius-md, 14px)',
                                        overflow: 'hidden',
                                        height: '240px',
                                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)'
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block'
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(35, 24, 21, 0.85) 0%, rgba(35, 24, 21, 0.2) 60%, transparent 100%)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        padding: '20px'
                                    }}>
                                        <div style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontWeight: 700,
                                            fontSize: '1.05rem',
                                            color: 'var(--text-light-primary)',
                                            marginBottom: '4px'
                                        }}>
                                            {item.title}
                                        </div>
                                        <div style={{
                                            fontSize: '0.825rem',
                                            color: 'var(--text-light-secondary)',
                                            lineHeight: 1.4
                                        }}>
                                            {item.caption}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Banner */}
            <CtaBanner onContactClick={onContactClick} />
        </div>
    );
}
