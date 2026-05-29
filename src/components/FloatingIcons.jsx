import { Code, Apple, Cpu, Terminal, Smartphone, Hash, Bot, Music, Zap, Wifi } from 'lucide-react';

const icons = [
  { I: Code,       top: '12%', left: '6%',  size: 28, dur: '14s' },
  { I: Apple,      top: '22%', left: '88%', size: 32, dur: '18s' },
  { I: Cpu,        top: '55%', left: '4%',  size: 26, dur: '16s' },
  { I: Terminal,   top: '70%', left: '92%', size: 30, dur: '20s' },
  { I: Smartphone, top: '85%', left: '10%', size: 24, dur: '15s' },
  { I: Hash,       top: '40%', left: '94%', size: 22, dur: '12s' },
  { I: Bot,        top: '8%',  left: '50%', size: 26, dur: '22s' },
  { I: Zap,        top: '92%', left: '60%', size: 24, dur: '17s' },
  { I: Music,      top: '32%', left: '2%',  size: 22, dur: '13s' },
  { I: Wifi,       top: '60%', left: '50%', size: 22, dur: '19s' }
];

export default function FloatingIcons() {
  return (
    <div className="float-icons" aria-hidden="true">
      {icons.map((it, i) => {
        const I = it.I;
        return (
          <span
            key={i}
            className="float-icon"
            style={{
              top: it.top,
              left: it.left,
              animationDuration: it.dur,
              animationDelay: `${(i % 5) * 0.6}s`
            }}
          >
            <I size={it.size} strokeWidth={1.2} />
          </span>
        );
      })}
    </div>
  );
}
