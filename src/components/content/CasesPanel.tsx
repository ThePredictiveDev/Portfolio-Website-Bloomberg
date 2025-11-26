const CasesPanel = () => {
  return (
    <div className="h-full flex flex-col font-mono">
       <div className="flex items-center gap-2 mb-6 bg-bloomberg-orange/20 border border-bloomberg-orange p-3 text-bloomberg-orange text-sm">
          <span className="animate-pulse">&#9679;</span>
          <span>COMING SOON - CASE STUDIES IN PROGRESS</span>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Case 1 */}
          <div className="border border-bloomberg-border p-4 bg-black relative opacity-75 hover:opacity-100 transition-opacity">
             <div className="absolute top-2 right-2 text-bloomberg-yellow text-xs animate-pulse">IN PROGRESS</div>
             <div className="h-32 bg-gray-900 mb-4 flex items-center justify-center border border-gray-800">
                <span className="text-gray-600 font-bold text-4xl">XLS</span>
             </div>
             <h3 className="text-xl font-bold text-white mb-2">HDFC Credila LBO Model</h3>
             <p className="text-gray-400 text-sm mb-4">LBO modeling of EQT's $1.1B acquisition of India's largest dedicated education loan lender.</p>
             <button disabled className="w-full border border-gray-700 text-gray-500 py-1 cursor-not-allowed">COMING SOON</button>
          </div>

          {/* Case 2 */}
          <div className="border border-bloomberg-border p-4 bg-black relative opacity-75 hover:opacity-100 transition-opacity">
             <div className="absolute top-2 right-2 text-bloomberg-yellow text-xs animate-pulse">IN PROGRESS</div>
             <div className="h-32 bg-gray-900 mb-4 flex items-center justify-center border border-gray-800">
                <span className="text-gray-600 font-bold text-4xl">PDF</span>
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Adobe-Semrush M&A Analysis</h3>
             <p className="text-gray-400 text-sm mb-4">Comprehensive M&A analysis of Adobe's acquisition of Semrush including valuation, synergies, and deal rationale.</p>
             <button disabled className="w-full border border-gray-700 text-gray-500 py-1 cursor-not-allowed">COMING SOON</button>
          </div>
       </div>
    </div>
  );
};

export default CasesPanel;
