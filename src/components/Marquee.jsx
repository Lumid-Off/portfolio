const items = [
  'Swift',
  '★',
  'Python',
  '★',
  'iOS',
  '★',
  'Telegram bots',
  '★',
  'Xcode',
  '★',
  'VS Code',
  '★',
  'Android Studio',
  '★',
  'macOS',
  '★',
  'Windows 11',
  '★',
  'lumid',
  '★',
  'dimalq',
  '★'
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className={t === '★' ? 'marquee-dot' : 'marquee-item'}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
