import React from 'react';
import { X, Send } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <h2>Get in Touch</h2>
        <p>Tell us about your project and we'll get back to you within 24 hours.</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="form-input" 
              placeholder="Your name" 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="your@email.com" 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="projectType">Project Type</label>
            <select id="projectType" className="form-select">
              <option value="">Select a type</option>
              <option value="architecture">Architecture</option>
              <option value="interior">Interior Design</option>
              <option value="motion">Motion Design</option>
              <option value="installation">Installation</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              className="form-textarea" 
              placeholder="Tell us about your project..."
              rows={4}
            ></textarea>
          </div>
          
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
