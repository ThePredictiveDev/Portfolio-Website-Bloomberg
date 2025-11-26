import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type PanelId = 'BIO' | 'WORK' | 'LEADERSHIP' | 'PAPERS' | 'PROJ' | 'CERTS' | 'CASES' | 'CONTACT' | 'HELP';

export type MarketMode = 'NORMAL' | 'CRASH' | 'MOON' | 'VOLATILE';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  type: 'INDEX' | 'CRYPTO' | 'COMMODITY' | 'FOREX' | 'VIX' | 'RATES' | 'EQUITY';
}

interface TerminalContextType {
  activePanel: PanelId;
  setActivePanel: (panel: PanelId) => void;
  isMarketOpen: boolean;
  currentTime: Date;
  marketData: MarketData[];
  commandHistory: string[];
  addToHistory: (cmd: string) => void;
  runCommand: (cmd: string) => void;
  marketMode: MarketMode;
  setMarketMode: (mode: MarketMode) => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider = ({ children }: { children: ReactNode }) => {
  const [activePanel, setActivePanel] = useState<PanelId>('BIO');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [marketMode, setMarketMode] = useState<MarketMode>('NORMAL');
  
  const [marketData, setMarketData] = useState<MarketData[]>([
    // INDIA INDICES & STOCKS
    { symbol: 'NIFTY 50', price: 24141.30, change: 217.50, changePercent: 0.91, type: 'INDEX' },
    { symbol: 'SENSEX', price: 79852.10, change: 705.40, changePercent: 0.89, type: 'INDEX' },
    { symbol: 'BANK NIFTY', price: 52145.65, change: 345.20, changePercent: 0.66, type: 'INDEX' },
    { symbol: 'RELIANCE', price: 2345.15, change: 12.45, changePercent: 0.53, type: 'EQUITY' },
    { symbol: 'HDFC BANK', price: 1650.20, change: -5.60, changePercent: -0.34, type: 'EQUITY' },
    { symbol: 'INFOSYS', price: 1425.30, change: 8.90, changePercent: 0.63, type: 'EQUITY' },
    { symbol: 'TCS', price: 3890.45, change: 15.20, changePercent: 0.39, type: 'EQUITY' },
    { symbol: 'ICICI BANK', price: 1120.50, change: 10.10, changePercent: 0.91, type: 'EQUITY' },
    { symbol: 'INDIA VIX', price: 13.45, change: -0.55, changePercent: -3.92, type: 'VIX' },

    // MAJOR US INDICES
    { symbol: 'S&P 500', price: 5948.71, change: 33.60, changePercent: 0.57, type: 'INDEX' },
    { symbol: 'NASDAQ 100', price: 18972.42, change: 118.80, changePercent: 0.63, type: 'INDEX' },
    { symbol: 'DOW JONES', price: 44736.57, change: 440.06, changePercent: 0.99, type: 'INDEX' },
    { symbol: 'RUSSELL 2000', price: 2350.15, change: 12.45, changePercent: 0.53, type: 'INDEX' },
    { symbol: 'VIX (US)', price: 15.20, change: -0.80, changePercent: -5.00, type: 'VIX' },
    
    // GLOBAL INDICES
    { symbol: 'FTSE 100', price: 8274.75, change: -12.50, changePercent: -0.15, type: 'INDEX' },
    { symbol: 'DAX', price: 19425.30, change: 150.20, changePercent: 0.78, type: 'INDEX' },
    { symbol: 'CAC 40', price: 7432.10, change: 45.30, changePercent: 0.61, type: 'INDEX' },
    { symbol: 'IBEX 35', price: 11580.50, change: 85.20, changePercent: 0.74, type: 'INDEX' },
    { symbol: 'NIKKEI 225', price: 38211.00, change: -350.50, changePercent: -0.91, type: 'INDEX' },
    { symbol: 'HANG SENG', price: 19423.61, change: -50.10, changePercent: -0.26, type: 'INDEX' },
    { symbol: 'SHANGHAI COMP', price: 3265.40, change: 10.50, changePercent: 0.32, type: 'INDEX' },
    { symbol: 'KOSPI', price: 2480.15, change: -5.20, changePercent: -0.21, type: 'INDEX' },
    { symbol: 'BOVESPA', price: 128500.10, change: -450.30, changePercent: -0.35, type: 'INDEX' },

    // GOVERNMENT BOND YIELDS (RATES)
    { symbol: 'IN 10Y BOND', price: 7.12, change: 0.01, changePercent: 0.14, type: 'RATES' },
    { symbol: 'US 10Y YIELD', price: 4.41, change: 0.02, changePercent: 0.45, type: 'RATES' },
    { symbol: 'US 2Y YIELD', price: 4.28, change: -0.01, changePercent: -0.23, type: 'RATES' },
    { symbol: 'US 30Y YIELD', price: 4.60, change: 0.03, changePercent: 0.65, type: 'RATES' },
    { symbol: 'GER 10Y BUND', price: 2.35, change: 0.04, changePercent: 1.73, type: 'RATES' },
    { symbol: 'UK 10Y GILT', price: 4.15, change: 0.02, changePercent: 0.48, type: 'RATES' },
    { symbol: 'JP 10Y JGB', price: 1.05, change: 0.005, changePercent: 0.48, type: 'RATES' },
    
    // FOREX
    { symbol: 'USD/INR', price: 84.45, change: 0.05, changePercent: 0.06, type: 'FOREX' },
    { symbol: 'EUR/INR', price: 89.10, change: 0.12, changePercent: 0.13, type: 'FOREX' },
    { symbol: 'GBP/INR', price: 106.80, change: 0.25, changePercent: 0.23, type: 'FOREX' },
    { symbol: 'EUR/USD', price: 1.0520, change: -0.0025, changePercent: -0.24, type: 'FOREX' },
    { symbol: 'USD/JPY', price: 154.80, change: 0.45, changePercent: 0.29, type: 'FOREX' },
    { symbol: 'GBP/USD', price: 1.2640, change: 0.0015, changePercent: 0.12, type: 'FOREX' },
    { symbol: 'USD/CNY', price: 7.2450, change: 0.0020, changePercent: 0.03, type: 'FOREX' },
    { symbol: 'USD/CAD', price: 1.3980, change: 0.0040, changePercent: 0.29, type: 'FOREX' },

    // COMMODITIES
    { symbol: 'BRENT CRUDE', price: 73.20, change: -0.55, changePercent: -0.75, type: 'COMMODITY' },
    { symbol: 'WTI CRUDE', price: 69.40, change: -0.50, changePercent: -0.72, type: 'COMMODITY' },
    { symbol: 'GOLD', price: 2650.40, change: 15.20, changePercent: 0.58, type: 'COMMODITY' },
    { symbol: 'SILVER', price: 31.25, change: -0.15, changePercent: -0.48, type: 'COMMODITY' },
    { symbol: 'COPPER', price: 4.12, change: -0.03, changePercent: -0.72, type: 'COMMODITY' },
    { symbol: 'NAT GAS', price: 3.15, change: 0.08, changePercent: 2.60, type: 'COMMODITY' },
    { symbol: 'CORN', price: 430.50, change: 2.25, changePercent: 0.52, type: 'COMMODITY' },

    // CRYPTO
    { symbol: 'BTC-USD', price: 98000.00, change: -1200.00, changePercent: -1.2, type: 'CRYPTO' },
    { symbol: 'ETH-USD', price: 3400.00, change: 45.00, changePercent: 1.3, type: 'CRYPTO' },
    { symbol: 'SOL-USD', price: 180.50, change: 5.20, changePercent: 2.96, type: 'CRYPTO' },
    { symbol: 'XRP-USD', price: 1.12, change: -0.02, changePercent: -1.75, type: 'CRYPTO' },
    { symbol: 'DOGE-USD', price: 0.42, change: 0.01, changePercent: 2.45, type: 'CRYPTO' },

    // KEY EQUITIES (TECH/FIN)
    { symbol: 'APPLE', price: 228.40, change: 1.20, changePercent: 0.53, type: 'EQUITY' },
    { symbol: 'MICROSOFT', price: 418.50, change: 3.10, changePercent: 0.75, type: 'EQUITY' },
    { symbol: 'NVIDIA', price: 145.80, change: -2.10, changePercent: -1.42, type: 'EQUITY' },
    { symbol: 'AMAZON', price: 202.10, change: 1.80, changePercent: 0.90, type: 'EQUITY' },
    { symbol: 'ALPHABET', price: 175.20, change: -0.50, changePercent: -0.28, type: 'EQUITY' },
    { symbol: 'TESLA', price: 342.50, change: 12.40, changePercent: 3.76, type: 'EQUITY' },
    { symbol: 'JPMORGAN', price: 235.60, change: 2.10, changePercent: 0.90, type: 'EQUITY' },
    { symbol: 'GOLDMAN SACHS', price: 585.20, change: 5.40, changePercent: 0.93, type: 'EQUITY' },
  ]);

  const isMarketOpen = () => {
    const hour = currentTime.getHours();
    const day = currentTime.getDay();
    if (day === 0 || day === 6) return false;
    return hour >= 9 && hour < 16;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      setMarketData(prev => prev.map(item => {
        // Volatility settings
        let volatility = 0.0002;
        if (marketMode === 'VOLATILE') volatility = 0.02; // High volatility
        
        // Override based on item type for standard sim
        if (marketMode === 'NORMAL') {
             if (item.type === 'CRYPTO' || item.type === 'EQUITY') volatility = 0.0008;
             if (item.type === 'VIX') volatility = 0.0015;
             if (item.type === 'RATES' || item.type === 'FOREX') volatility = 0.00005;
        }

        let changeFactor = 1 + (Math.random() - 0.5) * volatility;
        
        // Market manipulation logic
        if (marketMode === 'CRASH') {
             // Force predominantly negative changes
             changeFactor = 1 - (Math.random() * 0.005);
        } else if (marketMode === 'MOON') {
             // Force predominantly positive changes
             changeFactor = 1 + (Math.random() * 0.005);
        }

        const newPrice = item.price * changeFactor;
        const newChange = item.change + (newPrice - item.price);
        
        if (newPrice <= 0) return item;

        const newChangePercent = (newChange / (item.price - item.change)) * 100;

        return {
          ...item,
          price: newPrice,
          change: newChange,
          changePercent: newChangePercent
        };
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, [marketMode]);

  const addToHistory = (cmd: string) => {
    setCommandHistory(prev => [cmd, ...prev].slice(0, 50));
  };

  const runCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toUpperCase();
    addToHistory(cleanCmd);
    
    // Resume / PDF Command
    if (cleanCmd === 'PDF' || cleanCmd === 'RESUME') {
        window.open('https://drive.google.com/file/d/1iY8q1Up1qMs-E-o7XqPvAo9qfAAZtLda/view?usp=sharing', '_blank');
        return;
    }

    // Market Manipulation Commands
    if (cleanCmd === 'CRASH') {
        setMarketMode('CRASH');
        return;
    }
    if (cleanCmd === 'MOON') {
        setMarketMode('MOON');
        return;
    }
    if (cleanCmd === 'VOL' || cleanCmd === 'VOLATILITY') {
        setMarketMode('VOLATILE');
        return;
    }
    if (cleanCmd === 'RESET' || cleanCmd === 'NORMAL') {
        setMarketMode('NORMAL');
        return;
    }

    const panelMap: Record<string, PanelId> = {
      'BIO': 'BIO',
      'WORK': 'WORK',
      'LEAD': 'LEADERSHIP',
      'LEADERSHIP': 'LEADERSHIP',
      'PAPERS': 'PAPERS',
      'PROJ': 'PROJ',
      'CERTS': 'CERTS',
      'CASES': 'CASES',
      'CONTACT': 'CONTACT',
      'HELP': 'HELP'
    };

    if (panelMap[cleanCmd]) {
      setActivePanel(panelMap[cleanCmd]);
    }
  };

  return (
    <TerminalContext.Provider value={{
      activePanel,
      setActivePanel,
      isMarketOpen: isMarketOpen(),
      currentTime,
      marketData,
      commandHistory,
      addToHistory,
      runCommand,
      marketMode,
      setMarketMode
    }}>
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (context === undefined) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};
