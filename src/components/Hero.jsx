import { motion } from 'framer-motion';
import { Code2, Apple, Send, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="avatar-wrap"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="avatar-ring outer" />
        <div className="avatar-ring middle" />
        <div className="avatar">
          {/* Замінити src на свою фотку: public/avatar.jpg */}
          <img
            src="/avatar.jpg"
            alt="lumid"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'grid';
            }}
          />
          <div className="avatar-fallback">
            <span>L</span>
          </div>
          <div className="avatar-status" title="online">
            <span className="pulse" />
          </div>
        </div>
      </motion.div>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <span className="glitch" data-text="lumid">lumid</span>
      </motion.h1>

      <motion.div
        className="role"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Code2 size={16} />
        <span>Swift &amp; Python Developer</span>
        <Apple size={16} />
      </motion.div>

      <motion.div
        className="nicks"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
      >
        <span className="nick">@lumid</span>
        <span className="dot">/</span>
        <span className="nick">@dimalq</span>
        <span className="dot">/</span>
        <span className="nick">Дмитро Роздолбаїв</span>
      </motion.div>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <a className="btn btn-primary" href="https://t.me/lumiphones_bot" target="_blank" rel="noreferrer">
          <Send size={16} />
          Telegram
        </a>
        <a className="btn btn-ghost" href="#projects">
          <Sparkles size={16} />
          Projects
        </a>
      </motion.div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        <span>scroll</span>
        <div className="line" />
      </motion.div>
    </section>
  );
}
