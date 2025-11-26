import { useTerminal } from '../../context/TerminalContext';

const BottomBar = () => {
  const { currentTime, marketData } = useTerminal();

  // Format Time: 26NOV25 23:42:42 IST
  const formattedTime = currentTime.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata' // For IST as requested
  }).replace(/,/g, '').toUpperCase() + ' IST';

  return (
    <div className="fixed bottom-0 w-full flex flex-col z-50 bg-bloomberg-black border-t border-bloomberg-border font-mono text-sm select-none">
      {/* Ticker Strip */}
      <div className="flex items-center bg-black h-8 overflow-hidden border-b border-bloomberg-gray relative">
        <div className="flex animate-marquee whitespace-nowrap gap-10 min-w-full items-center hover:pause-animation">
           {/* Duplicate list to create seamless loop - tripled for smoothness */}
           {[...marketData, ...marketData, ...marketData].map((data, idx) => (
             <div key={`${data.symbol}-${idx}`} className="flex items-center gap-2">
               <span className="text-bloomberg-text font-bold">{data.symbol}</span>
               <span className={data.change >= 0 ? 'text-bloomberg-green' : 'text-bloomberg-red'}>
                 {data.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
               </span>
               <span className={data.change >= 0 ? 'text-bloomberg-green' : 'text-bloomberg-red'}>
                 {data.change >= 0 ? '+' : ''}{Math.abs(data.changePercent).toFixed(2)}%
               </span>
             </div>
           ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center px-3 py-1.5 bg-bloomberg-black text-bloomberg-text h-8">
        <div className="flex items-center gap-4">
          <span className="text-bloomberg-orange font-bold">DG TERMINAL</span>
          <span>MARKET STATUS: <span className="text-bloomberg-yellow">SIMULATED</span></span>
          <span>CONN: <span className="text-bloomberg-green">ACTIVE</span></span>
        </div>
        
        <div className="font-bold text-bloomberg-text">
          {formattedTime}
        </div>

        <div className="flex items-center gap-4">
           <span>USER: <span className="text-bloomberg-orange">DEVANSH GARG</span></span>
           <span>SESSION: <span className="text-bloomberg-green">ACTIVE</span></span>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
