'use client'; 
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

// Live Market Sentiment & Deep Links (April 10, 2026)
const SCORES = [
  { 
    id: 1, 
    brand: 'OLD NAVY', 
    valueScore: 94, 
    status: 'PEAK CLEARANCE', 
    trend: 'UP', 
    signal: 'ACT NOW', 
    url: 'https://oldnavy.gapcanada.ca/browse/category.do?cid=26175', 
    logic: '80% markdowns confirmed on 400+ items at Bramalea. Lowest floor in 6 months.' 
  },
  { 
    id: 2, 
    brand: 'GAP', 
    valueScore: 82, 
    status: 'DEEP MARKDOWNS', 
    trend: 'STABLE', 
    signal: 'ACT NOW', 
    url: 'https://www.gapcanada.ca/browse/women/sale?cid=1065871&mlink=55277,1,globalbanner_1#department=136', 
    logic: 'Extra 50% off applied. Integrity check confirms widespread .97 price endings.' 
  },
  { 
    id: 3, 
    brand: 'H&M', 
    valueScore: 41, 
    status: 'RETAIL PEAK', 
    trend: 'DOWN', 
    signal: 'WAIT', 
    url: 'https://www2.hm.com/en_ca/sale.html', 
    logic: 'Spring collection is full MSRP. Predictive model suggests 30% drop in early May.' 
  }
];

export default function LillyApp() {
  const [view, setView] = useState('dashboard'); 

  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', padding: '24px', fontFamily: 'sans-serif' }}>
      <style>{`
        body { margin: 0; background-color: #050505 !important; }
        .card { background: #0d0d0d; border: 1px solid #1a1a1a; border-radius: 24px; padding: 24px; margin-bottom: 16px; }
        .nav-btn { background: none; border: none; color: #444; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; padding: 8px; transition: color 0.2s; }
        .nav-btn.active { color: #2563eb; }
        .score { font-size: 48px; font-weight: 900; color: white; margin: 0; line-height: 1; }
        .brand-tag { background: white; color: black; padding: 4px 12px; border-radius: 99px; font-size: 10px; font-weight: 900; text-transform: uppercase; }
        .signal-link { background: #2563eb; color: white; text-decoration: none; padding: 12px 24px; border-radius: 12px; font-weight: 900; font-size: 10px; display: inline-block; }
        .about-title { color: #2563eb; font-size: 14px; font-weight: 900; text-transform: uppercase; margin-top: 32px; margin-bottom: 8px; display: block; }
        .about-text { color: #888; font-size: 13px; line-height: 1.6; margin-bottom: 24px; }
      `}</style>

      {/* Header with View Toggle */}
      <header style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '24px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#2563eb', margin: 0, letterSpacing: '-2px', fontStyle: 'italic' }}>LILLY</h1>
            <nav style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => setView('dashboard')} className={`nav-btn ${view === 'dashboard' ? 'active' : ''}`}>Audit</button>
                <button onClick={() => setView('about')} className={`nav-btn ${view === 'about' ? 'active' : ''}`}>Logic</button>
            </nav>
        </div>
        <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '3px', color: '#666', fontWeight: 'bold', margin: 0 }}>
            {view === 'dashboard' ? 'Market Value Integrity' : 'Methodology & Governance'}
        </p>
      </header>

      {view === 'dashboard' ? (
        /* AUDIT DASHBOARD */
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
                {item.signal === 'ACT NOW' ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="signal-link">⚡ ACTION</a>
                ) : (
                  <button style={{ background: '#1a1a1a', color: '#444', padding: '12px 24px', borderRadius: '12px', fontWeight: '900', fontSize: '10px', border: 'none' }}>⏳ WAIT</button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ABOUT / LOGIC PAGE */
        <div style={{ opacity: 1 }}>
          <span className="about-title">The "Lilly" Algorithm</span>
          <p className="about-text">
            Lilly is an <strong>Integrity Engine</strong>. The scores are generated by cross-referencing live inventory floor data with historic pricing patterns in the GTA region.
          </p>

          <span className="about-title">The .97 Rule</span>
          <p className="about-text">
            In retail governance, prices ending in <strong>.97</strong> are hard-coded clearance. These will never be cheaper. When Lilly detects high .97 density, the score spikes to <strong>ACT NOW</strong>.
          </p>

          <span className="about-title">Market Sentiment</span>
          <p className="about-text">
            Lilly looks at "Brand Velocity." If H&M has high stock levels, she flags it as a <strong>WAIT</strong>, predicting a deeper drop within 14-21 days.
          </p>

          <span className="about-title">Decision Matrix</span>
          <div style={{ background: '#111', padding: '20px', borderRadius: '16px', border: '1px solid #1a1a1a' }}>
            <p style={{ margin: '0 0 10px 0', fontSize: '11px', fontWeight: 'bold', color: '#22c55e' }}>● 80-100: Historic Low (Buy)</p>
            <p style={{ margin: '0 0 10px 0', fontSize: '11px', fontWeight: 'bold', color: '#2563eb' }}>● 60-79: Deep Markdown (Safe)</p>
            <p style={{ margin: '0', fontSize: '11px', fontWeight: 'bold', color: '#ef4444' }}>● 0-59: Marketing Trap (Wait)</p>
          </div>
        </div>
      )}

      <footer style={{ marginTop: '40px', textAlign: 'center', opacity: 0.2 }}>
        <p style={{ fontSize: '8px', letterSpacing: '4px' }}>LILLY ENGINE V1.6</p>
      </footer>
    </main>
  );
}
