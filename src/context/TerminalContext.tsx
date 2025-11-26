import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types
export type PanelId = 'BIO' | 'WORK' | 'PAPERS' | 'PROJ' | 'CERTS' | 'CASES' | 'CONTACT' | 'SEARCH' | 'TICKER';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
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
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider = ({ children }: { children: ReactNode }) => {
  const [activePanel, setActivePanel] = useState<PanelId>('BIO');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  
  // Mock Market Data
  const [marketData, setMarketData] = useState<MarketData[]>([
    { symbol: 'NIFTY50', price: 24141.30, change: 217.50, changePercent: 0.91 },
    { symbol: 'S&P500', price: 5948.71, change: 33.60, changePercent: 0.57 },
    { symbol: 'NASDAQ', price: 18972.42, change: 118.80, changePercent: 0.63 },
    { symbol: 'BTC-USD', price: 98000.00, change: -1200.00, changePercent: -1.2 },
    { symbol: 'ETH-USD', price: 3400.00, change: 45.00, changePercent: 1.3 },
  ]);

  // Market Status Logic (Simulated for IST)
  const isMarketOpen = () => {
    const hour = currentTime.getHours();
    const day = currentTime.getDay();
    // Simple 9-3:30 IST Mon-Fri approximation
    if (day === 0 || day === 6) return false;
    return hour >= 9 && hour < 16; // Approx
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Randomize market data slightly
      if (isMarketOpen()) {
        setMarketData(prev => prev.map(item => ({
          ...item,
          price: item.price * (1 + (Math.random() - 0.5) * 0.001),
          change: item.change + (Math.random() - 0.5),
          changePercent: ((item.change + (Math.random() - 0.5)) / item.price) * 100
        })));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addToHistory = (cmd: string) => {
    setCommandHistory(prev => [cmd, ...prev].slice(0, 50));
  };

  const runCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toUpperCase();
    addToHistory(cleanCmd);
    
    // Command routing
    const panelMap: Record<string, PanelId> = {
      'BIO': 'BIO',
      'WORK': 'WORK',
      'PAPERS': 'PAPERS',
      'PROJ': 'PROJ',
      'CERTS': 'CERTS',
      'CASES': 'CASES',
      'CONTACT': 'CONTACT'
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
      runCommand
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
