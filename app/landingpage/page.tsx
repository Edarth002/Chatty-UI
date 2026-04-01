'use client';

import { useState, useEffect, JSX } from 'react';

/* ─────────────────────────── DATA ─────────────────────────── */

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Business', href: '#business' },
  { label: 'Help', href: '#help' },
  { label: 'Blog', href: '#blog' },
];

const CORE_FEATURES = [
  {
    tag: 'MESSAGING',
    headline: 'Say it your way',
    body: 'Send texts, voice messages, photos, videos, documents, and your location with the people who matter most.',
    sub: 'Messages are end-to-end encrypted — only you and the recipient can read them.',
    visual: 'messages',
  },
  {
    tag: 'CALLS',
    headline: 'Call for free, worldwide',
    body: 'Make crystal-clear voice and video calls to friends and family, even in low-bandwidth conditions.',
    sub: 'Group calls support up to 32 people at once — no extra apps, no extra costs.',
    visual: 'calls',
  },
  {
    tag: 'STATUS',
    headline: 'Share moments that matter',
    body: 'Share photos, videos, and updates that disappear after 24 hours — just like real life moments.',
    sub: 'Status updates are end-to-end encrypted and visible only to your contacts.',
    visual: 'status',
  },
  {
    tag: 'COMMUNITIES',
    headline: 'Bring everyone together',
    body: 'Communities connect multiple groups under one umbrella — perfect for schools, local clubs, or workplaces.',
    sub: 'Groups support up to 1,024 members each.',
    visual: 'communities',
  },
  {
    tag: 'CHANNELS',
    headline: 'Follow what matters',
    body: 'Receive updates from organisations, sports teams, artists, and thinkers that matter to you.',
    sub: 'One-way broadcasts — only admins can post, and your number stays private.',
    visual: 'channels',
  },
];

const PRIVACY_FEATURES = [
  { title: 'End-to-end encryption', desc: 'Your personal messages and calls are protected by end-to-end encryption. Not even Chatty can read or listen to them.' },
  { title: 'Disappearing messages', desc: 'Set messages to automatically disappear after a set time. Once they\'re gone, they\'re gone.' },
  { title: 'Chat lock', desc: 'Move sensitive conversations into a locked folder accessible only with your fingerprint or face ID.' },
  { title: 'Silence unknown callers', desc: 'Screen out spam and unknown contacts from calling you, so you focus on what really matters.' },
  { title: 'Privacy checkup', desc: 'Control who sees your profile photo, last seen, and status updates with fine-grained settings.' },
  { title: 'Encrypted cloud backup', desc: 'Enable end-to-end encrypted backups on iCloud or Google Drive so only you can access your history.' },
];

const TESTIMONIALS = [
  { name: 'Amara O.', role: 'Lagos, Nigeria', quote: 'Chatty keeps our family close across three continents. The voice notes feel like being in the same room.' },
  { name: 'Priya S.', role: 'Mumbai, India', quote: 'My whole business runs through Chatty. Customers message me, I send invoices — everything.' },
  { name: 'Carlos M.', role: 'São Paulo, Brazil', quote: 'Group calls with the whole family every Sunday. Grandma in Portugal, cousins in Canada, all together.' },
  { name: 'Mei L.', role: 'Singapore', quote: 'The encryption gives me peace of mind. I know my personal conversations are truly private.' },
];


const STATS = [
  { value: '2B+', label: 'Monthly active users' },
  { value: '100B+', label: 'Messages sent daily' },
  { value: '180+', label: 'Countries and territories' },
  { value: '60B', label: 'Photos shared every day' },
];

const FAQS = [
  { q: 'Is Chatty really free?', a: 'Yes — Chatty is free to download and use. There are no subscription fees or messaging costs. Standard data charges from your carrier may apply.' },
  { q: 'How does end-to-end encryption work?', a: 'Every message and call is secured with a lock, and only you and the person you\'re communicating with have the special key. Not even Chatty can access them.' },
  { q: 'Can I use Chatty on multiple devices?', a: 'Yes. With multi-device support, you can use Chatty on up to 4 linked devices simultaneously — phone, tablet, desktop, and web browser.' },
  { q: 'What is Chatty Business?', a: 'Chatty Business is a free app designed for small business owners. It lets you create a business profile, set up quick replies, and use a catalogue to show products.' },
  { q: 'Are my backups encrypted?', a: 'Chatty messages are end-to-end encrypted by default. You can also enable end-to-end encrypted cloud backups so your history is protected too.' },
];

