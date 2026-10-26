import { getAssetUrl } from '../utils/assets';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import NotFoundPage from './NotFoundPage';
import { getTeamMember, getProjectData } from '../data/siteContent';

export default function BioPage({ onContactClick }) {
  const { id } = useParams();
  const member = getTeamMember(id);

  useEffect(() => { document.title = member?.name ? `${member.name} | JIM Co.` : 'Team member not found | JIM Co.'; }, [member]);

  if (!member) return <NotFoundPage title="Team member not found" to="/team" label="Back to Team" />;

  const portraitSrc = getAssetUrl(member.image);
  const hasExpertise = Array.isArray(member.expertise) && member.expertise.length > 0;
  const hasExperience = Array.isArray(member.experience) && member.experience.length > 0;
  const hasCredentials = Array.isArray(member.credentials) && member.credentials.length > 0;

  const handleDownloadClick = async (e) => {
    const fileUrl = getAssetUrl(member.profilePdf);
    if (!fileUrl) return;

    const fullUrl = fileUrl.startsWith('http') ? fileUrl : `${window.location.origin}${fileUrl}`;
    const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                     (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1 && window.innerWidth <= 1024);

    if (isMobile && typeof navigator !== 'undefined' && navigator.share) {
      e.preventDefault();
      try {
        const response = await fetch(fileUrl);
        if (response.ok) {
          const blob = await response.blob();
          const fileName = member.profilePdf;
          const file = new File([blob], fileName, { type: 'application/pdf' });

          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: `${member.name} - Profile`,
              text: `Executive profile for ${member.name}`
            });
            return;
          }
        }

        // Fallback to sharing URL via native share sheet
        await navigator.share({
          title: `${member.name} - Profile`,
          url: fullUrl
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          // If share fails, open in a new tab
          window.open(fileUrl, '_blank', 'noopener,noreferrer');
        }
      }
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh' }}>

      {/* ───────────────────────────────────────────────
          1. SPLIT HERO — copy left, portrait right
      ──────────────────────────────────────────────── */}
      <section className="profile-hero">
        <div className="profile-hero-inner">
          {/* Text column */}
          <div className="profile-hero-text">
            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--accent-green)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.875rem',
                marginBottom: '16px'
              }}
            >
              <ArrowLeft size={16} /> Back to About
            </Link>

            <span style={{
              color: 'var(--accent-green)',
              fontWeight: 700,
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px'
            }}>
              Leadership
            </span>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: 'var(--text-dark-primary)',
              margin: '0 0 6px 0',
              lineHeight: 1.1,
              fontWeight: 700
            }}>
              {member.name}
            </h1>

            <div style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--accent-green-dark)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '16px'
            }}>
              {member.title}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {(member.profile || member.bio || []).map((para, idx) => (
                <p key={idx} style={{
                  margin: 0,
                  color: 'var(--text-dark-secondary)',
                  fontSize: '1.125rem',
                  lineHeight: 1.7
                }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Portrait column */}
          <div className="profile-hero-portrait">
            <div style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 20px 48px rgba(35, 24, 21, 0.14)',
              aspectRatio: '4/5',
              maxWidth: '320px',
              backgroundColor: '#EDE8E3'
            }}>
              <img
                src={portraitSrc}
                alt={member.alt || member.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {hasExpertise && (
        <section className="bio-section" aria-labelledby="bio-expertise-heading">
          <div className="bio-content-shell">
            <div className="bio-panel bio-panel-sage">
              <h2 id="bio-expertise-heading">Areas of Expertise</h2>
              <ul className="bio-expertise-list" role="list">
                {member.expertise.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}

      {hasExperience && (
        <section className="bio-section" aria-labelledby="bio-highlights-heading">
          <div className="bio-content-shell">
            <div className="bio-panel">
              <h2 id="bio-highlights-heading">Highlights</h2>
              <div className="bio-highlights">
                {member.experience.map((entry, index) => {
                  // Website projects inherit their canonical title; standalone projects supply their own.
                  const title = getProjectData(entry.projectId)?.title || entry.project;
                  if (!title && !entry.description) return null;
                  return (
                    <article key={index}>
                      {title && <h3>{title}</h3>}
                      {entry.description && <p>{entry.description}</p>}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {Array.isArray(member.conferences) && member.conferences.length > 0 && (
        <section className="bio-section" aria-labelledby="bio-conferences-heading">
          <div className="bio-content-shell">
            <div className="bio-panel">
              <h2 id="bio-conferences-heading">Conference Highlights</h2>
              <div className="bio-conferences">
                {member.conferences.map((conference, index) => (
                  <article key={index}>
                    <p className="bio-conference-date">{conference.date}</p>
                    <h3>{conference.event}</h3>
                    <p>{conference.topic}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {hasCredentials && (
        <section className="bio-section" aria-labelledby="bio-credentials-heading">
          <div className="bio-content-shell">
            <div className="bio-panel bio-credentials-panel">
              <h2 id="bio-credentials-heading">Credentials</h2>
              <ul className="bio-credentials-list" role="list">
                {member.credentials.map((credential, index) => <li key={index}>{credential}</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────
          8. DOWNLOADABLE ONE-PAGE PROFILE CTA
      ──────────────────────────────────────────────── */}
      {member.profilePdf && (
        <section className="bio-download-section">
          <div className="container" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center'
          }}>
            <Download size={28} color="var(--accent-green)" style={{ marginBottom: '12px' }} />
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--text-dark-primary)',
              margin: '0 0 6px 0'
            }}>
              Download Executive Profile
            </h3>
            <p style={{
              color: 'var(--text-dark-secondary)',
              fontSize: '1.05rem',
              margin: '0 0 20px 0',
              lineHeight: 1.6
            }}>
                See {`${member.name.split(' ')[0]}'s`} background, expertise, and selected project experience.
            </p>
            <a
              href={getAssetUrl(member.profilePdf)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadClick}
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--accent-green)',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'background var(--transition-fast)'
              }}
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────
          8. CONTACT CTA
      ──────────────────────────────────────────────── */}
      <CtaBanner onContactClick={onContactClick} />
    </div>
  );
}
