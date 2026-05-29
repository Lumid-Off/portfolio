import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Stack from './components/Stack.jsx';
import Systems from './components/Systems.jsx';
import Devices from './components/Devices.jsx';
import Rig from './components/Rig.jsx';
import Peripherals from './components/Peripherals.jsx';
import Footer from './components/Footer.jsx';
import Background from './components/Background.jsx';
import FloatingIcons from './components/FloatingIcons.jsx';

export default function App() {
  return (
    <>
      <Background />
      <FloatingIcons />
      <main className="container">
        <Hero />
        <Projects />
        <Stack />
        <Systems />
        <Devices />
        <Rig />
        <Peripherals />
        <Footer />
      </main>
    </>
  );
}
