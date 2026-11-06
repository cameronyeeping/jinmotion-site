import { useEffect } from 'react';
import CtaBanner from '../components/CtaBanner';
import { outreachPage } from '../data/siteContent';
import { getAssetUrl } from '../utils/assets';

function WorkshopCard({ workshop }) {
    return (
        <article className="outreach-resource">
            <div className="outreach-resource-image">
                <img src={getAssetUrl(workshop.image)} alt={workshop.imageAlt || ''} loading="lazy" />
            </div>
            <div className="outreach-resource-body">
                <h3>{workshop.title}</h3>
            </div>
        </article>
    );
}

export default function OutreachPage({ onContactClick }) {
    useEffect(() => { document.title = 'Engagements | J in Motion'; }, []);

    return (
        <div className="outreach-page">
            <section className="hero-wrapper outreach-hero">
                <div className="hero-bg-media">
                    <img src={getAssetUrl(outreachPage.hero.bgImage)} alt={outreachPage.hero.bgAlt} />
                </div>
                <div className="hero-overlay" />
                <div className="outreach-shell" style={{ position: 'relative', zIndex: 3 }}>
                    <div className="hero-content" style={{ maxWidth: '700px' }}>
                        <h1 className="hero-title">{outreachPage.hero.title}</h1>
                        <p className="hero-subtitle">{outreachPage.hero.subtitle}</p>
                    </div>
                </div>
            </section>

            <section className="outreach-library outreach-shell" aria-label="Engagements">
                <div className="outreach-resource-grid">
                    {outreachPage.workshops.map((workshop) => <WorkshopCard key={workshop.id} workshop={workshop} />)}
                </div>
            </section>
            <CtaBanner onContactClick={onContactClick} />
        </div>
    );
}
