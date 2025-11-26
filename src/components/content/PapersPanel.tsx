import { useState } from 'react';

const papers = [
  {
    status: 'Accepted',
    title: 'Strongly Connected Components Are All You Need',
    venue: 'ICVGIP/ACPR',
    link: 'https://doi.org/10.21203/rs.3.rs-7877883/v1',
    description: 'A novel graph-theoretic framework analyzing attention mechanisms in Vision Transformers, proving that meaningful V-SCCs transcend all other graph-mining operations for interpretability',
    tags: ['COMPUTER VISION', 'GRAPH THEORY', 'TRANSFORMERS']
  },
  {
    status: 'Under Review',
    title: 'Multiscale Portfolio Optimization',
    venue: 'Journal of Forecasting',
    link: 'https://doi.org/10.21203/rs.3.rs-7841142/v1',
    description: 'Introduces a scale-diversified portfolio framework decomposing asset returns into frequency bands to separate high-frequency noise from long-term trends',
    tags: ['QUANT FINANCE', 'SIGNAL PROCESSING', 'PORTFOLIO MGMT']
  },
  {
    status: 'Under Review',
    title: 'Nonparametric Regime Segmentation',
    venue: 'Journal of Forecasting',
    link: 'https://dx.doi.org/10.2139/ssrn.5611890',
    description: 'A unified estimation pipeline for detecting structural breaks in multivariate financial time series using penalized change-point detection',
    tags: ['TIME SERIES', 'REGIME SWITCHING', 'ECONOMETRICS']
  },
  {
    status: 'Under Review',
    title: 'Corporate Insurance Make-or-Buy',
    venue: 'JII',
    link: 'https://dx.doi.org/10.2139/ssrn.5599810',
    description: 'Agent-based simulation of self-insurance viability for Indian corporations, identifying discontinuous cost structures due to regulatory capital requirements',
    tags: ['CORPORATE FINANCE', 'INSURANCE', 'REGULATION']
  },
  {
    status: 'Under Review',
    title: 'Modelling the Ballot',
    venue: 'JASSS',
    link: 'https://doi.org/10.31235/osf.io/mp9kh_v1',
    description: 'Agent-based simulation of democratic decision-making comparing six voting mechanisms on welfare and fairness',
    tags: ['GAME THEORY', 'SOCIAL CHOICE', 'ABM']
  },
  {
    status: 'Submitted',
    title: 'FinChart-Multimodal',
    venue: 'CVPR',
    link: '#',
    description: 'A large-scale dataset aligning OHLCV time series with chart images to enable scalable multimodal financial analysis',
    tags: ['COMPUTER VISION', 'FINANCE', 'MULTIMODAL AI']
  }
];

const PapersPanel = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="h-full flex flex-col font-mono text-sm">
      {/* Table Header */}
      <div className="grid grid-cols-12 gap-2 text-bloomberg-orange font-bold border-b border-bloomberg-border pb-1 mb-2 px-2 sticky top-0 bg-black z-10">
        <div className="col-span-2">STATUS</div>
        <div className="col-span-6">TITLE</div>
        <div className="col-span-3">VENUE</div>
        <div className="col-span-1 text-right">LINK</div>
      </div>

      {/* Table Body */}
      <div className="overflow-y-auto flex-1">
        {papers.map((paper, idx) => (
          <div key={idx} className="mb-1">
             <div 
               className={`grid grid-cols-12 gap-2 px-2 py-1 cursor-pointer hover:bg-white/10 transition-colors ${expandedId === idx ? 'bg-white/5' : ''}`}
               onClick={() => setExpandedId(expandedId === idx ? null : idx)}
             >
                <div className={`col-span-2 font-bold ${
                  paper.status === 'Accepted' ? 'text-bloomberg-green' : 
                  paper.status.includes('Review') ? 'text-bloomberg-yellow' : 'text-gray-400'
                }`}>
                  {paper.status}
                </div>
                <div className="col-span-6 text-bloomberg-text truncate">{paper.title}</div>
                <div className="col-span-3 text-gray-400">{paper.venue}</div>
                <div className="col-span-1 text-right">
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-bloomberg-orange hover:text-bloomberg-orangeBright font-bold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    VIEW
                  </a>
                </div>
             </div>
             
             {/* Expanded Details */}
             {expandedId === idx && (
               <div className="px-4 py-2 bg-gray-900 border-l-2 border-bloomberg-orange ml-2 mb-2 text-xs">
                 <p className="text-gray-300 mb-2 leading-relaxed">{paper.description}</p>
                 <div className="flex flex-wrap gap-2">
                   {paper.tags.map(tag => (
                     <span key={tag} className="bg-bloomberg-gray px-1 text-bloomberg-cyan text-[10px] uppercase">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PapersPanel;
