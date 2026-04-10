import React from 'react';

const DEALS = [
  { id: 1, brand: 'OLD NAVY', name: 'Pixie Skinny Pants', price: 7.97, grade: 'A+', rec: 'ACT NOW', note: 'Verified clearance floor.' },
  { id: 2, brand: 'GAP', name: '1969 High Rise Denim', price: 29.97, grade: 'A+', rec: 'ACT NOW', note: 'Historic low; extra 50% applied.' },
  { id: 3, brand: 'H&M', name: 'Cotton T-Shirt', price: 12.99, grade: 'B-', rec: 'WAIT', note: 'Standard MSRP; no markdown signal.' }
];

export default function LillyDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans">
      <header className="mb-10 border-b border-gray-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-blue-500">LILLY</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Retail Integrity Audit</p>
        </div>
        <div className="text-right font-mono text-[10px] text-gray-400">
          <span className="text-green-500">●</span> LIVE_PULSE: BRAMPTON_ON
        </div>
      </header>

      <div className="space-y-4">
        {DEALS.map((deal) => (
          <div key={deal.id} className="bg-[#121212] border border-gray-800 rounded-xl p-5 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-bold bg-gray-800 px-2 py-1 rounded text-gray-400">{deal.brand}</span>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase font-bold">Integrity Grade</p>
                <p className={`text-xl font-black ${deal.grade.includes('A') ? 'text-blue-400' : 'text-gray-600'}`}>{deal.grade}</p>
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-1">{deal.name}</h2>
            <p className="text-xs text-gray-500 mb-6">{deal.note}</p>
            <div className="flex justify-between items-end">
              <span className="text-3xl font-bold tracking-tighter">${deal.price}</span>
              <button className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                deal.rec === 'ACT NOW' ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-gray-800 text-gray-500'
              }`}>
                {deal.rec}
              </button>
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-12 text-center opacity-30 text-[9px] uppercase tracking-widest">
        Lilly Audit Engine • v1.0.0-alpha
      </footer>
    </div>
  );
}
