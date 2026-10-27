import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Smartphone, Apple, Skull, AlertTriangle, CheckCircle2, Star, ChevronDown } from 'lucide-react';
import Section from './Section.jsx';

const devices = [
  { name: 'Apple iPad (6th generation)', meta: 'tablet', status: 'ok', brand: 'apple', specs: { 'Device': 'iPad', 'Generation': '6th generation' } },
  { name: 'MacBook Pro 14″ (2021)', meta: 'A2442', status: 'ok', brand: 'apple', specs: { 'Processor': 'Apple M1 Pro', 'Memory': '16 GB', 'Storage': '512 GB', 'System': 'macOS 27.0.1', 'Model': 'A2442' } },
  {
    name: 'Apple iPhone 14 Pro',
    meta: 'main phone',
    status: 'main',
    brand: 'apple',
    specs: {
      'Display': '6.1" Super Retina XDR · 120 Hz · Dynamic Island',
      'Processor': 'Apple A16 Bionic',
      'Memory': '6 GB',
      'Storage': '128 GB',
      'Camera': '48 + 12 + 12 MP · Lidar',
      'Battery': '3200 mAh',
      'System': 'iOS 27.0 Developer Beta 4',
      'Color': 'Space Black',
    },
  },
  {
    name: 'Apple iPhone XS',
    meta: 'second phone',
    status: 'ok',
    brand: 'apple',
    specs: {
      'Display': '5.8" Super Retina OLED · 60 Hz',
      'Processor': 'Apple A12 Bionic',
      'Memory': '4 GB',
      'Storage': '256 GB',
      'Camera': '12 + 12 MP',
      'Battery': '2658 mAh',
      'System': 'iOS 18',
      'Color': 'Silver',
    },
  },
  {
    name: 'Samsung Galaxy S8',
    meta: 'third phone',
    status: 'ok',
    brand: 'samsung',
    specs: {
      'Display': '5.8" Super AMOLED · QHD+ · 60 Hz',
      'Processor': 'Exynos 8895',
      'Memory': '4 GB',
      'Storage': '64 GB',
      'Camera': '12 MP · OIS',
      'Battery': '3000 mAh',
      'System': 'Android 9 Pie',
      'Color': 'Midnight Black',
    },
  },
  {
    name: 'Samsung Galaxy A30s',
    meta: 'working',
    status: 'ok',
    brand: 'samsung',
    specs: {
      'Display': '6.4" Super AMOLED · HD+',
      'Processor': 'Exynos 7904',
      'Memory': '4 GB',
      'Storage': '64 GB',
      'Camera': '25 + 8 + 5 MP',
      'Battery': '4000 mAh',
      'System': 'Android 11',
      'Color': 'Black',
    },
  },
  {
    name: 'Samsung Galaxy S2',
    meta: 'needs a screen',
    status: 'warn',
    brand: 'samsung',
    specs: {
      'Display': '4.3" Super AMOLED Plus',
      'Processor': 'Exynos 4210',
      'Memory': '1 GB',
      'Storage': '16 GB',
      'Camera': '8 MP',
      'Battery': '1650 mAh',
      'System': 'Android 4.1.2',
      'Note': 'Damaged screen, needs replacement',
    },
  },
];

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'main': return <Star size={14} />;
    case 'ok':   return <CheckCircle2 size={14} />;
    case 'warn': return <AlertTriangle size={14} />;
    case 'dead': return <Skull size={14} />;
    default: return null;
  }
};

const BrandIcon = ({ brand }) => {
  if (brand === 'apple') return <Apple size={16} />;
  return <Smartphone size={16} />;
};

function DeviceRow({ device, index, open, onToggle }) {
  return (
    <div className={`device device-${{ main: 'main', ok: 'ok', warn: 'repair' }[device.status]} ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="device-head"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="device-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="device-brand"><BrandIcon brand={device.brand} /></span>
        <span className="device-name">{device.name}</span>
        <span className="device-meta">{device.meta}</span>
        <span className={`device-status status-${{ main: 'main', ok: 'ok', warn: 'repair' }[device.status]}`}>
          <StatusIcon status={{ main: 'main', ok: 'ok', warn: 'repair' }[device.status]} />
          {{ main: 'main', ok: 'ok', warn: 'repair' }[device.status]}
        </span>
        <span className="device-chev" aria-hidden>
          <ChevronDown size={14} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="device-specs"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="device-specs-inner">
              {Object.entries(device.specs).map(([k, v]) => (
                <div className="spec-row" key={k}>
                  <span className="spec-row-key">{k}</span>
                  <span className="spec-row-val">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Devices() {
  const [openIndex, setOpenIndex] = useState(null);

  const ok   = devices.filter(d => d.status === 'ok' || d.status === 'main').length;
  const warn = devices.filter(d => d.status === 'warn').length;

  return (
    <Section id="devices" num="04" title="Devices" icon={Smartphone}>
      <div className="device-stats">
        <div className="stat"><span className="stat-num">{devices.length}</span><span className="stat-key">total</span></div>
        <div className="stat"><span className="stat-num">{ok}</span><span className="stat-key">working</span></div>
        <div className="stat"><span className="stat-num">{warn}</span><span className="stat-key">need repair</span></div>
      </div>

      <div className="device-list">
        {devices.map((d, i) => (
          <DeviceRow
            key={d.name}
            device={d}
            index={i}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </Section>
  );
}
