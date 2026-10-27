import { useEffect, useState } from 'react';
import { Star, CreditCard, Github, Send, ArrowUpRight, Code2, Package } from 'lucide-react';
import Devices from './components/Devices.jsx';
import Systems from './components/Systems.jsx';
import Rig from './components/Rig.jsx';
import Peripherals from './components/Peripherals.jsx';

const telegram = 'https://t.me/lumiphones_bot';
function AirCard() {
  const [stars, setStars] = useState(1462);
  useEffect(() => {
    const controller = new AbortController();
    fetch('https://api.github.com/repos/Lumid-Off/AirCard-Windows', { signal: controller.signal })
      .then(response => response.ok ? response.json() : null)
      .then(data => { if (Number.isInteger(data?.stargazers_count)) setStars(data.stargazers_count); })
      .catch(() => {});
    return () => controller.abort();
  }, []);
  return <a className="project-link featured-project" href="https://github.com/Lumid-Off/AirCard-Windows" target="_blank" rel="noreferrer">
    <div className="featured-top"><span>FEATURED PROJECT</span><span className="star-count" aria-label={`${stars} GitHub stars`}><Star size={13}/>{stars.toLocaleString('en-US')}</span></div>
    <div className="featured-body"><div className="project-icon"><CreditCard size={25}/></div><div><h3>AirCard <span>for Windows</span></h3><p>Wallet card skins & passcode themes for iOS.</p></div><ArrowUpRight className="project-arrow" size={20}/></div>
    <div className="featured-bottom"><span>Rust</span><span>Windows</span><span>Open source</span><Github size={15}/></div>
  </a>;
}
export default function App() {
  return (
    <main className="page" id="home">
      <header className="simple-nav"><a href="#home">lumid</a><nav aria-label="Navigation"><a href="#projects">Projects</a><a href="#devices">Setup</a><a href="https://github.com/Lumid-Off" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a></nav></header>
      <section className="profile">
        <img className="avatar" src="/avatar.jpg" alt="Lumid"/>
        <div><h1>Hey, I’m lumid<span>.</span></h1><p className="role">Swift / Python developer</p></div>
      </section>
      <p className="intro">Dmytro / @dimalq. I write code, explore tech, and collect devices. Here’s what I’m building and what I use.</p>
      <div className="profile-links"><a href="https://github.com/Lumid-Off" target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={13}/></a><a href={telegram} target="_blank" rel="noreferrer"><Send size={15}/> Telegram bot <ArrowUpRight size={13}/></a><a href="https://t.me/iOSDumps" target="_blank" rel="noreferrer"><Send size={15}/> @iOSDumps <ArrowUpRight size={13}/></a></div>
      <section id="projects" className="projects"><h2>Projects</h2><AirCard/><a className="project-link" href={telegram} target="_blank" rel="noreferrer"><div className="project-icon"><Send size={23}/></div><div><h3>lumiphones_bot</h3><p>Telegram bot · Python / aiogram</p></div><ArrowUpRight className="project-arrow" size={19}/></a><a className="project-link" href="https://repo.ya-ebal.mom" target="_blank" rel="noreferrer"><div className="project-icon"><Package size={23}/></div><div><h3>Jailbreak repository</h3><p>repo.ya-ebal.mom</p></div><ArrowUpRight className="project-arrow" size={19}/></a><a className="project-link" href="https://t.me/iOSDumps" target="_blank" rel="noreferrer"><div className="project-icon"><Send size={23}/></div><div><h3>@iOSDumps</h3><p>My Telegram channel</p></div><ArrowUpRight className="project-arrow" size={19}/></a></section>
      <section className="tool-section"><h2>Tools</h2><div className="tool-list">{['VS Code', 'Xcode', 'Android Studio'].map(tool=><span key={tool}><Code2 size={15}/>{tool}</span>)}</div></section>
      <Devices/><Systems/><Rig/><Peripherals/>
      <footer><span>© {new Date().getFullYear()} lumid</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