/* ─────────────────────────── PHONE MOCKUPS ─────────────────────────── */

function MessagesPhone() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s < 3 ? s + 1 : 0)), 2000);
    return () => clearInterval(t);
  }, []);
  const msgs = [
    { from: 'them', text: 'Hey! Still on for dinner tonight? 🍝' },
    { from: 'me', text: 'Absolutely! 7:30 works?' },
    { from: 'them', text: 'Perfect 👌 See you there' },
    { from: 'me', text: 'Can\'t wait! 😄' },
  ];
  return (
    <div style={{ width: 260, borderRadius: 28, overflow: 'hidden', background: '#111', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 6px' }}><div style={{ width: 72, height: 5, borderRadius: 99, background: 'rgba(255,255,255,0.15)' }} /></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🌙</div>
        <div>
          <div style={{ color: 'white', fontSize: 13, fontWeight: 600 }}>Yasmin</div>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10 }}>online</div>
        </div>
      </div>
      <div style={{ padding: '14px 12px', minHeight: 200, display: 'flex', flexDirection: 'column', gap: 8, background: 'rgba(255,255,255,0.02)' }}>
        {msgs.slice(0, step + 1).map((m, i) => (
          <div key={i} style={{
            alignSelf: m.from === 'me' ? 'flex-end' : 'flex-start',
            maxWidth: '78%', padding: '8px 12px', borderRadius: m.from === 'me' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
            background: m.from === 'me' ? 'white' : 'rgba(255,255,255,0.09)',
            border: m.from !== 'me' ? '1px solid rgba(255,255,255,0.08)' : 'none',
            color: m.from === 'me' ? 'black' : 'white', fontSize: 12, lineHeight: 1.4,
          }}>{m.text}</div>
        ))}
        {step >= 3 && (
          <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 4, padding: '8px 14px', borderRadius: '16px 16px 16px 4px', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {[0, 0.2, 0.4].map((d, i) => <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.4)', display: 'inline-block', animation: `dot 1.2s ease-in-out ${d}s infinite` }} />)}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ flex: 1, borderRadius: 99, padding: '8px 14px', fontSize: 11, color: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>Message</div>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 20 20" fill="black" style={{ width: 14, height: 14 }}><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
        </div>
      </div>
    </div>
  );
}

function CallPhone() {
  const [secs, setSecs] = useState(0);
  useEffect(() => { const t = setInterval(() => setSecs(s => s + 1), 1000); return () => clearInterval(t); }, []);
  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  return (
    <div style={{ width: 260, borderRadius: 28, overflow: 'hidden', background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 6px' }}><div style={{ width: 72, height: 5, borderRadius: 99, background: 'rgba(255,255,255,0.15)' }} /></div>
      <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38 }}>👨‍💼</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: 'white', fontWeight: 600, fontSize: 16 }}>Marcus</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 2 }}>Chatty Voice Call</div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontFamily: 'monospace', marginTop: 6 }}>{fmt(secs)}</div>
        </div>
        <div style={{ display: 'flex', gap: 20, marginTop: 8 }}>
          {[{ e: '🔇', l: 'Mute' }, { e: '📢', l: 'Speaker' }, { e: '⌨️', l: 'Keypad' }].map(b => (
            <div key={b.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{b.e}</div>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>{b.l}</span>
            </div>
          ))}
        </div>
        <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(239,68,68,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
          <svg viewBox="0 0 24 24" fill="white" style={{ width: 26, height: 26 }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
        </div>
      </div>
    </div>
  );
}

function StatusPhone() {
  const [active, setActive] = useState(0);
  const stories = ['🌅', '🎵', '📸', '🌿'];
  useEffect(() => { const t = setInterval(() => setActive(a => (a + 1) % 4), 2200); return () => clearInterval(t); }, []);
  return (
    <div style={{ width: 260, borderRadius: 28, overflow: 'hidden', background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 6px' }}><div style={{ width: 72, height: 5, borderRadius: 99, background: 'rgba(255,255,255,0.15)' }} /></div>
      <div style={{ padding: '8px 14px 6px', color: 'rgba(255,255,255,0.4)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Status</div>
      <div style={{ margin: '0 10px', borderRadius: 16, overflow: 'hidden', position: 'relative', height: 180, background: 'rgba(255,255,255,0.05)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', gap: 4, padding: 8 }}>
          {stories.map((_, i) => (
            <div key={i} style={{ flex: 1, height: 3, borderRadius: 99, overflow: 'hidden', background: 'rgba(255,255,255,0.2)' }}>
              {i === active && <div style={{ height: '100%', background: 'white', animation: `progress 2.2s linear`, width: '100%' }} />}
              {i < active && <div style={{ height: '100%', background: 'white', width: '100%' }} />}
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64 }}>{stories[active]}</div>
      </div>
      <div style={{ padding: '10px 12px' }}>
        {['Kofi', 'Amara', 'Lucas'].map((n, i) => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', outline: '2px solid rgba(255,255,255,0.5)', outlineOffset: 2, background: 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
              {['☀️', '🎶', '🌊'][i]}
            </div>
            <div>
              <div style={{ color: 'white', fontSize: 13, fontWeight: 500 }}>{n}</div>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>{['1h ago', '3h ago', '5h ago'][i]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommunitiesPhone() {
  return (
    <div style={{ width: 260, borderRadius: 28, overflow: 'hidden', background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 6px' }}><div style={{ width: 72, height: 5, borderRadius: 99, background: 'rgba(255,255,255,0.15)' }} /></div>
      <div style={{ padding: '10px 16px 8px', color: 'white', fontWeight: 600, fontSize: 15 }}>Communities</div>
      {[
        { e: '🏫', n: 'Lagos Tech Hub', m: '847 members · 6 groups' },
        { e: '🏋️', n: 'Morning Runners', m: '234 members · 3 groups' },
        { e: '🍕', n: 'Food Lovers NG', m: '1,203 members · 8 groups' },
      ].map((c, i) => (
        <div key={c.n} style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{c.e}</div>
          <div style={{ flex: 1 }}>
            <div style={{ color: 'white', fontSize: 13, fontWeight: 500 }}>{c.n}</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11 }}>{c.m}</div>
          </div>
          <svg viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={2} style={{ width: 14, height: 14 }}><path strokeLinecap="round" d="M7 5l5 5-5 5" /></svg>
        </div>
      ))}
      <div style={{ padding: '10px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.14)', color: 'white', fontSize: 13, fontWeight: 500 }}>
          + New community
        </div>
      </div>
    </div>
  );
}

function ChannelsPhone() {
  return (
    <div style={{ width: 260, borderRadius: 28, overflow: 'hidden', background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 6px' }}><div style={{ width: 72, height: 5, borderRadius: 99, background: 'rgba(255,255,255,0.15)' }} /></div>
      <div style={{ padding: '10px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: 'white', fontWeight: 600, fontSize: 15 }}>Channels</span>
        <svg viewBox="0 0 20 20" fill="rgba(255,255,255,0.3)" style={{ width: 16, height: 16 }}><path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" /><path fillRule="evenodd" d="M10 3a7 7 0 100 14A7 7 0 0010 3zm-9 7a9 9 0 1118 0A9 9 0 011 10z" clipRule="evenodd" /></svg>
      </div>
      {[
        { e: '📰', n: 'BBC News', f: '4.2M', v: true },
        { e: '⚽', n: 'UEFA Champions', f: '8.1M', v: true },
        { e: '🎨', n: 'Design Weekly', f: '220K', v: false },
        { e: '💹', n: 'Market Watch', f: '1.3M', v: false },
      ].map((c) => (
        <div key={c.n} style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{c.e}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ color: 'white', fontSize: 13, fontWeight: 500 }}>{c.n}</span>
              {c.v && <div style={{ width: 13, height: 13, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg viewBox="0 0 10 10" fill="black" style={{ width: 8, height: 8 }}><path d="M2 5l2 2 4-4" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg></div>}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>{c.f} followers</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const PHONE_VISUALS: Record<string, JSX.Element> = {
  messages: <MessagesPhone />,
  calls: <CallPhone />,
  status: <StatusPhone />,
  communities: <CommunitiesPhone />,
  channels: <ChannelsPhone />,
};

/* ─────────────────────────── MAIN COMPONENT ─────────────────────────── */

export default function ChattyLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveFeature(p => (p + 1) % CORE_FEATURES.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: '#0a0a0a', color: 'white', minHeight: '100vh', fontFamily: "'Figtree','DM Sans',system-ui,sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{background:#0a0a0a;}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.12);border-radius:99px;}

        @keyframes fadeUp{from{opacity:0;transform:translateY(26px);}to{opacity:1;transform:translateY(0);}}
        @keyframes dot{0%,100%{opacity:.3;transform:scale(.8);}50%{opacity:1;transform:scale(1.2);}}
        @keyframes progress{from{width:0;}to{width:100%;}}
        @keyframes ticker{from{transform:translateX(0);}to{transform:translateX(-50%);}}
        @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-14px);}}
        @keyframes floatB{0%,100%{transform:translateY(0);}50%{transform:translateY(-9px);}}
        @keyframes ringPulse{0%,100%{opacity:.5;transform:scale(1);}50%{opacity:1;transform:scale(1.06);}}
        @keyframes shimmer{from{background-position:-200% 0;}to{background-position:200% 0;}}

        .fu{animation:fadeUp .85s cubic-bezier(.16,1,.3,1) both;}
        .d1{animation-delay:.1s;}.d2{animation-delay:.22s;}.d3{animation-delay:.34s;}.d4{animation-delay:.48s;}.d5{animation-delay:.6s;}
        .float-a{animation:float 6s ease-in-out infinite;}
        .float-b{animation:floatB 4.5s ease-in-out .8s infinite;}

        .nav-a{font-size:14px;color:rgba(255,255,255,.5);text-decoration:none;transition:color .18s;position:relative;}
        .nav-a::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:white;transition:width .22s;}
        .nav-a:hover{color:white;}.nav-a:hover::after{width:100%;}

        .ticker-track{display:flex;width:max-content;animation:ticker 38s linear infinite;}
        .ticker-track:hover{animation-play-state:paused;}

        .feat-tab{cursor:pointer;transition:all .22s ease;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:16px 18px;display:flex;align-items:flex-start;gap:12px;background:transparent;text-align:left;width:100%;color:white;font-family:inherit;}
        .feat-tab.on{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.18);}
        .feat-tab:hover:not(.on){background:rgba(255,255,255,.03);}

        .faq-a{font-size:14px;color:rgba(255,255,255,.5);line-height:1.7;max-height:0;overflow:hidden;transition:max-height .35s ease,padding .35s ease;}
        .faq-a.open{max-height:200px;padding-bottom:20px;}

        .card{transition:transform .25s ease,border-color .25s ease;}
        .card:hover{transform:translateY(-3px);}

        .shimmer-t{background:linear-gradient(90deg,rgba(255,255,255,.35) 0%,white 40%,rgba(255,255,255,.35) 80%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shimmer 3s linear infinite;}

        .section-max{max-width:1200px;margin:0 auto;padding:0 24px;}
        @media(min-width:1024px){.section-max{padding:0 48px;}}

        .section-label{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:14px;}
        .big-h{font-size:clamp(2.2rem,4.8vw,4rem);font-weight:800;line-height:1.06;letter-spacing:-.025em;}
        .med-h{font-size:clamp(1.6rem,3.2vw,2.6rem);font-weight:700;line-height:1.1;letter-spacing:-.02em;}

        .btn-white{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;border-radius:99px;font-size:15px;font-weight:600;text-decoration:none;transition:all .2s;background:white;color:black;border:none;cursor:pointer;font-family:inherit;}
        .btn-white:hover{background:rgba(255,255,255,.88);transform:translateY(-1px);}
        .btn-ghost{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;border-radius:99px;font-size:15px;font-weight:600;text-decoration:none;transition:all .2s;background:transparent;color:white;border:1.5px solid rgba(255,255,255,.2);cursor:pointer;font-family:inherit;}
        .btn-ghost:hover{border-color:rgba(255,255,255,.45);transform:translateY(-1px);}

        .pill-tag{display:inline-flex;align-items:center;gap:6px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.35);border:1px solid rgba(255,255,255,.09);border-radius:99px;padding:5px 14px;}

        .orb{position:absolute;border-radius:50%;filter:blur(110px);pointer-events:none;}

        hr.dim{border:none;border-top:1px solid rgba(255,255,255,.07);}
      `}</style>

      {/* ═══════════════════════ NAVBAR ═══════════════════════ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(10,10,10,.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(22px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,.07)' : '1px solid transparent',
        transition: 'all .3s ease',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="black" style={{ width: 17, height: 17 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span style={{ color: 'white', fontWeight: 600, fontSize: 15 }}>Chatty</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hide-mobile">
            {NAV_LINKS.map(l => <a key={l.label} href={l.href} className="nav-a">{l.label}</a>)}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="/auth/login" className="nav-a" style={{ display: 'none' }}>Log in</a>
            <a href="/auth/register" className="btn-white" style={{ padding: '9px 20px', fontSize: 14 }}>Get Started</a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section style={{ paddingTop: 100, paddingBottom: 80, position: 'relative', overflow: 'hidden' }} id="features">
        <div className="orb" style={{ width: 600, height: 600, background: 'rgba(255,255,255,0.04)', top: -150, right: -200 }} />
        <div className="orb" style={{ width: 350, height: 350, background: 'rgba(255,255,255,0.025)', bottom: -50, left: -100 }} />
        <div className="section-max" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            {/* Left */}
            <div>
              <div className="pill-tag fu mb-5">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.5)', display: 'inline-block', animation: 'dot 2s ease-in-out infinite' }} />
                Simple · Reliable · Private
              </div>
              <h1 className="fu d1 big-h" style={{ fontSize: 'clamp(3rem,6vw,5.5rem)', marginBottom: 24 }}>
                Messaging<br />that feels<br /><span className="shimmer-t">truly private.</span>
              </h1>
              <p className="fu d2" style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,.55)', maxWidth: 440, marginBottom: 36 }}>
                Chatty is free and offers simple, secure, reliable messaging and calling — available on phones all over the world.
              </p>
              <div className="fu d3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
                <a href="#" className="btn-white">Get Chatty</a>
                <a href="#" className="btn-ghost">Chatty Web ↗</a>
              </div>
              <div className="fu d4" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['End-to-end encrypted by default', 'Free voice & video calls worldwide', 'Works across all your devices', 'Trusted by over 2 billion people'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,.5)' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth={1.8} style={{ width: 10, height: 10 }}><path strokeLinecap="round" strokeLinejoin="round" d="M2 6l2.5 2.5L10 3" /></svg>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            {/* Right — floating phone */}
            <div className="fu d3" style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
              <div className="float-a" style={{ position: 'relative' }}>
                <MessagesPhone />
                {/* floating badge bottom-left */}
                <div className="float-b" style={{ position: 'absolute', bottom: -20, left: -44, padding: '12px 16px', borderRadius: 16, background: '#1a1a1a', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(12px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg viewBox="0 0 24 24" fill="black" style={{ width: 16, height: 16 }}><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                    </div>
                    <div>
                      <div style={{ color: 'white', fontSize: 12, fontWeight: 600 }}>2B+ users</div>
                      <div style={{ color: 'rgba(255,255,255,.35)', fontSize: 10 }}>worldwide</div>
                    </div>
                  </div>
                </div>
                {/* E2E badge top-right */}
                <div style={{ position: 'absolute', top: -12, right: -52, padding: '8px 14px', borderRadius: 12, background: '#1a1a1a', border: '1px solid rgba(255,255,255,.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'rgba(255,255,255,.5)' }}>
                    <svg viewBox="0 0 20 20" fill="white" style={{ width: 12, height: 12 }}><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
                    End-to-end encrypted
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TICKER ═══════════════════════ */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.07)', borderBottom: '1px solid rgba(255,255,255,.07)', padding: '14px 0' }}>
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 40, padding: '0 20px' }}>
              {['100B+ messages daily','Free voice calls','Free video calls','Works in 180+ countries','Multi-device support','End-to-end encrypted','No ads in personal chats','Groups up to 1,024','Channels & broadcasts','Disappearing messages','Chat lock & privacy','Free forever'].map((item, j) => (
                <span key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,.3)', whiteSpace: 'nowrap' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,.2)', display: 'inline-block', flexShrink: 0 }} />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════ STATS ═══════════════════════ */}
      <section style={{ padding: '80px 0' }}>
        <div className="section-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)' }}>
            {STATS.map(({ value, label }, i) => (
              <div key={value} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '48px 20px', textAlign: 'center',
                background: i % 2 === 0 ? 'rgba(255,255,255,.03)' : 'transparent',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,.08)' : 'none',
              }}>
                <span style={{ fontSize: 'clamp(2.4rem,4.5vw,3.6rem)', fontWeight: 900, letterSpacing: '-.03em', lineHeight: 1 }}>{value}</span>
                <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.3)', marginTop: 8 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CORE FEATURES ═══════════════════════ */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,.07)' }} id="features">
        <div className="section-max">
          <div style={{ marginBottom: 52 }}>
            <div className="section-label">Everything you need</div>
            <h2 className="big-h" style={{ maxWidth: 520 }}>Built for every kind of conversation</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 20, alignItems: 'start' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {CORE_FEATURES.map((f, i) => (
                <button key={i} onClick={() => setActiveFeature(i)} className={`feat-tab${activeFeature === i ? ' on' : ''}`}>
                  <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', fontWeight: 600, marginBottom: 4, marginTop: 2, flexShrink: 0 }}>{f.tag}</div>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>{f.headline}</div>
                </button>
              ))}
            </div>
            {/* Detail panel */}
            <div style={{ borderRadius: 24, background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', padding: 36, display: 'flex', gap: 32, alignItems: 'center', minHeight: 460 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 12 }}>{CORE_FEATURES[activeFeature].tag}</div>
                <h3 className="med-h" style={{ marginBottom: 16 }}>{CORE_FEATURES[activeFeature].headline}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,.55)', marginBottom: 12 }}>{CORE_FEATURES[activeFeature].body}</p>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,.3)' }}>{CORE_FEATURES[activeFeature].sub}</p>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 24, fontSize: 14, color: 'white', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,.3)', paddingBottom: 2 }}>
                  Learn more <svg viewBox="0 0 16 16" fill="currentColor" style={{ width: 12, height: 12 }}><path fillRule="evenodd" d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" clipRule="evenodd" /></svg>
                </a>
                {/* dots */}
                <div style={{ display: 'flex', gap: 6, marginTop: 32 }}>
                  {CORE_FEATURES.map((_, i) => (
                    <button key={i} onClick={() => setActiveFeature(i)} style={{ height: 4, borderRadius: 99, border: 'none', cursor: 'pointer', transition: 'all .45s', width: i === activeFeature ? 28 : 8, background: i === activeFeature ? 'white' : 'rgba(255,255,255,.2)' }} />
                  ))}
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                {PHONE_VISUALS[CORE_FEATURES[activeFeature].visual]}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PRIVACY ═══════════════════════ */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,.07)', position: 'relative', overflow: 'hidden' }} id="privacy">
        <div className="orb" style={{ width: 700, height: 500, background: 'rgba(255,255,255,.025)', top: -100, left: -250 }} />
        <div className="section-max" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            {/* Lock visual */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: 280, height: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {[1.6, 2.1, 2.7].map((s, i) => (
                  <div key={i} style={{
                    position: 'absolute', borderRadius: '50%', border: '1px solid rgba(255,255,255,.07)',
                    width: 100, height: 100, transform: `scale(${s})`,
                    animation: `ringPulse 3.5s ease-in-out ${i * .9}s infinite`,
                  }} />
                ))}
                <div style={{ width: 110, height: 110, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
                  <svg viewBox="0 0 24 24" fill="black" style={{ width: 50, height: 50 }}>
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* Floating labels */}
                {[
                  { a: 0, label: 'E2E Encrypted' },
                  { a: 90, label: 'Zero ads in chats' },
                  { a: 180, label: 'No data sold' },
                  { a: 270, label: 'You\'re in control' },
                ].map(({ a, label }, i) => {
                  const r = (a * Math.PI) / 180;
                  const x = Math.cos(r) * 152, y = Math.sin(r) * 152;
                  return (
                    <div key={i} style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%,-50%)',
                      padding: '6px 12px', borderRadius: 99, fontSize: 11, fontWeight: 500, whiteSpace: 'nowrap',
                      background: '#1a1a1a', border: '1px solid rgba(255,255,255,.14)', color: 'rgba(255,255,255,.5)',
                    }}>{label}</div>
                  );
                })}
              </div>
            </div>
            {/* Text */}
            <div>
              <div className="section-label">Privacy by design</div>
              <h2 className="big-h" style={{ marginBottom: 20 }}>Your privacy is our priority</h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.55)', marginBottom: 36 }}>
                End-to-end encryption is on by default. Your personal messages, photos, and calls are secured — not even Chatty can read or listen to them.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {PRIVACY_FEATURES.map((f, i) => (
                  <div key={i} className="card" style={{ padding: '18px 18px', borderRadius: 16, background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                      <svg viewBox="0 0 20 20" fill="white" style={{ width: 14, height: 14 }}><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,.35)' }}>{f.desc}</div>
                  </div>
                ))}
              </div>
              <a href="#" className="btn-ghost" style={{ marginTop: 28, display: 'inline-flex' }}>Read our privacy policy →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MULTI-DEVICE ═══════════════════════ */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,.07)' }}>
        <div className="section-max">
          <div style={{ borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {/* Left */}
            <div style={{ padding: '52px 48px', borderRight: '1px solid rgba(255,255,255,.07)' }}>
              <div className="section-label">Multi-device</div>
              <h2 className="big-h" style={{ marginBottom: 20 }}>One Chatty,<br />every device</h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,.55)', marginBottom: 28 }}>
                Use Chatty on up to four linked devices simultaneously — your phone, tablet, computer, and web browser. All in perfect sync, all private.
              </p>
              {['Chatty for iPhone & Android', 'Chatty Desktop for Mac & Windows', 'Chatty Web in any browser', 'Chatty for iPad'].map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,.5)', marginBottom: 10 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth={1.8} style={{ width: 8, height: 8 }}><path strokeLinecap="round" strokeLinejoin="round" d="M2 5l2 2.5 4-4" /></svg>
                  </div>
                  {d}
                </div>
              ))} 
              <a href="#" className="btn-white" style={{ marginTop: 32, display: 'inline-flex' }}>Get the app</a>
            </div>
            {/* Right — devices illustration */}
            <div style={{ padding: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
                {/* Phone */}
                <div style={{ width: 90, height: 162, borderRadius: 18, background: '#111', border: '1px solid rgba(255,255,255,.12)', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', padding: '7px 0 4px' }}><div style={{ width: 28, height: 4, borderRadius: 99, background: 'rgba(255,255,255,.15)' }} /></div>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 8px', borderTop: '1px solid rgba(255,255,255,.04)' }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,.1)', flexShrink: 0 }} />
                      <div>
                        <div style={{ height: 4, borderRadius: 4, background: 'rgba(255,255,255,.12)', width: `${40 + i * 6}px` }} />
                        <div style={{ height: 3, borderRadius: 4, background: 'rgba(255,255,255,.07)', width: `${25 + i * 4}px`, marginTop: 3 }} />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Tablet */}
                <div style={{ width: 138, height: 185, borderRadius: 16, background: '#111', border: '1px solid rgba(255,255,255,.12)', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                    <div style={{ width: 16, height: 16, borderRadius: 6, background: 'rgba(255,255,255,.1)' }} />
                    <div style={{ height: 5, flex: 1, borderRadius: 4, background: 'rgba(255,255,255,.1)' }} />
                  </div>
                  <div style={{ display: 'flex', height: 'calc(100% - 32px)' }}>
                    <div style={{ width: 44, borderRight: '1px solid rgba(255,255,255,.06)' }}>
                      {[...Array(5)].map((_, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 6px', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                          <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'rgba(255,255,255,.1)', flexShrink: 0 }} />
                          <div style={{ height: 3, flex: 1, borderRadius: 4, background: 'rgba(255,255,255,.08)' }} />
                        </div>
                      ))}
                    </div>
                    <div style={{ flex: 1, padding: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div style={{ height: 32, borderRadius: 8, background: 'rgba(255,255,255,.06)' }} />
                      <div style={{ height: 5, borderRadius: 4, background: 'rgba(255,255,255,.1)', width: '80%' }} />
                      <div style={{ height: 5, borderRadius: 4, background: 'rgba(255,255,255,.07)', width: '60%' }} />
                      <div style={{ alignSelf: 'flex-end', height: 20, width: '65%', borderRadius: 8, background: 'rgba(255,255,255,.1)' }} />
                    </div>
                  </div>
                </div>
                {/* Mac */}
                <div>
                  <div style={{ width: 172, height: 110, borderRadius: 10, background: '#111', border: '1px solid rgba(255,255,255,.12)', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 10px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                      {[['#ef4444','60%'],['#f59e0b','60%'],['#22c55e','60%']].map(([c, o], i) => <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
                    </div>
                    <div style={{ display: 'flex', height: 'calc(100% - 28px)' }}>
                      <div style={{ width: 44, borderRight: '1px solid rgba(255,255,255,.06)' }}>
                        {[...Array(4)].map((_, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '5px 6px', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                            <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(255,255,255,.1)', flexShrink: 0 }} />
                            <div style={{ height: 3, flex: 1, borderRadius: 4, background: 'rgba(255,255,255,.08)' }} />
                          </div>
                        ))}
                      </div>
                      <div style={{ flex: 1, padding: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <div style={{ height: 22, borderRadius: 6, background: 'rgba(255,255,255,.06)' }} />
                        <div style={{ height: 3, borderRadius: 4, background: 'rgba(255,255,255,.1)' }} />
                        <div style={{ height: 3, borderRadius: 4, background: 'rgba(255,255,255,.07)', width: '70%' }} />
                        <div style={{ alignSelf: 'flex-end', height: 14, width: '55%', borderRadius: 6, background: 'rgba(255,255,255,.1)', marginTop: 2 }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ height: 8, background: 'rgba(255,255,255,.06)', width: 160, margin: '0 auto', borderRadius: '0 0 4px 4px' }} />
                  <div style={{ height: 6, background: 'rgba(255,255,255,.09)', width: 56, margin: '0 auto', borderRadius: '0 0 6px 6px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

                    
                          {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
                          <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,.07)' }}>
                            <div className="section-max">
                              <div style={{ marginBottom: 48 }}>
                                <div className="section-label">What people say</div>
                                <h2 className="big-h">Join 2 billion people<br />who stay connected</h2>
                              </div>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
                                {TESTIMONIALS.map((t, i) => (
                                  <div key={i} className="card" style={{ padding: 32, borderRadius: 20, background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)' }}>
                                    <div style={{ fontSize: 28, marginBottom: 12 }}>★★★★★</div>
                                    <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,.7)', marginBottom: 20 }}>{t.quote}</p>
                                    <div>
                                      <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)' }}>{t.role}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </section>
                    
                          {/* ═══════════════════════ FAQ ═══════════════════════ */}
                          <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,.07)' }} id="help">
                            <div className="section-max" style={{ maxWidth: 800 }}>
                              <div style={{ marginBottom: 52, textAlign: 'center' }}>
                                <div className="section-label">Got questions?</div>
                                <h2 className="big-h">Frequently asked questions</h2>
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                {FAQS.map((faq, i) => (
                                  <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,.07)' }}>
                                    <button
                                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                      style={{
                                        width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none',
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer',
                                        transition: 'all .2s', color: 'white', fontSize: 15, fontWeight: 500, fontFamily: 'inherit',
                                      }}
                                    >
                                      {faq.q}
                                      <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 16, height: 16, transition: 'transform .3s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    </button>
                                    <div className={`faq-a${openFaq === i ? ' open' : ''}`} style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,.5)' }}>
                                      {faq.a}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </section>
                    
                          {/* ═══════════════════════ FOOTER ═══════════════════════ */}
                          <footer style={{ borderTop: '1px solid rgba(255,255,255,.07)', padding: '60px 0' }}>
                            <div className="section-max">
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40, marginBottom: 60 }}>
                                {[
                                  { title: 'Download', links: ['iOS', 'Android', 'Mac', 'Windows', 'Web'] },
                                  { title: 'Resources', links: ['Help Centre', 'Guides', 'Blog', 'Security advisories', 'Brand kit'] },
                                  { title: 'Platforms', links: ['Chatty Web', 'Chatty Business', 'Chatty API', 'Channels', 'Communities'] },
                                  { title: 'Company', links: ['About', 'Careers', 'Press', 'Privacy', 'Terms'] },
                                ].map((col, i) => (
                                  <div key={i}>
                                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 16 }}>{col.title}</div>
                                    <ul style={{ listStyle: 'none' }}>
                                      {col.links.map((link, j) => (
                                        <li key={j} style={{ marginBottom: 12 }}>
                                          <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,.35)', textDecoration: 'none', transition: 'color .2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,.7)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,.35)'}>
                                            {link}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                              <hr className="dim" />
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 40, fontSize: 12, color: 'rgba(255,255,255,.3)' }}>
                                <div>© 2024 Chatty Inc. All rights reserved.</div>
                                <div style={{ display: 'flex', gap: 24 }}>
                                  {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social, i) => (
                                    <a key={i} href="#" style={{ color: 'rgba(255,255,255,.3)', textDecoration: 'none', transition: 'color .2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,.3)'}>
                                      {social}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </footer>
                        </div>
                      );
                    }