import { Link } from 'react-router-dom'
import { siteMeta, navLinks, connectLinks } from '../data/siteContent'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="logo-brand">
                            <div className="logo-box">{siteMeta.logoText}</div>
                            <span>{siteMeta.brandName}</span>
                        </Link>
                        <p>
                            {siteMeta.tagline}
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-col-title">Navigation</h4>
                        <ul className="footer-links">
                            {navLinks.map((link, idx) => (
                                <li key={idx}><Link to={link.to} className="footer-link">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-col-title">Connect</h4>
                        <ul className="footer-links">
                            {connectLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="footer-link" {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>{siteMeta.copyright}</span>
                    <span>{siteMeta.copyrightTagline}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
