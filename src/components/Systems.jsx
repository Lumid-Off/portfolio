import { Smartphone, Monitor, Apple, Cpu } from 'lucide-react';
import Section from './Section.jsx';

export default function Systems() {
  return (
    <Section id="systems" num="03" title="Operating Systems" icon={Cpu}>
      <div className="card-grid">
        <div className="card os-card">
          <div className="card-icon">
            <Smartphone size={22} />
          </div>
          <div className="card-label">phone</div>
          <h3>iOS 26.4</h3>
          <p>Beta 2</p>
          <div className="os-bar">
            <div style={{ width: '88%' }} />
          </div>
        </div>

        <div className="card os-card">
          <div className="card-icon">
            <Monitor size={22} />
          </div>
          <div className="card-label">pc</div>
          <h3>Windows 11</h3>
          <p>25H2</p>
          <div className="os-bar">
            <div style={{ width: '95%' }} />
          </div>
        </div>

        <div className="card os-card">
          <div className="card-icon">
            <Apple size={22} />
          </div>
          <div className="card-label">mac</div>
          <h3>macOS 26.3.1</h3>
          <p>secondary</p>
          <div className="os-bar">
            <div style={{ width: '70%' }} />
          </div>
        </div>
      </div>
    </Section>
  );
}
