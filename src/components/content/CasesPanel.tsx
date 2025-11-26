import { Lock } from 'lucide-react';

const CasesPanel = () => {
  return (
    <div className="h-full flex flex-col font-mono">
       <div className="flex items-center gap-2 mb-6 bg-red-900/20 border border-red-900 p-2 text-red-500 text-sm">
          <Lock size={16} />
          <span>RESTRICTED ACCESS: DEAL FLOW & CASE STUDIES</span>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Case 1 */}
          <div className="border border-bloomberg-border p-4 bg-black relative opacity-75 hover:opacity-100 transition-opacity">
             <div className="absolute top-2 right-2 text-bloomberg-orange text-xs animate-pulse">⊙ COMING SOON</div>
             <div className="h-32 bg-gray-900 mb-4 flex items-center justify-center border border-gray-800">
                <span className="text-gray-600 font-bold text-4xl">XLS</span>
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Tech Sector LBO Model</h3>
             <p className="text-gray-400 text-sm mb-4">Classic LBO case analysis showcasing transaction analysis, deal structuring, and valuation work.</p>
             <button disabled className="w-full border border-gray-700 text-gray-500 py-1 cursor-not-allowed">ACCESS DENIED</button>
          </div>

          {/* Case 2 */}
          <div className="border border-bloomberg-border p-4 bg-black relative opacity-75 hover:opacity-100 transition-opacity">
             <div className="absolute top-2 right-2 text-bloomberg-orange text-xs animate-pulse">⊙ COMING SOON</div>
             <div className="h-32 bg-gray-900 mb-4 flex items-center justify-center border border-gray-800">
                <span className="text-gray-600 font-bold text-4xl">PDF</span>
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Cross-Border M&A</h3>
             <p className="text-gray-400 text-sm mb-4">International transaction structuring and business development insights.</p>
             <button disabled className="w-full border border-gray-700 text-gray-500 py-1 cursor-not-allowed">ACCESS DENIED</button>
          </div>
       </div>
    </div>
  );
};

export default CasesPanel;
