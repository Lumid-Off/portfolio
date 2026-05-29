import { Code, Wrench } from 'lucide-react';
import Section from './Section.jsx';

const ides = [
  { name: 'VS Code', sub: 'main editor' },
  { name: 'Xcode', sub: 'iOS / Swift' },
  { name: 'Android Studio', sub: 'mobile / kotlin' }
];

export default function Stack() {
  return (
    <Section id="stack" num="02" title="IDEs & Tools" icon={Wrench}>
      <div className="ide-grid">
        {ides.map((ide, i) => (
          <div className="ide-card" key={ide.name}>
            <div className="ide-num">0{i + 1}</div>
            <div className="ide-icon">
              <Code size={18} />
            </div>
            <div className="ide-meta">
              <h4>{ide.name}</h4>
              <span>{ide.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
