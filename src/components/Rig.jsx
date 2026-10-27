import { Cpu, CircuitBoard, Microchip, MemoryStick, Plug, HardDrive, Database, Server } from 'lucide-react';
import Section from './Section.jsx';

const specs = [
  { key: 'Processor', val: 'AMD Ryzen 5 3600 @ 4.7GHz', icon: Cpu },
  { key: 'Motherboard', val: 'Asus TUF B450-Pro Gaming', icon: CircuitBoard },
  { key: 'Graphics', val: 'AMD Radeon RX 5700 XT (XFX)', icon: Microchip },
  { key: 'Memory', val: '32 GB DDR4 — Kingston Fury RGB 16×2', icon: MemoryStick },
  { key: 'Power supply', val: 'Corsair HX750', icon: Plug },
  { key: 'SSD', val: '2× Kingston A400 — 240 + 480 GB', icon: HardDrive },
  { key: 'HDD', val: 'Seagate 3 TB · 7200 RPM', icon: Database }
];

export default function Rig() {
  return (
    <Section id="rig" num="05" title="Desktop" icon={Server}>
      <div className="spec-grid">
        {specs.map((s) => {
          const Icon = s.icon;
          return (
            <div className="spec-card" key={s.key}>
              <div className="spec-icon"><Icon size={18} /></div>
              <div className="spec-key">{s.key}</div>
              <div className="spec-val">{s.val}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
