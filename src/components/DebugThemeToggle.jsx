import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const themes = [
  { id: 'forest',   label: 'Forest',   color: '#2D6A4F', description: 'Earthy forest green — Jeannie\'s pick' },
  { id: 'espresso', label: 'Espresso', color: '#6F4E37', description: 'Warm espresso brown — branding tone' },
  { id: 'emerald',  label: 'Emerald',  color: '#10B981', description: 'Bright emerald green' },
  { id: 'blue',     label: 'Blue',     color: '#13629B', description: 'Corporate blue' },
];

const DebugThemeToggle = () => {
  const [accent, setAccent] = useState('forest');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  const activeTheme = themes.find((t) => t.id === accent);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
      }}
    >
      {/* Expanded Theme Picker */}
      {expanded && (
        <div
          style={{
            backgroundColor: 'rgba(35, 24, 21, 0.95)',
            backdropFilter: 'blur(16px)',
            borderRadius: '16px',
            padding: '16px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
            minWidth: '200px',
          }}
        >
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
            Accent Theme
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {themes.map((theme) => {
              const isActive = accent === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => { setAccent(theme.id); setExpanded(false); }}
                  title={theme.description}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    border: 'none',
                    background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                    width: '100%',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                >
                  {/* Color Swatch */}
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: theme.color,
                      border: isActive ? '2px solid #FFFFFF' : '2px solid rgba(255,255,255,0.2)',
                      flexShrink: 0,
                      boxShadow: isActive ? `0 0 8px ${theme.color}` : 'none',
                      transition: 'all 0.2s',
                    }}
                  />
                  {/* Label */}
                  <span style={{ fontSize: '0.85rem', fontWeight: isActive ? 700 : 500, color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}>
                    {theme.label}
                  </span>
                  {/* Active indicator */}
                  {isActive && (
                    <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: theme.color, fontWeight: 700 }}>●</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        title="Debug: Switch Accent Theme"
        style={{
          backgroundColor: 'rgba(35, 24, 21, 0.92)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '9999px',
          padding: '10px 16px',
          color: '#FFFFFF',
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <Palette size={14} color={activeTheme?.color || '#FFFFFF'} />
        <span
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: activeTheme?.color,
            border: '1.5px solid rgba(255,255,255,0.3)',
          }}
        />
        <span style={{ color: 'rgba(255,255,255,0.85)' }}>
          {activeTheme?.label}
        </span>
      </button>
    </div>
  );
};

export default DebugThemeToggle;
