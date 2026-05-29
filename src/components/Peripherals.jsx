import { Mouse, Keyboard, Monitor, Mic, Headphones, Bluetooth, Gamepad2 } from 'lucide-react';
import Section from './Section.jsx';

const items = [
  { key: 'Mouse', val: 'Attack Shark X3 Pro', icon: Mouse },
  { key: 'Keyboard', val: 'Ajazz AK820', icon: Keyboard },
  { key: 'Monitor (main)', val: 'Samsung Odyssey G5', icon: Monitor },
  { key: 'Side monitors', val: '2× Samsung C27F390', icon: Monitor },
  { key: 'Microphone', val: 'Fifine A6V', icon: Mic },
  { key: 'Headphones', val: 'JBL Wave Beam & Wave Beam 2', icon: Headphones },
  { key: 'BT Dongle', val: 'CSR 8510 A10', icon: Bluetooth }
];

export default function Peripherals() {
  return (
    <Section id="peripherals" num="06" title="Peripherals" icon={Gamepad2}>
      <div className="spec-grid">
        {items.map((s) => {
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
