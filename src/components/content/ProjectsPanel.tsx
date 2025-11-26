const projects = [
  {
    name: 'Corrective RAG Agent',
    type: 'AI/ML',
    metric: '3rd Place',
    stack: 'LLMs',
    link: 'https://github.com/ThePredictiveDev/Hierarchical-Corrective-RAG-for-Troubleshooting',
    desc: 'Agentic RAG with chain-of-thought reasoning for MATLAB troubleshooting. Won 3rd place at IIT Mandi DL Hackathon.'
  },
  {
    name: 'Automated Trading System',
    type: 'Quant Finance',
    metric: 'Real-time',
    stack: 'Python',
    link: 'https://github.com/ThePredictiveDev/Automated-Financial-Market-Trading-System',
    desc: 'Complete trading simulator with Order Book, FIX Engine, Market Maker, and algorithmic bots featuring real-time sentiment analysis.'
  },
  {
    name: 'Optimal Order Execution',
    type: 'Stochastic Control',
    metric: '-30% Slippage',
    stack: 'Python',
    link: 'https://github.com/ThePredictiveDev/Optimal-Execution-Model-with-Stochastic-Control',
    desc: 'Implemented Almgren-Chriss framework for optimal execution of large orders, significantly reducing market impact and slippage.'
  },
  {
    name: 'DL-Based Autonomous Trader',
    type: 'Deep Learning',
    metric: '+80% Return',
    stack: 'TensorFlow',
    link: 'https://github.com/ThePredictiveDev/LSTM-Based-regime-selection-and-rule-set-based-signal-generation/blob/main/LSTM%20Model.ipynb',
    desc: 'Developed LSTM-based autonomous trading bot achieving 80%+ returns on validation backtests.'
  },
  {
    name: 'DCF Automation Tool',
    type: 'Valuation',
    metric: '~70% Time',
    stack: 'Python',
    link: 'https://github.com/ThePredictiveDev/DCF-Automator-Program',
    desc: 'Automated Discounted Cash Flow analysis using Aswath Damodaran\'s framework and Yahoo Finance API.'
  },
  {
    name: 'Reddit Term-Based Scraper',
    type: 'Data Engineering',
    metric: '10x Throughput',
    stack: 'FastAPI/Gradio',
    link: 'https://github.com/ThePredictiveDev/Search-Reddit-Term-Based-Scraper',
    desc: 'Advanced Reddit mention tracker with async pipeline, ML sentiment analysis, interactive dashboards, and multi-model LLM insights with resilient fallbacks.'
  },
  {
    name: 'Option Pricing Tool',
    type: 'Derivatives',
    metric: 'Multi-Model',
    stack: 'Python',
    link: 'https://github.com/ThePredictiveDev/Option-Pricing-Models-and-Pricing-Display-Tool',
    desc: 'Option pricing and display tool implementing Black-Scholes, Binomial Tree, and Monte Carlo simulation models with visualization.'
  },
  {
    name: 'RL Population Simulators',
    type: 'Agent-Based',
    metric: 'Complex ABM',
    stack: 'Python/RL',
    link: 'https://github.com/ThePredictiveDev/Highly-Complex-RL-and-Heuristics-Based-Population-Simulators',
    desc: 'Highly complex population simulators using reinforcement learning and heuristics for agent-based modeling of dynamic systems.'
  },
  {
    name: 'HRL Autonomous Trader',
    type: 'Deep RL',
    metric: 'Hierarchical',
    stack: 'PyTorch',
    link: 'https://github.com/ThePredictiveDev/HRL-Based-Autonomous-Trading-Bot',
    desc: 'Hierarchical Reinforcement Learning based autonomous trading bot with multi-level temporal abstraction for decision making.'
  },
  {
    name: 'LLM From Scratch',
    type: 'NLP/AI',
    metric: 'Custom Arch',
    stack: 'PyTorch',
    link: 'https://github.com/ThePredictiveDev/LLM-Model-From-Scratch',
    desc: 'Large Language Model built from scratch implementing transformer architecture, attention mechanisms, and training pipeline.'
  },
  {
    name: 'Company Rating Calculator',
    type: 'Fundamental',
    metric: 'Multi-Factor',
    stack: 'Python',
    link: 'https://github.com/ThePredictiveDev/Company-Rating-Calculator',
    desc: 'Automated company rating system using fundamental analysis metrics, financial ratios, and multi-factor scoring.'
  },
  {
    name: 'EMA Trading Strategy',
    type: 'Technical',
    metric: 'Backtested',
    stack: 'Python',
    link: 'https://github.com/ThePredictiveDev/EMA-Based-Trading-Strategy-in-Python',
    desc: 'Exponential Moving Average based trading strategy implementation with backtesting, signal generation, and performance analysis.'
  },
  {
    name: 'Modern Portfolio Theory',
    type: 'Portfolio Mgmt',
    metric: 'Optimization',
    stack: 'Python',
    link: 'https://github.com/ThePredictiveDev/Modern-Portfolio-Theory-in-Python',
    desc: 'Implementation of Markowitz Mean-Variance portfolio optimization with efficient frontier visualization and risk-return analysis.'
  }
];

const ProjectsPanel = () => {
  return (
    <div className="h-full flex flex-col font-mono text-sm">
      {/* Header with GitHub link */}
      <div className="flex justify-between items-center mb-2 border-b border-bloomberg-border pb-2 px-2">
        <span className="text-bloomberg-orange font-bold">PROJECTS</span>
        <a 
          href="https://github.com/ThePredictiveDev?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-bloomberg-orange text-black px-3 py-1 text-xs font-bold hover:bg-bloomberg-orangeBright transition-colors"
        >
          VIEW ALL ON GITHUB &lt;GO&gt;
        </a>
      </div>

      <div className="grid grid-cols-12 gap-2 text-bloomberg-orange font-bold border-b border-bloomberg-border pb-1 mb-2 px-2 text-xs">
        <div className="col-span-3">PROJECT</div>
        <div className="col-span-2">TYPE</div>
        <div className="col-span-2 text-right">METRIC</div>
        <div className="col-span-2 text-right">STACK</div>
        <div className="col-span-3 text-right">REPOSITORY</div>
      </div>

      <div className="overflow-y-auto flex-1">
        {projects.map((proj, idx) => (
          <div key={idx} className="group hover:bg-white/10 transition-colors border-b border-gray-800/50">
             <div className="grid grid-cols-12 gap-2 px-2 py-2 items-center">
                <div className="col-span-3 font-bold text-bloomberg-text truncate" title={proj.name}>{proj.name}</div>
                <div className="col-span-2 text-gray-400 text-xs truncate">{proj.type}</div>
                <div className="col-span-2 text-right text-bloomberg-green font-mono">{proj.metric}</div>
                <div className="col-span-2 text-right text-bloomberg-cyan text-xs">{proj.stack}</div>
                <div className="col-span-3 text-right">
                   <a 
                     href={proj.link} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="bg-bloomberg-orange text-black px-2 py-0.5 text-xs font-bold hover:bg-white hover:text-black transition-colors"
                   >
                     VIEW
                   </a>
                </div>
             </div>
             {/* Description on Hover/Group */}
             <div className="hidden group-hover:block px-2 pb-2 text-xs text-gray-400 italic">
                {proj.desc}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPanel;
