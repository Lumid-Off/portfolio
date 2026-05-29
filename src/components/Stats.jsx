import { useEffect, useRef, useState } from 'react';
import { Smartphone, Code2, Cpu, Coffee } from 'lucide-react';

const stats = [
  { num: 9,    suffix: '',  label: 'devices',   icon: Smartphone },
  { num: 5,    suffix: '+', label: 'years coding', icon: Code2 },
  { num: 3,    suffix: '',  label: 'main OS',   icon: Cpu },
  { num: 999,  suffix: '+', label: 'cups',      icon: Coffee }
];

function Counter({ to, suffix }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1400;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{v}{suffix}</span>;
}

export default function Stats() {
  return (
    <div className="stats-strip">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div className="stats-cell" key={s.label}>
            <div className="stats-icon"><Icon size={18} /></div>
            <div className="stats-num"><Counter to={s.num} suffix={s.suffix} /></div>
            <div className="stats-label">{s.label}</div>
          </div>
        );
      })}
    </div>
  );
}
