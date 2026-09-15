import React, { useState } from 'react';
import CtaBanner from '../components/CtaBanner';
import { servicesPage } from '../data/siteContent';
import { Building2, Cpu, Compass, CheckCircle2 } from 'lucide-react';

const iconMap = {
    'building': Building2,
    'building-2': Building2,
    'cpu': Cpu,
    'compass': Compass
};

const ServiceCategoryCard = ({ category }) => {
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = iconMap[category.icon] || Compass;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg, 16px)',
                padding: '40px 36px',
                border: '1px solid var(--border-light)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 16px 32px rgba(35, 24, 21, 0.08)' : '0 2px 8px rgba(35, 24, 21, 0.03)',
                display: 'grid',
                gridTemplateRows: 'subgrid',
                gridRow: 'span 4'
            }}
        >
            {/* Icon & Title */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                marginBottom: '16px'
            }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(45, 106, 79, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }}>
                    <IconComponent size={24} color="var(--accent-green, #2D6A4F)" />
                </div>
                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    color: 'var(--text-dark-primary)',
                    margin: 0,
                    fontWeight: 700
                }}>
                    {category.title}
                </h3>
            </div>

            {/* Description */}
            <p style={{
                color: 'var(--text-dark-secondary)',
                fontSize: '1rem',
                lineHeight: 1.65,
                margin: 0,
                alignSelf: 'start'
            }}>
                {category.description}
            </p>

            {/* Divider */}
            <div style={{
                height: '1px',
                backgroundColor: 'var(--border-light)',
                alignSelf: 'end',
                marginBottom: '20px'
            }} />

            {/* Items List */}
            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignSelf: 'start'
            }}>
                {category.items.map((item, idx) => (
                    <li
                        key={idx}
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            color: 'var(--text-dark-primary)',
                            fontSize: '0.95rem',
                            lineHeight: 1.5
                        }}
                    >
                        <CheckCircle2
                            size={16}
                            color="var(--accent-green, #2D6A4F)"
                            style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function ServicesPage({ onContactClick }) {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="hero-wrapper" style={{ minHeight: '50vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
                <div className="hero-bg-media" style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                    <img
                        src={servicesPage.hero.bgImage}
                        alt={servicesPage.hero.bgAlt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>
                <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(35, 24, 21, 0.8), rgba(35, 24, 21, 0.5))', zIndex: -1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <div className="hero-content" style={{ maxWidth: '700px' }}>
                        <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-light-primary)', margin: '0 0 16px 0', lineHeight: 1.1 }}>
                            {servicesPage.hero.title}
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-light-secondary)', margin: '0', lineHeight: 1.6 }}>
                            {servicesPage.hero.subtitle}
                        </p>
                    </div>
                </div>
            </section>


            {/* Detailed Service Cards */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gridTemplateRows: 'auto auto auto auto',
                        gap: '32px',
                        alignItems: 'stretch'
                    }}>
                        {servicesPage.categories.map((category) => (
                            <ServiceCategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <CtaBanner onContactClick={onContactClick} />
        </div>
    );
}
