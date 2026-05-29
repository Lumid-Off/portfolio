import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Smartphone, Apple, Skull, AlertTriangle, CheckCircle2, Star, ChevronDown } from 'lucide-react';
import Section from './Section.jsx';

const devices = [
  {
    name: 'Apple iPhone 14 Pro',
    meta: 'main phone',
    status: 'main',
    brand: 'apple',
    specs: {
      Display: '6.1" Super Retina XDR · 120 Hz · Dynamic Island',
      Chip: 'Apple A16 Bionic',
      RAM: '6 GB',
      Storage: '128 GB',
      Camera: '48 + 12 + 12 MP · Lidar',
      Battery: '3200 mAh',
      OS: 'iOS 26.4 beta',
      Color: 'Space Black',
    },
  },
  {
    name: 'Apple iPhone XS',
    meta: 'second phone',
    status: 'ok',
    brand: 'apple',
    specs: {
      Display: '5.8" Super Retina OLED · 60 Hz',
      Chip: 'Apple A12 Bionic',
      RAM: '4 GB',
      Storage: '256 GB',
      Camera: '12 + 12 MP',
      Battery: '2658 mAh',
      OS: 'iOS 18',
      Color: 'Silver',
    },
  },
  {
    name: 'Samsung Galaxy S8',
    meta: 'third phone',
    status: 'ok',
    brand: 'samsung',
    specs: {
      Display: '5.8" Super AMOLED · QHD+ · 60 Hz',
      Chip: 'Exynos 8895',
      RAM: '4 GB',
      Storage: '64 GB',
      Camera: '12 MP · OIS',
      Battery: '3000 mAh',
      OS: 'Android 9 Pie',
      Color: 'Midnight Black',
    },
  },
  {
    name: 'Apple iPhone SE 2016',
    meta: '50/50 working',
    status: 'warn',
    brand: 'apple',
    specs: {
      Display: '4.0" Retina · 60 Hz',
      Chip: 'Apple A9',
      RAM: '2 GB',
      Storage: '32 GB',
      Camera: '12 MP',
      Battery: '1624 mAh',
      OS: 'iOS 15',
      Note: 'battery + frame issues',
    },
  },
  {
    name: 'Apple iPhone 5',
    meta: 'iCloud, bypassed',
    status: 'ok',
    brand: 'apple',
    specs: {
      Display: '4.0" Retina · 60 Hz',
      Chip: 'Apple A6',
      RAM: '1 GB',
      Storage: '16 GB',
      Camera: '8 MP',
      Battery: '1440 mAh',
      OS: 'iOS 10 (bypass)',
      Note: 'iCloud lock bypassed',
    },
  },
  {
    name: 'Google Pixel 4 XL',
    meta: 'died UFS',
    status: 'dead',
    brand: 'google',
    specs: {
      Display: '6.3" P-OLED · 90 Hz',
      Chip: 'Snapdragon 855',
      RAM: '6 GB',
      Storage: '64 GB',
      Camera: '12.2 + 16 MP · Soli',
      Battery: '3700 mAh',
      OS: 'Android 13',
      Note: 'UFS storage failure',
    },
  },
  {
    name: 'Xiaomi Redmi Note 9',
    meta: 'full died lmao',
    status: 'dead',
    brand: 'xiaomi',
    specs: {
      Display: '6.53" IPS · FHD+ · 60 Hz',
      Chip: 'MediaTek Helio G85',
      RAM: '4 GB',
      Storage: '64 GB',
      Camera: '48 + 8 + 2 + 2 MP',
      Battery: '5020 mAh',
      OS: 'MIUI 12',
      Note: 'fully bricked',
    },
  },
  {
    name: 'Samsung Galaxy A30s',
    meta: 'full working',
    status: 'ok',
    brand: 'samsung',
    specs: {
      Display: '6.4" Super AMOLED · HD+',
      Chip: 'Exynos 7904',
      RAM: '4 GB',
      Storage: '64 GB',
      Camera: '25 + 8 + 5 MP',
      Battery: '4000 mAh',
      OS: 'Android 11',
      Color: 'Prism Crush Black',
    },
  },
  {
    name: 'Samsung Galaxy S2',
    meta: 'need display',
    status: 'warn',
    brand: 'samsung',
    specs: {
      Display: '4.3" Super AMOLED Plus',
      Chip: 'Exynos 4210',
      RAM: '1 GB',
      Storage: '16 GB',
      Camera: '8 MP',
      Battery: '1650 mAh',
      OS: 'Android 4.1.2',
      Note: 'display cracked, needs replacement',
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
    <div className={`device device-${device.status} ${open ? 'open' : ''}`}>
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
        <span className={`device-status status-${device.status}`}>
          <StatusIcon status={device.status} />
          {device.status}
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
  const dead = devices.filter(d => d.status === 'dead').length;

  return (
    <Section id="devices" num="04" title="Devices Collection" icon={Smartphone}>
      <div className="device-stats">
        <div className="stat"><span className="stat-num">{devices.length}</span><span className="stat-key">total</span></div>
        <div className="stat"><span className="stat-num">{ok}</span><span className="stat-key">working</span></div>
        <div className="stat"><span className="stat-num">{warn}</span><span className="stat-key">issues</span></div>
        <div className="stat"><span className="stat-num">{dead}</span><span className="stat-key">dead</span></div>
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
