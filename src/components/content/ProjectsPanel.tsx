const projects = [
  {
    name: 'Corrective RAG Agent',
    type: 'AI/ML',
    metric: '3rd Place',
    stack: 'LLM',
    link: 'https://github.com/ThePredictiveDev/Hierarchical-Corrective-RAG-for-Troubleshooting',
    desc: 'Agentic RAG with chain of thought reasoning for MANTAB troubleshooting. Won 3rd place at IIT Mandi DL Hackathon'
  },
  {
    name: 'Automated Trading System',
    type: 'Quant Finance',
    metric: 'Real-time',
    stack: 'Python',
    link: 'https://github.com/ThePredictiveDev/Automated-Financial-Market-Trading-System',
    desc: 'Complete trading simulator with Order Book, FIX Engine, Market Maker, and algorithmic bots featuring real-time sentiment analysis'
  },
  {
    name: 'Optimal Order Execution',
    type: 'Stochastic Control',
    metric: '-10% Slippage',
    stack: 'Python',
    link: 'https://github.com/ThePredictiveDev/Optimal-Execution-Model-with-Stochastic-Control',
    desc: 'Implemented Almgren-Chriss framework for optimal execution of large orders, significantly reducing market impact and slippage'
  },
  {
    name: 'DL-Based Autonomous Trader',
    type: 'Deep Learning',
    metric: '+85% Return',
    stack: 'TensorFlow',
    link: 'https://github.com/ThePredictiveDev/LSTM-Based-regime-selection-and-rule-set-based-signal-generation/blob/main/LSTM%20Model.ipynb',
    desc: 'Developed LSTM-based autonomous trading bot achieving 80%+ returns on validation backtest'
  },
  {
    name: 'DCF Automation Tool',
    type: 'Valuation',
    metric: '~70% Time',
    stack: 'Python',
    link: 'https://github.com/ThePredictiveDev/DCF-Automator-Program',
    desc: 'Automated Discounted Cash Flow analysis using Aswath Damodaran\'s framework and Yahoo Finance API'
  }
];

const ProjectsPanel = () => {
  return (
    <div className="h-full flex flex-col font-mono text-sm">
      <div className="flex justify-between items-end mb-2 border-b border-bloomberg-border pb-1 px-2">
         <span className="text-bloomberg-orange font-bold">INDEX: TECH_FIN</span>
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

      <div className="mt-4 px-2">
        <a 
          href="https://github.com/ThePredictiveDev?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full text-center py-2 border border-bloomberg-orange text-bloomberg-orange hover:bg-bloomberg-orange hover:text-black font-bold transition-colors"
        >
          VIEW MORE PROJECTS ON GITHUB &lt;GO&gt;
        </a>
      </div>
    </div>
  );
};

export default ProjectsPanel;
