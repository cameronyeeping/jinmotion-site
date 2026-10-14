import { useEffect, useId, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PartnerCarousel({ eyebrow, heading, items }) {
    const trackRef = useRef(null);
    const id = useId();
    const [pageSize, setPageSize] = useState(5);
    const [page, setPage] = useState(0);
    const [fading, setFading] = useState(false);
    const timerRef = useRef(null);
    const swipeRef = useRef(null);
    const pageCount = Math.ceil(items.length / pageSize);
    const currentPage = pageCount ? page % pageCount : 0;
    const canMove = pageCount > 1;

    useEffect(() => {
        const track = trackRef.current;
        const measure = () => {
            const count = parseInt(getComputedStyle(track).getPropertyValue('--partners-visible'), 10) || 5;
            setPageSize(count);
        };
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(track);
        return () => observer.disconnect();
    }, []);

    useEffect(() => () => clearTimeout(timerRef.current), []);

    const move = (direction) => {
        if (!canMove || timerRef.current !== null) return;
        const advance = () => setPage((previous) => ((previous % pageCount) + direction + pageCount) % pageCount);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            advance();
            return;
        }
        setFading(true);
        timerRef.current = setTimeout(() => {
            advance();
            setFading(false);
            timerRef.current = null;
        }, 100);
    };

    return (
        <section className="clients-section" role="region" aria-roledescription="carousel" aria-labelledby={`${id}-heading`}>
            <div className="container">
                <div className="partners-carousel-header">
                    <div>
                        {eyebrow && <span className="partners-eyebrow">{eyebrow}</span>}
                        <h2 id={`${id}-heading`}>{heading}</h2>
                    </div>
                    <div className="partners-carousel-controls">
                        <button type="button" aria-label="Previous partners" aria-controls={`${id}-track`} disabled={!canMove} onClick={() => move(-1)}><ChevronLeft size={20} aria-hidden="true" /></button>
                        <button type="button" aria-label="Next partners" aria-controls={`${id}-track`} disabled={!canMove} onClick={() => move(1)}><ChevronRight size={20} aria-hidden="true" /></button>
                    </div>
                </div>
                <ul id={`${id}-track`} className={`partners-carousel-track${fading ? ' is-fading' : ''}`} ref={trackRef} tabIndex={0} aria-label="Partner logos. Use arrow keys or swipe to browse." aria-live="polite" aria-busy={fading}
                    onPointerDown={(event) => { swipeRef.current = { x: event.clientX, y: event.clientY }; }}
                    onPointerCancel={() => { swipeRef.current = null; }}
                    onPointerUp={(event) => {
                        const start = swipeRef.current;
                        swipeRef.current = null;
                        if (!start) return;
                        const dx = event.clientX - start.x;
                        const dy = event.clientY - start.y;
                        if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
                    }} onKeyDown={(event) => {
                    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                        event.preventDefault();
                        move(event.key === 'ArrowLeft' ? -1 : 1);
                    }
                }}>
                    {items.map((partner, index) => (
                        <li className="client-logo" key={partner.name} hidden={index < currentPage * pageSize || index >= (currentPage + 1) * pageSize}>
                            <img src={partner.logo} alt={partner.name} title={partner.name} loading="lazy" decoding="async" style={{ '--logo-scale': partner.logoScale || 1 }} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
