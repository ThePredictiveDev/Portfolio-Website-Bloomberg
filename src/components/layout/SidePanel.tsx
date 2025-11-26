import { useTerminal } from '../../context/TerminalContext';

const SidePanel = () => {
  const { marketData } = useTerminal();

  return (
    <div className="h-full flex flex-col bg-black border-l border-bloomberg-border font-mono text-xs w-full">
       {/* Market Data */}
       <div className="flex-1 overflow-auto border-b border-bloomberg-border">
          <div className="bg-bloomberg-gray px-2 py-1 text-bloomberg-orange font-bold border-b border-bloomberg-border sticky top-0">
             MARKET MONITOR
          </div>
          <div>
             {marketData.map((item, idx) => (
                <div key={idx} className="flex justify-between px-2 py-1 border-b border-gray-800 hover:bg-white/5">
                   <div className="text-bloomberg-cyan font-bold">{item.symbol}</div>
                   <div className="text-right">
                      <div className="text-white">{item.price.toFixed(2)}</div>
                      <div className={item.change >= 0 ? 'text-bloomberg-green' : 'text-bloomberg-red'}>
                         {item.change >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>

       {/* Personal Stats */}
       <div className="flex-1 border-b border-bloomberg-border">
          <div className="bg-bloomberg-gray px-2 py-1 text-bloomberg-orange font-bold border-b border-bloomberg-border sticky top-0">
             MY METRICS
          </div>
          <div className="p-2 space-y-4">
             <div>
                <div className="text-gray-400">PAPERS</div>
                <div className="text-xl text-bloomberg-yellow font-bold">6</div>
             </div>
             <div>
                <div className="text-gray-400">PROJECTS</div>
                <div className="text-xl text-bloomberg-yellow font-bold">15+</div>
             </div>
             <div>
                <div className="text-gray-400">CFA PROGRESS</div>
                <div className="text-xl text-bloomberg-green font-bold">LEVEL 1</div>
                <div className="text-[10px] text-gray-500">FEB 2026</div>
             </div>
             <div>
                <div className="text-gray-400">INTERNSHIPS</div>
                <div className="text-xl text-bloomberg-cyan font-bold">2 LINED UP</div>
             </div>
          </div>
       </div>

       {/* News/Updates */}
       <div className="h-1/3 overflow-auto">
          <div className="bg-bloomberg-gray px-2 py-1 text-bloomberg-orange font-bold border-b border-bloomberg-border sticky top-0">
             UPDATES
          </div>
          <div className="p-2 space-y-2">
             <div className="text-white border-l-2 border-bloomberg-green pl-2">
                <div className="font-bold text-bloomberg-green">BIOPAY FOUNDED</div>
                <div className="text-[10px] text-gray-400">NOV 2024</div>
             </div>
             <div className="text-white border-l-2 border-bloomberg-cyan pl-2">
                <div className="font-bold text-bloomberg-cyan">PAPER SUBMITTED</div>
                <div className="text-[10px] text-gray-400">CVPR 2025</div>
             </div>
             <div className="text-white border-l-2 border-bloomberg-yellow pl-2">
                <div className="font-bold text-bloomberg-yellow">HDB ANALYST</div>
                <div className="text-[10px] text-gray-400">DEC 2025</div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default SidePanel;
