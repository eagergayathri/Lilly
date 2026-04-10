import React from 'react';

// Live Market Sentiment for April 10, 2026
const SCORES = [
  { id: 1, brand: 'OLD NAVY', valueScore: 94, status: 'PEAK CLEARANCE', trend: 'UP', signal: 'ACT NOW', logic: '80% markdowns confirmed on 400+ items.' },
  { id: 2, brand: 'GAP', valueScore: 82, status: 'DEEP MARKDOWNS', trend: 'STABLE', signal: 'ACT NOW', logic: 'Extra 50% off markdowns applied sitewide.' },
  { id: 3, brand: 'H&M', valueScore: 41, status: 'RETAIL PEAK', trend: 'DOWN', signal: 'WAIT', logic: 'Spring collection is full MSRP. Wait for May.' }
];

export default function LillyScorecard() {
  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', padding: '24px', fontFamily: 'sans-serif' }}>
      {/* Inline Style fallback for mobile white-screen issues */}
      <style>{`
        body { margin: 0; background-color: #050505 !important; }
        .card { background: #0d0d0d; border: 1px solid #1a1a1a; border-radius: 24px; padding: 24px; margin-bottom: 16px; }
        .score { font-size: 48px; font-weight: 900; color: white; margin: 0; }
        .brand-tag { background: white; color: black; padding: 4px 12px; border-radius: 99px; font-size: 10px; font-weight: 900; text-transform: uppercase; }
        .blue-text { color: #2563eb; }
        .signal-btn { background: #2563eb; color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 900; font-size: 10px; }
      `}</style>

      <header style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '24px', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#2563eb', margin: 0, letterSpacing: '-2px', fontStyle: 'italic' }}>LILLY</h1>
        <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '3px', color: '#666', fontWeight: 'bold', margin: '4px 0 0 0' }}>Market Value Integrity</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {SCORES.map((item) => (
          <div key={item.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="brand-tag">{item.brand}</span>
              <span style={{ fontSize: '10px', color: item.trend === 'UP' ? '#22c55e' : '#ef4444', fontWeight: 'bold' }}>
                {item.trend === 'UP' ? '▲ TREND' : '▼ TREND'}
              </span>
            </div>
            
            <p className="score">{item.valueScore}<span style={{ fontSize: '20px', color: '#2563eb' }}>/100</span></p>
            <p style={{ color: item.signal === 'ACT NOW' ? '#2563eb' : '#444', fontWeight: '900', fontSize: '12px', margin: '4px 0 24px 0' }}>{item.status}</p>
            
            <p style={{ fontSize: '12px', color: '#888', lineHeight: '1.6', marginBottom: '24px' }}>"{item.logic}"</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1a1a1a', paddingTop: '16px' }}>
              <div>
                <p style={{ fontSize: '9px', color: '#444', fontWeight: 'bold', textTransform: 'uppercase', margin: 0 }}>Signal</p>
                <p style={{ fontSize: '18px', fontWeight: '900', margin: 0 }}>{item.signal}</p>
              </div>
              <button className="signal-btn">{item.signal === 'ACT NOW' ? '⚡ ACTION' : '⏳ WAIT'}</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
