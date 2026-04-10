import React from 'react';

// Live Audit Data for April 10, 2026 (Brampton/GTA Scrape)
const DEALS = [
  { 
    id: 1, 
    brand: 'OLD NAVY', 
    name: 'PowerSoft High-Rise Leggings', 
    price: 12.47, 
    oldPrice: 44.99,
    grade: 'A+', 
    rec: 'ACT NOW', 
    note: 'Verified corporate floor price (.47). Highest integrity deal in GTA today.' 
  },
  { 
    id: 2, 
    brand: 'GAP', 
    name: 'CashSoft V-Neck Sweater', 
    price: 24.98, 
    oldPrice: 69.95,
    grade: 'A', 
    rec: 'ACT NOW', 
    note: 'Extra 50% off markdowns applied. Floor price for Spring transition stock.' 
  },
  { 
    id: 3, 
    brand: 'H&M', 
    name: 'Oversized Trench Coat', 
    price: 59.99, 
    oldPrice: 84.99,
    grade: 'B', 
    rec: 'WAIT', 
    note: 'Standard seasonal promo. Predictive model suggests 25% further drop in May.' 
  },
  { 
    id: 4, 
    brand: 'GAP', 
    name: '1969 High Rise Denim', 
    price: 29.97, 
    oldPrice: 89.95,
    grade: 'A+', 
    rec: 'ACT NOW', 
    note: '90-day historic low detected. Final sale signal active.' 
  }
];

export default function LillyDashboard() {
  const currentTimestamp = "APR 10 2026 | 17:55 EST";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans selection:bg-blue-500/30">
      {/* Header Section */}
      <header className="mb-10 border-b border-gray-900 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-blue-600 mb-1">LILLY</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Retail Integrity Audit</p>
        </div>
        <div className="text-right font-mono">
          <div className="flex items-center justify-end gap-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] text-gray-400 font-bold">LIVE_PULSE: BRAMPTON</span>
          </div>
          <p className="text-[9px] text-gray-600 uppercase">{currentTimestamp}</p>
        </div>
      </header>

      {/* Audit Feed */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {DEALS.map((deal) => (
          <div 
            key={deal.id} 
            className="group bg-[#111111] border border-gray-900 rounded-2xl p-6 transition-all hover:border-blue-900/50 hover:bg-[#141414]"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <span className="text-[10px] font-black bg-white text-black px-2 py-0.5 rounded italic">
                  {deal.brand}
                </span>
                <h2 className="text-lg font-bold tracking-tight text-gray-100 group-hover:text-white transition-colors">
                  {deal.name}
                </h2>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-600 uppercase font-black tracking-widest">Integrity</p>
                <p className={`text-2xl font-black leading-none ${
                  deal.grade.includes('A') ? 'text-blue-500' : 'text-gray-700'
                }`}>
                  {deal.grade}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-xs text-gray-500 leading-relaxed italic">
                "{deal.note}"
              </p>
            </div>

            <div className="flex justify-between items-end pt-4 border-t border-gray-900">
              <div>
                <p className="text-[10px] text-gray-600 line-through font-bold">${deal.oldPrice}</p>
                <span className="text-3xl font-black tracking-tighter text-white">
                  ${deal.price}
                </span>
              </div>
              <button 
                className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  deal.rec === 'ACT NOW' 
                    ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.2)] hover:bg-blue-500 active:scale-95' 
                    : 'bg-gray-900 text-gray-600 border border-gray-800'
                }`}
              >
                {deal.rec}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Meta */}
      <footer className="mt-16 py-8 border-t border-gray-900 flex flex-col items-center gap-4">
        <div className="flex gap-4 grayscale opacity-40">
           {/* Visual placeholders for brand alignment */}
           <span className="text-[10px] font-bold">H&M</span>
           <span className="text-[10px] font-bold text-blue-500 underline decoration-2">GAP</span>
           <span className="text-[10px] font-bold">OLD NAVY</span>
        </div>
        <p className="text-[9px] text-gray-700 uppercase tracking-[0.4em] font-medium">
          Lilly Engine v1.0 • Brampton Retail Systems
        </p>
      </footer>
    </div>
  );
}
