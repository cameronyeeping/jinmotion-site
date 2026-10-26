import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage({ title = 'Page not found', to = '/', label = 'Back to Home' }) {
  useEffect(() => { document.title = `${title} | J in Motion`; }, [title]);

  return (
    <section className="section-light" style={{ minHeight: '60vh', padding: '160px 24px 80px' }}>
      <div className="container">
        <h1>{title}</h1>
        <p>The page you requested could not be found.</p>
        <Link to={to}>{label}</Link>
      </div>
    </section>
  );
}
