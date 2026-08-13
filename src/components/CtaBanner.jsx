import { Send } from 'lucide-react'
import { ctaBanner } from '../data/siteContent'

const CtaBanner = ({ onContactClick }) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <p className="cta-label">{ctaBanner.label}</p>
          <button className="btn-primary" onClick={onContactClick}>
            {ctaBanner.buttonText}
            <Send size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
