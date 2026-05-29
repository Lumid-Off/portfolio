import { Heart, Send, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://t.me/lumiphones_bot" target="_blank" rel="noreferrer">
            <Send size={14} /> telegram
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} lumid · made with <Heart size={12} /> &amp; <Coffee size={12} />
        </p>
      </div>
    </footer>
  );
}
