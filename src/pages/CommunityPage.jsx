import React from 'react';
import { Compass, Map, Handshake, Heart, Clock, Lightbulb, Users, ArrowRight } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

// ASP emerald accent for the ASP-specific sections
const ASP_EMERALD = '#046A38';
const ASP_EMERALD_LIGHT = 'rgba(4, 106, 56, 0.08)';

export default function CommunityPage({ onContactClick }) {
    return (
        <div className="community-page">

            {/* ─── 1. HERO ─── */}
            <section className="hero-wrapper" style={{ minHeight: '50vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
                <div className="hero-bg-media" style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                    <img
                        src="/vancouver.webp"
                        alt="Community"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>
                <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(35, 24, 21, 0.8), rgba(35, 24, 21, 0.5))', zIndex: -1 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <div className="hero-content" style={{ maxWidth: '750px' }}>
                        <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-light-primary)', margin: '0 0 20px 0', lineHeight: 1.1 }}>
                            Our Impact
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-light-secondary)', margin: '0 0 20px 0', lineHeight: 1.7, maxWidth: '640px' }}>
                            Building stronger communities goes beyond the projects we deliver.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── 2. FEATURED COMMUNITY INITIATIVE — ASP ─── */}
            <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '56px',
                        alignItems: 'center'
                    }}>
                        <div>
                            <span style={{
                                color: ASP_EMERALD,
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '12px'
                            }}>
                                The Arjan Seva Project
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '2.5rem',
                                color: 'var(--text-dark-primary)',
                                margin: '0 0 32px 0',
                                lineHeight: 1.3
                            }}>
                                Building Beyond Our Projects
                            </h2>
                            <div style={{ width: '48px', height: '3px', backgroundColor: ASP_EMERALD, margin: '20px 0 24px 0', borderRadius: '2px' }} />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                                    Our work is grounded in a simple belief: expertise has greater value when it is shared. We encourage our people to contribute their time, experience and energy to causes that strengthen communities, create opportunity and leave something meaningful behind.
                                </p>
                                <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                                    That commitment comes to life through our support of The Arjan Seva Project (ASP).
                                </p>
                                <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                                    The Arjan Seva Project is an independent community initiative inspired by the legacy of Guru Arjan Dev Ji and the Sikh principle of seva — selfless service for the benefit of others.
                                </p>
                                <p style={{ color: 'var(--text-dark-primary)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                                    ASP brings people together to experience culture, understand heritage, serve communities and ultimately help create infrastructure that improves people's lives.
                                </p>
                            </div>
                        </div>

                        {/* Placeholder photo */}
                        <div style={{
                            borderRadius: 'var(--radius-lg, 16px)',
                            overflow: 'hidden',
                            aspectRatio: '4/3',
                            backgroundColor: '#EDE8E3',
                            boxShadow: '0 12px 32px rgba(35, 24, 21, 0.08)'
                        }}>
                            <img
                                src="/HOSPITAL1.jpg"
                                alt="Community initiative"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 3. ASP AT A GLANCE — Four Pillars ─── */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '48px' }}>
                        <span style={{
                            color: ASP_EMERALD,
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '12px'
                        }}>
                            ASP at a Glance
                        </span>
                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '2.5rem',
                            color: 'var(--text-dark-primary)',
                            margin: '0',
                            lineHeight: 1.3
                        }}>
                            Four Pillars of Impact
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '24px'
                    }}>
                        {[
                            { icon: Map, title: 'Journey', description: 'Experience people, places, history, traditions and culture through meaningful journeys.' },
                            { icon: Users, title: 'Connect', description: 'Create relationships across generations, communities, cultures and countries.' },
                            { icon: Heart, title: 'Serve', description: 'Put seva into action through volunteerism, community initiatives, professional expertise and giving.' },
                            { icon: Compass, title: 'Build', description: 'Turn service into lasting impact through healthcare, community and other essential infrastructure.' }
                        ].map((pillar, idx) => (
                            <div key={idx} style={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: 'var(--radius-lg, 16px)',
                                padding: '36px 28px',
                                border: '1px solid var(--border-light)',
                                boxShadow: '0 2px 8px rgba(35, 24, 21, 0.03)',
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '14px',
                                    backgroundColor: ASP_EMERALD_LIGHT,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px'
                                }}>
                                    <pillar.icon size={24} color={ASP_EMERALD} />
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.35rem',
                                    color: 'var(--text-dark-primary)',
                                    margin: '0 0 10px 0',
                                    fontWeight: 700
                                }}>
                                    {pillar.title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-dark-secondary)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.65,
                                    margin: 0
                                }}>
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 4. OUR PEOPLE. OUR EXPERTISE. OUR COMMUNITY. ─── */}
            <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '56px',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '2.5rem',
                                color: 'var(--text-dark-primary)',
                                margin: '0 0 32px 0',
                                lineHeight: 1.3
                            }}>
                                Our People. Our Expertise. Our Community.
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
                                    JIM Co team members are encouraged to participate in ASP initiatives and contribute more than financial support.
                                </p>

                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.35rem',
                                    color: 'var(--text-dark-primary)',
                                    margin: '8px 0 0 0',
                                    fontWeight: 700
                                }}>
                                    Contribute What We Know
                                </h3>

                                <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                                    Our people bring experience in planning, project delivery, infrastructure, enterprise technology, operational readiness and organizational transformation. Through ASP, those skills can be shared in service of communities that may benefit from them.
                                </p>

                                <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                                    As ASP grows, the vision is to create opportunities for JIM Co employees and other Canadian and international professionals and organizations to contribute their expertise to meaningful community projects.
                                </p>

                                <div style={{
                                    marginTop: '12px',
                                    padding: '24px 28px',
                                    backgroundColor: 'var(--bg-light)',
                                    borderRadius: '12px',
                                    borderLeft: '4px solid var(--accent-green)'
                                }}>
                                    <p style={{ color: 'var(--text-dark-primary)', fontSize: '1.1rem', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                                        Because giving back isn't only about what we donate.<br />
                                        <span style={{ color: 'var(--accent-green)', fontWeight: 700 }}>It's about what we can do.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder image */}
                        <div style={{
                            borderRadius: 'var(--radius-lg, 16px)',
                            overflow: 'hidden',
                            aspectRatio: '4/3',
                            backgroundColor: '#EDE8E3',
                            boxShadow: '0 12px 32px rgba(35, 24, 21, 0.08)'
                        }}>
                            <img
                                src="https://placehold.co/800x600/EDE8E3/5C4E47?text=Community+Photo"
                                alt="Our people in the community"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 5. HOW JIM CO. SUPPORTS COMMUNITY ─── */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
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
                            How We Support
                        </span>
                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '2.5rem',
                            color: 'var(--text-dark-primary)',
                            margin: '0',
                            lineHeight: 1.3
                        }}>
                            How We Support Our Community
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '28px'
                    }}>
                        {[
                            {
                                icon: Clock,
                                title: 'Time',
                                description: 'Encourage team members to participate in volunteer and community initiatives, with the future opportunity to establish dedicated Seva Days.'
                            },
                            {
                                icon: Lightbulb,
                                title: 'Expertise',
                                description: 'Share professional knowledge and practical experience where it can create meaningful value.'
                            },
                            {
                                icon: Handshake,
                                title: 'Partnership',
                                description: 'Connect people, organizations and capabilities to help community ideas move into action.'
                            }
                        ].map((card, idx) => (
                            <div key={idx} style={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: 'var(--radius-lg, 16px)',
                                padding: '40px 36px',
                                border: '1px solid var(--border-light)',
                                boxShadow: '0 2px 8px rgba(35, 24, 21, 0.03)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '14px',
                                    backgroundColor: 'rgba(45, 106, 79, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px'
                                }}>
                                    <card.icon size={24} color="var(--accent-green, #2D6A4F)" />
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.5rem',
                                    color: 'var(--text-dark-primary)',
                                    margin: '0 0 12px 0',
                                    fontWeight: 700
                                }}>
                                    {card.title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-dark-secondary)',
                                    fontSize: '1rem',
                                    lineHeight: 1.7,
                                    margin: 0
                                }}>
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 6. CALL TO ACTION — Explore ASP ─── */}
            <section style={{ padding: '80px 0', backgroundColor: ASP_EMERALD }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.5rem',
                        color: '#FFFFFF',
                        margin: '0 0 16px 0',
                        lineHeight: 1.3
                    }}>
                        Explore The Arjan Seva Project
                    </h2>
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '1.15rem',
                        lineHeight: 1.7,
                        maxWidth: '600px',
                        margin: '0 auto 36px auto'
                    }}>
                        Learn about ASP's story, journeys, seva initiatives and long-term vision for community impact.
                    </p>
                    <a
                        href="https://arjansevaproject.com"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: '#FFFFFF',
                            color: ASP_EMERALD,
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
                        Explore The Arjan Seva Project <ArrowRight size={18} />
                    </a>
                </div>
            </section>

            {/* ─── CONTACT CTA ─── */}
            <CtaBanner onContactClick={onContactClick} />
        </div>
    );
}
