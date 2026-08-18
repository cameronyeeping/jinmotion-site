import React from 'react';
import { Target, TrendingUp, LayoutGrid, ArrowRight, Star } from 'lucide-react';
import { homePage } from '../data/siteContent';

const iconComponents = {
  'target': Target,
  'trending-up': TrendingUp,
  'grid': LayoutGrid,
  'arrow-right': ArrowRight,
  'star': Star
};

export default function MethodologyGraphic() {
  const { methodology } = homePage;
  if (!methodology) return null;

  return (
    <section className="section-light" style={{ backgroundColor: 'var(--bg-light)', padding: '80px 0' }}>
      <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Outer Frame matching the diagram */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg, 20px)',
          border: '1px solid var(--border-light, rgba(35, 24, 21, 0.12))',
          padding: 'clamp(24px, 4vw, 48px)',
          boxShadow: '0 12px 32px rgba(35, 24, 21, 0.04)'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '40px' }}>
            <span style={{
              color: 'var(--accent-green, #2D6A4F)',
              fontWeight: 700,
              fontSize: '0.875rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px'
            }}>
              {methodology.eyebrow}
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              color: 'var(--text-dark-primary, #1F1513)',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
              fontWeight: 700
            }}>
              {methodology.heading}
            </h2>
            <p style={{
              color: 'var(--text-dark-secondary, #5C4E47)',
              fontSize: '1.15rem',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '750px'
            }}>
              {methodology.subtitle}
            </p>
          </div>

          {/* 5-Step Cards Container with responsive wrapping */}
          <div style={{
            position: 'relative',
            marginBottom: '36px'
          }}>
            {/* Connecting Horizontal Line behind icons (visible on desktop) */}
            <div className="methodology-line" />

            <div className="methodology-grid">
              {methodology.steps.map((step) => {
                const IconComponent = iconComponents[step.icon] || Target;
                const isHighlight = step.isHighlighted;

                return (
                  <div
                    key={step.number}
                    style={{
                      backgroundColor: isHighlight ? 'var(--accent-green-dark, #1B4332)' : '#FFFFFF',
                      borderRadius: 'var(--radius-md, 14px)',
                      border: isHighlight
                        ? '1px solid var(--accent-green-dark, #1B4332)'
                        : '1px solid var(--border-light, rgba(35, 24, 21, 0.12))',
                      padding: '24px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: isHighlight
                        ? '0 12px 28px rgba(27, 67, 50, 0.25)'
                        : '0 4px 14px rgba(0, 0, 0, 0.03)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                  >
                    {/* Top Icon Circle */}
                    <div style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      backgroundColor: isHighlight ? '#FFFFFF' : '#FFFFFF',
                      border: isHighlight
                        ? '2px solid rgba(255, 255, 255, 0.8)'
                        : '1px solid rgba(35, 24, 21, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                      flexShrink: 0
                    }}>
                      <IconComponent
                        size={26}
                        color={isHighlight ? '#32231F' : '#32231F'}
                        strokeWidth={1.75}
                      />
                    </div>

                    {/* Step Number */}
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: isHighlight ? 'rgba(255, 255, 255, 0.75)' : 'var(--accent-green, #2D6A4F)',
                      marginBottom: '4px'
                    }}>
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: isHighlight ? '#FFFFFF' : 'var(--text-dark-primary, #1F1513)',
                      margin: '0 0 10px 0',
                      lineHeight: 1.2
                    }}>
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      color: isHighlight ? 'rgba(255, 255, 255, 0.85)' : 'var(--text-dark-primary, #1F1513)',
                      margin: '0 0 20px 0',
                      minHeight: '42px'
                    }}>
                      {step.description}
                    </p>

                    {/* Divider Line */}
                    <div style={{
                      height: '1px',
                      backgroundColor: isHighlight ? 'rgba(255, 255, 255, 0.2)' : 'var(--border-light, rgba(35, 24, 21, 0.1))',
                      margin: '0 0 18px 0'
                    }} />

                    {/* Section Label */}
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: isHighlight ? 'rgba(255, 255, 255, 0.75)' : 'var(--accent-green, #2D6A4F)',
                      marginBottom: '12px'
                    }}>
                      {step.sectionLabel}
                    </div>

                    {/* Items List */}
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '0.85rem',
                      lineHeight: 1.45,
                      color: isHighlight ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-dark-secondary, #5C4E47)'
                    }}>
                      {step.items.map((item, idx) => (
                        <li key={idx} style={{ margin: 0 }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Summary Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-light, rgba(35, 24, 21, 0.1))'
          }}>
            <div style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: 'var(--text-dark-secondary, #5C4E47)'
            }}>
              {methodology.footerSummary}
            </div>
            <div style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-green, #2D6A4F)'
            }}>
              {methodology.footerTagline}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
