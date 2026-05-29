import { useEffect, useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const lines = [
  { user: 'lumid@kyiv', cmd: 'whoami', out: 'Дмитро / Swift & Python dev' },
  { user: 'lumid@kyiv', cmd: 'cat skills.txt', out: 'iOS, automation, telegram bots' },
  { user: 'lumid@kyiv', cmd: 'uname -a', out: 'macOS 26.3.1 · Win11 25H2 · iOS 26.4 beta' }
];

function pad(n) { return String(n).padStart(2, '0'); }

export default function Terminal() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const clock = `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="terminal-dots">
          <span /><span /><span />
        </div>
        <div className="terminal-title">
          <TerminalIcon size={12} /> lumid — bash
        </div>
        <div className="terminal-clock">{clock}</div>
      </div>
      <div className="terminal-body">
        {lines.map((l, i) => (
          <div className="terminal-line" key={i}>
            <span className="t-user">{l.user}</span>
            <span className="t-sep">~</span>
            <span className="t-prompt">$</span>
            <span className="t-cmd">{l.cmd}</span>
            <div className="t-out">{l.out}</div>
          </div>
        ))}
        <div className="terminal-line">
          <span className="t-user">lumid@kyiv</span>
          <span className="t-sep">~</span>
          <span className="t-prompt">$</span>
          <span className="t-cmd">_<span className="cursor" /></span>
        </div>
      </div>
    </div>
  );
}
