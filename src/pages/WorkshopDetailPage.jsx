import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { outreachPage } from '../data/siteContent';
import { getAssetUrl } from '../utils/assets';
import NotFoundPage from './NotFoundPage';

export default function WorkshopDetailPage() {
    const { id } = useParams();
    const workshop = outreachPage.workshops.find((item) => item.id === id);

    useEffect(() => {
        document.title = `${workshop?.title || 'Workshop not found'} | J in Motion`;
    }, [workshop]);

    if (!workshop) return <NotFoundPage title="Workshop not found" to="/outreach" label="Back to Outreach" />;

    const paragraphs = Array.isArray(workshop.description) ? workshop.description : [workshop.description];

    return (
        <article className="workshop-detail">
            <header className="workshop-detail-hero">
                <img src={getAssetUrl(outreachPage.hero.bgImage)} alt={outreachPage.hero.bgAlt || ''} />
                <div className="workshop-detail-overlay" />
                <div className="workshop-detail-title">
                    <h1>{workshop.title}</h1>
                </div>
            </header>
            <section className="outreach-shell workshop-detail-content" aria-label="Workshop description">
                <div className="workshop-description">
                    {workshop.image && <img className="workshop-event-image" src={getAssetUrl(workshop.image)} alt={workshop.imageAlt || ''} />}
                    {paragraphs.filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    {workshop.registration?.href && (
                        <p>{workshop.registration.text} <a href={workshop.registration.href} target="_blank" rel="noopener noreferrer">{workshop.registration.label || 'Register for the workshop'}<span className="workshop-sr-only"> (opens in a new tab)</span></a>.</p>
                    )}
                    <Link className="workshop-back" to="/outreach"><ArrowLeft size={16} aria-hidden="true" />Back to Outreach</Link>
                </div>
            </section>
        </article>
    );
}
