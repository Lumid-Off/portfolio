import { Smartphone, Monitor, Apple, Cpu } from 'lucide-react';
import Section from './Section.jsx';
const systems = [
  { label: 'Phone', title: 'iOS 27.0', note: 'Developer Beta 4', icon: Smartphone },
  { label: 'Desktop', title: 'Windows 11', note: '+ macOS Sequoia', icon: Monitor },
  { label: 'MacBook Pro', title: 'macOS 27.0.1', note: '14″ · 2021 · A2442', icon: Apple }
];
export default function Systems() {
  return <Section id="systems" num="03" title="Systems" icon={Cpu}><div className="card-grid">{systems.map(({label,title,note,icon:Icon})=><div className="card os-card" key={label}><div className="card-icon"><Icon size={18}/></div><div className="card-label">{label}</div><h3>{title}</h3><p>{note}</p></div>)}</div></Section>;
}
