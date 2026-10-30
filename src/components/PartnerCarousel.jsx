import { useEffect, useId, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PartnerCarousel({ heading, items }) {
    const trackRef = useRef(null);
    const id = useId();
    const [edges, setEdges] = useState({ atStart: true, atEnd: true });

    useEffect(() => {
        const track = trackRef.current;
        let frame = null;
        const measure = () => {
            frame = null;
            const atStart = track.scrollLeft <= 1;
            const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
            setEdges((previous) => previous.atStart === atStart && previous.atEnd === atEnd
                ? previous : { atStart, atEnd });
        };
        const scheduleMeasure = () => {
            if (frame === null) frame = requestAnimationFrame(measure);
        };
        measure();
        track.addEventListener('scroll', scheduleMeasure, { passive: true });
        const observer = new ResizeObserver(scheduleMeasure);
        observer.observe(track);
        return () => {
            track.removeEventListener('scroll', scheduleMeasure);
            observer.disconnect();
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, [items]);

    const move = (direction) => {
        const track = trackRef.current;
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        const end = Math.max(0, track.scrollWidth - track.clientWidth);
        const left = Math.max(0, Math.min(end, track.scrollLeft + direction * (track.clientWidth + gap)));
        track.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    };

    return (
        <section className="clients-section" role="region" aria-roledescription="carousel" aria-labelledby={`${id}-heading`}>
            <div className="container">
                <div className="partners-carousel-header">
                    <div>
                        <h2 id={`${id}-heading`}>{heading}</h2>
                    </div>
                    <div className="partners-carousel-controls">
                        <button type="button" aria-label="Previous partners" aria-controls={`${id}-track`} disabled={edges.atStart} onClick={() => move(-1)}><ChevronLeft size={20} aria-hidden="true" /></button>
                        <button type="button" aria-label="Next partners" aria-controls={`${id}-track`} disabled={edges.atEnd} onClick={() => move(1)}><ChevronRight size={20} aria-hidden="true" /></button>
                    </div>
                </div>
                <ul id={`${id}-track`} className="partners-carousel-track" ref={trackRef} tabIndex={0} aria-label="Partner logos. Use arrow keys or swipe to browse." onKeyDown={(event) => {
                    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                        event.preventDefault();
                        move(event.key === 'ArrowLeft' ? -1 : 1);
                    }
                }}>
                    {items.map((partner) => (
                        <li className="client-logo" key={partner.name}>
                            <img src={partner.logo} alt={partner.name} title={partner.name} loading="lazy" decoding="async" style={{ '--logo-scale': partner.logoScale || 1 }} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
