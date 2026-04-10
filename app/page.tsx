import React from 'react';

// Live Market Sentiment for April 10, 2026 (Brampton/GTA Scrape)
const SCORES = [
  { 
    id: 1, 
    brand: 'OLD NAVY', 
    valueScore: 94, 
    status: 'PEAK CLEARANCE',
    trend: 'UP',
    signal: 'ACT NOW',
    logic: 'The "Run, Don’t Walk" event is live. 80% markdowns confirmed on 400+ items. Lowest inventory floor in 6 months.'
  },
  { 
    id: 2, 
    brand: 'GAP', 
    valueScore: 82, 
    status: 'DEEP MARKDOWNS',
    trend: 'STABLE',
    signal: 'ACT NOW',
    logic: 'Extra 50% off markdowns applied sitewide. .97 price endings are widespread across denim and spring layers.'
  },
  { 
    id: 3, 
    brand: 'H&M', 
    valueScore: 41, 
    status: 'RETAIL PEAK',
    trend: 'DOWN',
    signal: 'WAIT',
    logic: 'Spring collection is currently at full MSRP. Small "Member" promos are active, but predictive model shows 30% drop in 14 days.'
  }
];

export default function LillyScorecard() {
  const currentTimestamp = "APR 10 2026 | 18:35 EST";

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="mb-12 border-b border-gray-900 pb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-blue-600 mb-1 italic">LILLY</h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Market Value Integrity Audit</p>
        </div>
        <div className="text-right font-mono">
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Live_Pulse: Brampton_ON</p>
          <p className="text-[9px] text-gray-600 uppercase tracking-widest">{currentTimestamp}</p>
        </div>
      </header>

      {/* Sentiment Grid */}
      <div className="space-y-6">
        {SCORES.map((item) => (
          <div 
            key={item.id} 
            className="group bg-[#0d0d0d] border border-gray-900 rounded-[2rem] p-8 transition-all hover:border-blue-900/50"
          >
            <div className="flex flex-col md:flex-row justify-between gap-8">
              
              {/* Brand & Score Section */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black bg-white text-black px-3 py-1 rounded-full uppercase tracking-tighter">
                    {item.brand}
                  </span>
                  <span className={`text-[10px] font-bold ${item.trend === 'UP' ? 'text-green-500' : 'text-red-500'}`}>
                    {item.trend === 'UP' ? '▲ TRENDING UP' : '▼ TRENDING DOWN'}
                  </span>
                </div>
                <h2 className="text-5xl font-black tracking-tighter mb-2 italic">
                  {item.valueScore}<span className="text-blue-600 text-2xl not-italic">/100</span>
                </h2>
                <p className={`text-sm font-black uppercase tracking-[0.2em] ${item.signal === 'ACT NOW' ? 'text-blue-500' : 'text-gray-600'}`}>
                  {item.status}
                </p>
              </div>

              {/* Logic & CTA Section */}
              <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-900 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-medium">
                   <span className="text-gray-600 font-bold uppercase text-[9px] block mb-2 tracking-widest">Audit Logic:</span>
                   "{item.logic}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-[9px] text-gray-600 uppercase font-black tracking-widest">Recommendation</p>
                    <p className={`text-xl font-black ${item.signal === 'ACT NOW' ? 'text-white' : 'text-gray-700'}`}>
                      {item.signal}
                    </p>
                  </div>
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center border-2 ${
                    item.signal === 'ACT NOW' ? 'border-blue-600 bg-blue-600/10' : 'border-gray-800'
                  }`}>
                    {item.signal === 'ACT NOW' ? (
                      <span className="text-blue-500 font-black text-xl">⚡</span>
                    ) : (
                      <span className="text-gray-700 font-black text-xl">⏳</span>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Global Meta */}
      <footer className="mt-20 py-10 border-t border-gray-900 flex flex-col items-center gap-6">
        <div className="flex items-center gap-4 bg-[#111] px-6 py-3 rounded-full border border-gray-800">
           <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">
             Aggregate Savings Potential: 62% Average
           </p>
        </div>
        <p className="text-[9px] text-gray-700 uppercase tracking-[0.5em] font-medium">
          Lilly Engine v1.2 • Sentiment & Scorecard System
        </p>
      </footer>
    </div>
  );
}
