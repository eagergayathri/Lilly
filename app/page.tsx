import React from 'react';

const DEALS = [
  { 
    id: 1, 
    brand: 'OLD NAVY', 
    name: 'PowerSoft High-Rise Leggings', 
    image: 'https://oldnavy.gap.com/webcontent/0054/866/574/cn54866574.jpg',
    price: 12.47, 
    oldPrice: 44.99,
    grade: 'A+', 
    rec: 'ACT NOW', 
    note: 'Verified corporate floor price. Historic low in Brampton.' 
  },
  { 
    id: 2, 
    brand: 'GAP', 
    name: 'CashSoft V-Neck Sweater', 
    image: 'https://www.gap.com/webcontent/0055/123/456/cn55123456.jpg', // Placeholder: Real scrapers will pull live URLs
    price: 24.98, 
    oldPrice: 69.95,
    grade: 'A', 
    rec: 'ACT NOW', 
    note: 'Extra 50% off applied. Great for spring evenings.' 
  },
  { 
    id: 3, 
    brand: 'H&M', 
    name: 'Oversized Trench Coat', 
    image: 'https://lp2.hm.com/hmgoepprod?set=source[/93/81/938173980388982c1c7d55d551727d66b7a5831a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
    price: 59.99, 
    oldPrice: 84.99,
    grade: 'B', 
    rec: 'WAIT', 
    note: 'Seasonal promo only. Predictive model suggests May drop.' 
  }
];

export default function LillyDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans">
      <header className="mb-10 border-b border-gray-900 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-blue-600">LILLY</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Retail Integrity Audit</p>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-gray-400 font-bold font-mono">LIVE_PULSE: BRAMPTON</span>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {DEALS.map((deal) => (
          <div key={deal.id} className="bg-[#111111] border border-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            {/* Product Image Section */}
            <div className="relative h-64 w-full bg-[#1a1a1a]">
               <img 
                src={deal.image} 
                alt={deal.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x500?text=Image+Loading..."; }}
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-black bg-white text-black px-2 py-1 rounded shadow-lg">
                  {deal.brand}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold tracking-tight w-2/3 leading-tight">{deal.name}</h2>
                <div className="text-right">
                  <p className="text-[9px] text-gray-600 uppercase font-black">Integrity</p>
                  <p className={`text-2xl font-black ${deal.grade.includes('A') ? 'text-blue-500' : 'text-gray-700'}`}>
                    {deal.grade}
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-500 italic mb-6 leading-relaxed">"{deal.note}"</p>

              <div className="flex justify-between items-end pt-4 border-t border-gray-900">
                <div>
                  <p className="text-[10px] text-gray-600 line-through font-bold">${deal.oldPrice}</p>
                  <span className="text-3xl font-black tracking-tighter">${deal.price}</span>
                </div>
                <button className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                  deal.rec === 'ACT NOW' ? 'bg-blue-600' : 'bg-gray-800 text-gray-500'
                }`}>
                  {deal.rec}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
