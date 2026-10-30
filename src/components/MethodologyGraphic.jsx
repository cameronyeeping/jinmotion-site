import { Target, TrendingUp, LayoutGrid, ArrowRight, Star } from 'lucide-react';
import { homePage } from '../data/siteContent';

const iconComponents = {
  'target': Target,
  'trending-up': TrendingUp,
  'grid': LayoutGrid,
  'arrow-right': ArrowRight,
  'star': Star
};

export default function MethodologyGraphic({ compact = false, activeStages = [] }) {
  const { methodology } = homePage;
  if (!methodology) return null;

  if (compact) {
    const highlightedStages = new Set(Array.isArray(activeStages) ? activeStages : []);
    return (
      <section className="project-methodology" aria-label="J in Motion project stages">
        <div className="project-methodology-frame">
            <ol className="project-methodology-stages">
              {methodology.steps.map((step) => {
                const Icon = iconComponents[step.icon] || Target;
                const active = highlightedStages.has(step.id);
                return (
                  <li
                    key={step.id}
                    className={`project-methodology-stage${active ? ' is-active' : ''}`}
                    aria-label={`${step.title}: ${active ? 'J in Motion participated' : 'Not highlighted'}`}
                  >
                    <span className="project-methodology-icon"><Icon size={20} strokeWidth={1.75} aria-hidden="true" /></span>
                    <span>{step.title}</span>
                  </li>
                );
              })}
            </ol>
        </div>
      </section>
    );
  }

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
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              color: 'var(--text-dark-primary, #1F1513)',
              margin: '0',
              lineHeight: 1.15,
              fontWeight: 700
            }}>
              {methodology.heading}
            </h2>
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

                return (
                  <div
                    key={step.number}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-md, 14px)',
                      border: '1px solid var(--border-light, rgba(35, 24, 21, 0.12))',
                      padding: '24px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                  >
                    {/* Top Icon Circle */}
                    <div style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(35, 24, 21, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                      flexShrink: 0
                    }}>
                      <IconComponent
                        size={26}
                        color={'#32231F'}
                        strokeWidth={1.75}
                      />
                    </div>

                    {/* Step Number */}
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--accent-green, #2D6A4F)',
                      marginBottom: '4px',
                      textAlign: 'center'
                    }}>
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: 'var(--text-dark-primary, #1F1513)',
                      margin: '0 0 10px 0',
                      lineHeight: 1.2,
                      textAlign: 'center'
                    }}>
                      {step.title}
                    </h3>

                    {/* 

                    <p style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      color: 'var(--text-dark-primary, #1F1513)',
                      margin: '0 0 20px 0',
                      minHeight: '42px',
                    //   textAlign: 'center'
                    }}>
                      {step.description}
                    </p>
                    */}
                    {/* Step Description */}

                    {/* Divider Line */}
                    <div style={{
                      height: '1px',
                      backgroundColor: 'var(--border-light, rgba(35, 24, 21, 0.1))',
                      margin: '0 0 18px 0'
                    }} />


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
                      color: 'var(--text-dark-secondary, #5C4E47)'
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

        </div>

      </div>
    </section>
  );
}
