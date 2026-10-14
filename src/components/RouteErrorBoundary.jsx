import { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

class PageErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Unable to render page', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section role="alert" className="section-light" style={{ minHeight: '60vh', padding: '160px 24px 80px' }}>
          <div className="container">
            <h1>This page could not be loaded</h1>
            <p>Please try another page or reload to try again.</p>
            <Link to="/projects">View Projects</Link>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

export default function RouteErrorBoundary({ children }) {
  const location = useLocation();
  // Remount after navigation, including Back/Forward, to recover from page errors.
  return <PageErrorBoundary key={location.key}>{children}</PageErrorBoundary>;
}
