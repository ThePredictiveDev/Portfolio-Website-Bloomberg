import { useState } from 'react';

const WorkPanel = () => {
  const [showPrevious, setShowPrevious] = useState(false);

  return (
    <div className="h-full overflow-y-auto text-bloomberg-text font-mono text-xs md:text-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Column 1: Corporate Roles */}
        <div>
          <h2 className="text-lg font-bold text-bloomberg-orange mb-4 border-b border-bloomberg-border pb-1">⚡ CORPORATE ROLES</h2>
          
          <div className="flex flex-col gap-6">
            <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-orange font-bold text-base">IIFL Capital Services</h3>
                <span className="text-bloomberg-gray text-xs">JUNE 2026 - JULY 2026</span>
              </div>
              <div className="text-white mb-2">Incoming Summer Analyst (IB/PE Division) | TBD</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Incoming internship focusing on Investment Banking and Private Equity transactions.</li>
                <li>Will involve deal structuring, financial analysis, and due diligence workflows.</li>
              </ul>
            </div>

            <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-orange font-bold text-base">HDB Financial Services</h3>
                <span className="text-bloomberg-gray text-xs">DEC 2025 - JAN 2026</span>
              </div>
              <div className="text-white mb-2">Incoming Winter Analyst (Product Team) | Noida, UP</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Incoming role in the product division working on Finance + AI product development.</li>
                <li>Focus on integrating artificial intelligence into financial service products.</li>
              </ul>
            </div>

             <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-orange font-bold text-base">Meanlabs Software Pvt Ltd</h3>
                <span className="text-bloomberg-gray text-xs">JUN 2025 - PRESENT</span>
              </div>
              <div className="text-white mb-2">Head of AI & Business Development | Noida, UP</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Appointed as a director overseeing strategic AI initiatives in family-owned software firm.</li>
                <li>Spearheading development of investment banking automation agents streamlining M&A, valuation, and due diligence workflows by ~60%.</li>
                <li>Engineered Reddit market intelligence scraper analyzing 500+ posts daily for business development insights.</li>
              </ul>
            </div>

            <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-orange font-bold text-base">FidelFolio Investments</h3>
                <span className="text-bloomberg-gray text-xs">FEB 2025 - MAY 2025</span>
              </div>
              <div className="text-white mb-2">Quantitative Analyst Intern | Mumbai, MH (WFH)</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Created machine learning models for quantitative portfolio construction using Python and TensorFlow.</li>
                <li>Engineered an API to compare mutual fund performance, improving analysis efficiency by ~50%.</li>
                <li>Programmed modular functions for AI model deployment in live trading environment increasing efficiency by ~20%.</li>
              </ul>
            </div>
             
             <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-orange font-bold text-base">Private Portfolio</h3>
                <span className="text-bloomberg-gray text-xs">2022 - PRESENT</span>
              </div>
              <div className="text-white mb-2">Long Term Investor | Personal</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Active long-term investor managing an 8-figure (INR) personal portfolio.</li>
                <li>Focus on fundamental analysis, asset allocation, and risk management across various asset classes.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 2: Entrepreneurial */}
        <div>
          <h2 className="text-lg font-bold text-bloomberg-orange mb-4 border-b border-bloomberg-border pb-1">⚡ ENTREPRENEURIAL VENTURES</h2>
          
          <div className="flex flex-col gap-6 mb-8">
            <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-orange font-bold text-base">Itivrit AI</h3>
                <span className="text-bloomberg-gray text-xs">OCT 2025 - PRESENT</span>
              </div>
              <div className="text-white mb-2">Co-Founder | Remote</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Co-founded a conversational AI product emphasizing primary sources, provenance, and timeline-based exploration.</li>
                <li>Leading all non-technical operations, including strategy, product roadmap, and business development.</li>
                <li>Facilitating direct user interaction with historical records rather than intermediaries.</li>
              </ul>
            </div>

            <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-orange font-bold text-base">BioPay</h3>
                <span className="text-bloomberg-gray text-xs">MAY 2025 - OCT 2025</span>
              </div>
              <div className="text-white mb-2">Founder | Noida, UP</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Founded fintech startup enabling biometric payment transactions using face & voice recognition.</li>
                <li>Led product development for a secure solution eliminating cards/pin; achieved 95% first prototype accuracy.</li>
                <li>Managed a team of 6 interns and prepared a product release roadmap (exited due to other commitments).</li>
              </ul>
            </div>
          </div>

          {/* Previous Experience Dropdown */}
          <div className="mb-8">
             <button 
                onClick={() => setShowPrevious(!showPrevious)} 
                className="w-full text-left bg-bloomberg-gray text-bloomberg-orange px-2 py-1 font-bold flex justify-between items-center"
             >
                <span>⚫ PREVIOUS EXPERIENCE</span>
                <span>{showPrevious ? '▼' : '▶'}</span>
             </button>
             
             {showPrevious && (
                <div className="mt-4 flex flex-col gap-6 pl-2 border-l border-bloomberg-gray ml-2">
                   <div className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-bloomberg-orange font-bold text-sm">WorldQuant</h3>
                        <span className="text-bloomberg-gray text-xs">OCT 2023 - FEB 2025</span>
                      </div>
                      <div className="text-white text-xs mb-1">Research Consultant</div>
                      <ul className="list-disc list-inside text-gray-400 text-xs">
                        <li>Alpha generation to maximize returns and minimize risk.</li>
                        <li>Utilized Portfolio Management, Computational Finance, and Algorithmic Trading skills.</li>
                      </ul>
                   </div>
                   
                   <div className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-bloomberg-orange font-bold text-sm">CollegeCraves</h3>
                        <span className="text-bloomberg-gray text-xs">SEP 2023 - SEP 2024</span>
                      </div>
                      <div className="text-white text-xs mb-1">Co-Founder</div>
                      <ul className="list-disc list-inside text-gray-400 text-xs">
                        <li>Implemented innovative web-based solutions to make accessing Cafeterias across campus easier.</li>
                        <li>Optimised logistic routes to make efficient and fast food deliveries.</li>
                      </ul>
                   </div>

                   <div className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-bloomberg-orange font-bold text-sm">Masai</h3>
                        <span className="text-bloomberg-gray text-xs">SEP 2024 - JAN 2025</span>
                      </div>
                      <div className="text-white text-xs mb-1">Teaching Assistant CS-101</div>
                      <ul className="list-disc list-inside text-gray-400 text-xs">
                         <li>Responsible for taking doubt clearing sessions of over 60 students and monitoring in-class activity.</li>
                         <li>Focused on Python programming and Data Science fundamentals.</li>
                      </ul>
                   </div>

                   <div className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-bloomberg-orange font-bold text-sm">Indian Institute of Technology, Mandi</h3>
                        <span className="text-bloomberg-gray text-xs">AUG 2024 - DEC 2024</span>
                      </div>
                      <div className="text-white text-xs mb-1">Teaching Assistant DS-1</div>
                      <ul className="list-disc list-inside text-gray-400 text-xs">
                         <li>Teaching Assistant for Data Science - 1 course.</li>
                         <li>Assisted with Python, Anaconda, and Pandas curriculum.</li>
                      </ul>
                   </div>
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPanel;
