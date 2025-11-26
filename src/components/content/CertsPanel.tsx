import { useState } from 'react';

const CertsPanel = () => {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    { name: 'Strategic Leadership & Management', inst: 'Gies College of Business (UIUC)', date: 'NOV 2025' },
    { name: 'Finance of M&A: Valuation & Pricing', inst: 'University of Illinois (UIUC)', date: 'AUG 2023' },
    { name: 'Fundamentals of Finance', inst: 'Wharton Online', date: 'AUG 2023' },
    { name: 'Fundamentals of Quantitative Modeling', inst: 'Wharton Online', date: 'AUG 2023' },
    { name: 'Intro to Spreadsheets and Models', inst: 'Wharton Online', date: 'SEP 2023' },
    { name: 'Investment Banking: Financial Analysis', inst: 'Gies College of Business', date: 'SEP 2023' },
    // Hidden by default
    { name: 'Market Risk Management', inst: 'New York Institute of Finance', date: 'SEP 2023' },
    { name: 'Machine Learning in Trading', inst: 'Google Cloud', date: 'SEP 2023' },
    { name: 'Discounted Cash Flow Modeling', inst: 'Coursera', date: 'AUG 2023' },
    { name: 'Computational Methods in Pricing', inst: 'Columbia University', date: 'OCT 2023' },
    { name: 'Neural Networks and Deep Learning', inst: 'DeepLearning.AI', date: 'OCT 2023' },
    { name: 'Sequences, Time Series and Prediction', inst: 'DeepLearning.AI', date: 'OCT 2023' },
    { name: 'Advanced Trading Algorithms', inst: 'Indian School of Business', date: 'SEP 2023' },
    { name: 'Derivatives - Options & Futures', inst: 'Interactive Brokers', date: 'SEP 2023' },
  ];

  return (
    <div className="h-full flex flex-col font-mono text-sm overflow-y-auto">
      {/* Featured Cert */}
      <div className="bg-bloomberg-orange/10 border border-bloomberg-orange p-4 mb-6">
        <div className="text-bloomberg-orange font-bold text-xs uppercase mb-1">Featured Designation</div>
        <h2 className="text-2xl font-bold text-white mb-2">CFA Level 1 Candidate</h2>
        <div className="flex justify-between items-end">
           <div>
             <div className="text-bloomberg-text">CFA Institute - Appearing Feb 2026</div>
             <div className="text-gray-400 text-xs mt-1 max-w-md">Comprehensive preparation in Ethical Standards, Quant Methods, Economics, and Financial Reporting.</div>
           </div>
           <div className="text-bloomberg-orange text-xl">★</div>
        </div>
      </div>

      <h3 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-4">PROFESSIONAL CERTIFICATIONS</h3>
      
      <div className="grid grid-cols-1 gap-2">
        {certifications.slice(0, showAll ? undefined : 6).map((cert, idx) => (
           <div key={idx} className="flex justify-between items-center bg-white/5 px-3 py-2 border-l-2 border-transparent hover:border-bloomberg-orange hover:bg-white/10 transition-all">
              <div>
                 <div className="font-bold text-bloomberg-text">{cert.name}</div>
                 <div className="text-xs text-gray-400">{cert.inst}</div>
              </div>
              <div className="text-white font-bold font-mono text-xs">{cert.date}</div>
           </div>
        ))}
      </div>

      <button 
        onClick={() => setShowAll(!showAll)}
        className="mt-4 text-center py-2 bg-bloomberg-gray hover:bg-bloomberg-border text-bloomberg-text font-bold transition-colors"
      >
        {showAll ? 'Show Less ˄' : 'View All Certifications ˅'}
      </button>
    </div>
  );
};

export default CertsPanel;
