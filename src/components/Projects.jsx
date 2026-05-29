import { Bot, ArrowUpRight, Rocket } from 'lucide-react';
import Section from './Section.jsx';
import Spotlight from './Spotlight.jsx';

export default function Projects() {
  return (
    <Section id="projects" num="01" title="Projects" icon={Rocket}>
      <div className="card-grid">
        <Spotlight>
          <a
            href="https://t.me/lumiphones_bot"
            target="_blank"
            rel="noreferrer"
            className="card project-card"
          >
            <div className="card-icon">
              <Bot size={22} />
            </div>
            <div className="card-arrow">
              <ArrowUpRight size={18} />
            </div>
            <h3>@lumiphones_bot</h3>
            <p>Telegram bot</p>
            <div className="card-tags">
              <span>python</span>
              <span>aiogram</span>
              <span>live</span>
            </div>
          </a>
        </Spotlight>
      </div>
    </Section>
  );
}
