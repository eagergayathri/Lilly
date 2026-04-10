/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Live Brampton/GTA Audit Data for April 10, 2026
const DEALS = [
  { 
    id: 1, 
    brand: 'OLD NAVY', 
    name: 'PowerSoft 7/8 Pocket Leggings', 
    image: 'https://oldnavy.gapcanada.ca/webcontent/0055/074/332/cn55074332.jpg',
    price: 15.99, 
    oldPrice: 44.99,
    grade: 'A', 
    rec: 'ACT NOW', 
    note: 'Major local markdown. 65% off MSRP at Bramalea City Centre.' 
  },
  { 
    id: 2, 
    brand: 'GAP', 
    name: 'High Rise Stride Wide-Leg Jeans', 
    image: 'https://www.gapcanada.ca/webcontent/0052/316/250/cn52316250.jpg',
    price: 34.97, 
    oldPrice: 89.95,
    grade: 'A+', 
    rec: 'ACT NOW', 
    note: 'Verified .97 floor price. Extra 50% off clearance applied.' 
  },
  { 
    id: 3, 
    brand: 'OLD NAVY', 
    name: 'PowerSoft Crop Polo', 
    image: 'https://oldnavy.gapcanada.ca/webcontent/0054/104/187/cn54104187.jpg',
    price: 5.97, 
    oldPrice: 34.99,
    grade: 'A+', 
    rec: 'ACT NOW', 
    note: 'Historic low (.97 code). Absolute floor price for Brampton region.' 
  },
  { 
    id: 4, 
    brand: 'H&M', 
    name: 'Oversized Quilted Jacket', 
    image: 'https://lp2.hm.com/hmgoepprod?set=source[/1e/e3/1ee3e7f6063b53f60a0a5089311026027a5831a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
    price: 38.99, 
    oldPrice: 69.99,
    grade: 'B+', 
    rec: 'WAIT', 
    note: '44% Off Spring Edit. Model predicts further drop to $29 in 14 days.' 
  }
];

export default function LillyDashboard() {
  const currentTimestamp = "APR 10 2026 | 18:25 EST";

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 font-sans selection:bg-blue-500/30">
      {/* Header Section */}
      <header className="mb-10 border-b border-gray-900 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-blue-600 mb-1 italic">LILLY</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Retail Integrity Audit</p>
        </div>
        <div className="text-right font-mono">
          <div className="flex items-center justify-end gap-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] text-gray-400 font-bold uppercase">Live: Brampton_ON</span>
          </div>
          <p className="text-[9px] text-gray-600 uppercase tracking-widest">{currentTimestamp}</p>
        </div>
      </header>

      {/* Audit Feed */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {DEALS.map((deal) => (
          <div 
            key={deal.id} 
            className="group bg-[#0d0d0d] border border-gray-900 rounded-[2rem] overflow-hidden transition-all hover:border-blue-900/50 shadow-2xl"
          >
            {/* Visual Header */}
            <div className="relative h-72 w-full bg-[#151515] overflow-hidden">
              <img 
                src={deal.image} 
                alt={deal.name}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-5 left-5">
                <span className="text-[9px] font-black bg-white text-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl">
                  {deal.brand}
                </span>
              </div>
            </div>

            {/* Information Section */}
            <div className="p-7">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold tracking-tight text-gray-100 leading-tight">
                    {deal.name}
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-gray-600 uppercase font-black tracking-widest">Grade</p>
                  <p className={`text-3xl font-black leading-none ${
                    deal.grade.includes('A') ? 'text-blue-500' : 'text-gray-700'
                  }`}>
                    {deal.grade}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs text-gray-500 leading-relaxed italic border-l-2 border-gray-800 pl-3">
                  "{deal.note}"
                </p>
              </div>

              <div className="flex justify-between items-end pt-4 border-t border-gray-900">
                <div>
                  <p className="text-[10px] text-gray-600 line-through font-bold">${deal.oldPrice}</p>
                  <span className="text-4xl font-black tracking-tighter text-white">
                    ${deal.price}
                  </span>
                </div>
                <button 
                  className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    deal.rec === 'ACT NOW' 
                      ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:bg-blue-500 active:scale-95' 
                      : 'bg-[#1a1a1a] text-gray-600 border border-gray-800'
                  }`}
                >
                  {deal.rec}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Meta */}
      <footer className="mt-20 py-10 border-t border-gray-900 flex flex-col items-center gap-4">
        <div className="flex gap-8 grayscale opacity-20">
           <span className="text-[11px] font-bold">H&M</span>
           <span className="text-[11px] font-bold">GAP</span>
           <span className="text-[11px] font-bold">OLD NAVY</span>
        </div>
        <p className="text-[9px] text-gray-700 uppercase tracking-[0.5em] font-medium">
          Lilly Engine v1.1 • GTA Audit Systems
        </p>
      </footer>
    </div>
  );
}
