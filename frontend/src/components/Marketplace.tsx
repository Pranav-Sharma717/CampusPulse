import React from 'react';

interface MarketplaceProps {
  onShowToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

export const Marketplace: React.FC<MarketplaceProps> = ({ onShowToast }) => {
  const items = [
    {
      id: 1,
      catNum: '1. Semester Books',
      discount: '65% Off Retail',
      title: 'Database System Concepts (Korth 7th Ed)',
      subtitle: 'Condition: Excellent &bull; Senior in Hostel C-304',
      reason: 'Recommended because you take CS302 and exam is in 3 days.',
      price: 250,
      originalPrice: 720,
      footerText: 'Hostel Pick-up',
      btnText: 'Contact Senior',
      btnColor: 'bg-brand-600 hover:bg-brand-700',
      contact: 'Senior Rohan (Hostel C-304)',
    },
    {
      id: 2,
      catNum: '2. Lab Equipment',
      discount: 'Available Today',
      title: 'Arduino Uno + Sensor Starter Breadboard',
      subtitle: 'Required for Embedded Systems Lab (Sem 5)',
      reason: 'Club rental pool &bull; Return at semester end for full deposit refund.',
      price: 150,
      unit: '/ semester',
      originalPrice: 850,
      footerText: 'Robotics Club Lab',
      btnText: 'Request Rental',
      btnColor: 'bg-teal-600 hover:bg-teal-700',
      contact: 'Robotics Club Lead',
    },
    {
      id: 3,
      catNum: '3. Stationery & Printing',
      discount: 'Campus Repro Vouchers',
      title: 'Bulk Lab Record Printing & Spiral Binding',
      subtitle: 'Campus Xerox Co-op &bull; 100 Pages + Hard Cover',
      reason: 'Save ₹90 with the CampusPulse student co-op discount token.',
      price: 110,
      originalPrice: 200,
      footerText: 'Coupon: REPRO110',
      btnText: 'Get Voucher',
      btnColor: 'bg-indigo-600 hover:bg-indigo-700',
      contact: 'Library Co-op',
    },
    {
      id: 4,
      catNum: '4. Electronics',
      discount: 'Refurbished',
      title: 'Casio fx-991EX Scientific Calculator',
      subtitle: 'Verified Condition &bull; Graduating Batch Hand-over',
      reason: 'Permitted in university examinations for Probability & Stats.',
      price: 650,
      originalPrice: 1400,
      footerText: 'Hostel A-112',
      btnText: 'Chat Seller',
      btnColor: 'bg-purple-600 hover:bg-purple-700',
      contact: 'Senior Ananya (Hostel A-112)',
    },
    {
      id: 5,
      catNum: '5. Hostel Essentials',
      discount: 'Room Clearance',
      title: 'Bajaj 1.5L Stainless Steel Electric Kettle',
      subtitle: 'Clean & tested &bull; Hostel Block B Wing 2',
      reason: 'Safe late-night study drinks without expensive canteen delivery.',
      price: 400,
      originalPrice: 1100,
      footerText: 'Immediate Handover',
      btnText: 'Claim Kettle',
      btnColor: 'bg-amber-600 hover:bg-amber-700',
      contact: 'Hostel Block B Wing 2 Rep',
    },
    {
      id: 6,
      catNum: '6. Mess & Meal Deals',
      discount: 'Nutrition Sponsor',
      title: 'Central Mess Healthy South Indian Dinner Token',
      subtitle: 'High-Protein Idli/Sambar/Fruit Bowl Meal',
      reason: 'Cost-saving meal alternative recommended in your finance plan.',
      price: 65,
      originalPrice: 140,
      footerText: 'Mess Dining Hall 1',
      btnText: 'Redeem Token',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700',
      contact: 'Central Mess Cashier',
    },
  ];

  const handleContact = (item: string, contact: string) => {
    onShowToast(`💬 Connected to ${contact} for "${item}". Notification sent!`, 'success');
  };

  return (
    <section id="marketplace" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Transparency Disclaimer Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-xs text-indigo-900 flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              CampusPulse is an AI Recommendation Layer — Not an E-Commerce Platform
            </h4>
            <p className="text-slate-600 text-xs mt-1 leading-relaxed">
              CampusPulse does not hold inventory, take supplier commissions, or execute retail checkouts. We operate purely as an <strong>intelligent recommendation and peer discovery layer</strong> that matches semester books, lab equipment, stationery, electronics, hostel essentials, and healthy meals based on your current academic calendar and discretionary budget.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
              <i className="fa-solid fa-bag-shopping"></i> Section 08 &bull; Personalized Student Marketplace
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              High-Yield Campus Gear & Course Supplies
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Recommendations tailored for Alex (Semester 5 CSE &bull; CS302 &bull; ₹820 available budget).
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-slate-500">
            <span>Match Criterion:</span>
            <span className="font-bold text-slate-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
              Course Relevance &amp; Budget
            </span>
          </div>
        </div>

        {/* Marketplace 6-Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft hover:shadow-card transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-2 font-medium">
                  <span className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-bold">{it.catNum}</span>
                  <span className="text-emerald-600 font-bold">{it.discount}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{it.title}</h3>
                <p className="text-xs text-slate-500 mt-1" dangerouslySetInnerHTML={{ __html: it.subtitle }} />

                <div className="my-3 p-2.5 bg-slate-50 rounded-xl text-[11px] text-slate-600">
                  💡 <em dangerouslySetInnerHTML={{ __html: it.reason }} />
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-extrabold text-slate-900">
                    ₹{it.price} {it.unit && <span className="text-xs font-normal text-slate-400">{it.unit}</span>}
                  </span>
                  <span className="text-xs text-slate-400 line-through">₹{it.originalPrice} new</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">{it.footerText}</span>
                <button
                  onClick={() => handleContact(it.title, it.contact)}
                  className={`px-3 py-1.5 rounded-lg text-white font-semibold text-xs transition ${it.btnColor}`}
                >
                  {it.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
