import { useTerminal } from '../../context/TerminalContext';

const SidePanel = () => {
  const { marketData } = useTerminal();

  // Group data by type for better organization
  const indices = marketData.filter(item => item.type === 'INDEX');
  const equities = marketData.filter(item => item.type === 'EQUITY');
  const rates = marketData.filter(item => item.type === 'RATES');
  const commodities = marketData.filter(item => item.type === 'COMMODITY');
  const crypto = marketData.filter(item => item.type === 'CRYPTO');
  const forex = marketData.filter(item => item.type === 'FOREX' || item.type === 'VIX');

  const renderTickerRow = (item: typeof marketData[0], idx: number) => {
    const isForex = item.type === 'FOREX' || item.type === 'RATES';
    const digits = isForex ? 4 : 2;
    
    return (
      <div key={idx} className="flex justify-between items-center px-2 py-1.5 border-b border-gray-800 hover:bg-white/5 font-mono text-sm leading-tight">
        <div className="text-bloomberg-cyan font-bold truncate flex-1 min-w-0">{item.symbol}</div>
        <div className="text-right flex items-center gap-2 flex-shrink-0">
          <div className="text-white w-24 text-right font-bold">{item.price.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })}</div>
          <div className={`w-18 text-right font-bold ${item.change >= 0 ? 'text-bloomberg-green' : 'text-bloomberg-red'}`}>
            {item.change >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-black border-l border-bloomberg-border font-mono text-sm w-full overflow-hidden">
       <div className="flex-1 overflow-y-auto custom-scrollbar pb-6">
          {/* Global Indices */}
          <div className="border-b border-bloomberg-border">
              <div className="bg-bloomberg-gray px-2 py-1.5 text-bloomberg-orange font-bold border-b border-bloomberg-border sticky top-0 z-10 text-sm">
                GLOBAL INDICES
              </div>
              <div>
                {indices.map(renderTickerRow)}
              </div>
          </div>

          {/* Key Equities */}
          <div className="border-b border-bloomberg-border">
              <div className="bg-bloomberg-gray px-2 py-1.5 text-bloomberg-orange font-bold border-b border-bloomberg-border sticky top-0 z-10 text-sm">
                KEY EQUITIES
              </div>
              <div>
                {equities.map(renderTickerRow)}
              </div>
          </div>

          {/* Rates */}
          <div className="border-b border-bloomberg-border">
              <div className="bg-bloomberg-gray px-2 py-1.5 text-bloomberg-orange font-bold border-b border-bloomberg-border sticky top-0 z-10 text-sm">
                GOVT BOND YIELDS
              </div>
              <div>
                {rates.map(renderTickerRow)}
              </div>
          </div>

          {/* Commodities */}
          <div className="border-b border-bloomberg-border">
              <div className="bg-bloomberg-gray px-2 py-1.5 text-bloomberg-orange font-bold border-b border-bloomberg-border sticky top-0 z-10 text-sm">
                COMMODITIES
              </div>
              <div>
                {commodities.map(renderTickerRow)}
              </div>
          </div>

          {/* Forex & VIX */}
          <div className="border-b border-bloomberg-border">
              <div className="bg-bloomberg-gray px-2 py-1.5 text-bloomberg-orange font-bold border-b border-bloomberg-border sticky top-0 z-10 text-sm">
                FOREX / VIX
              </div>
              <div>
                {forex.map(renderTickerRow)}
              </div>
          </div>

          {/* Crypto */}
          <div className="border-b border-bloomberg-border">
              <div className="bg-bloomberg-gray px-2 py-1.5 text-bloomberg-orange font-bold border-b border-bloomberg-border sticky top-0 z-10 text-sm">
                CRYPTO ASSETS
              </div>
              <div>
                {crypto.map(renderTickerRow)}
              </div>
          </div>
       </div>

       {/* Disclaimer Footer */}
       <div className="bg-gray-900 border-t border-bloomberg-border p-1.5 text-xs text-gray-500 text-center">
          MARKET DATA SIMULATED FOR DEMO
       </div>
    </div>
  );
};

export default SidePanel;
