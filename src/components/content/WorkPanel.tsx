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
                <h3 className="text-bloomberg-yellow font-bold text-base">IIFL Capital Services</h3>
                <span className="text-bloomberg-gray text-xs">JUNE 2026 - JULY 2026</span>
              </div>
              <div className="text-bloomberg-cyan mb-2">Incoming Summer Analyst (IB/PE Division) | TBD</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Upcoming internship focusing on Investment Banking and Private Equity transactions</li>
                <li>Will involve deal structuring, financial analysis, and due diligence workflows</li>
                <li>Division (Investment Banking vs Private Equity) to be determined</li>
              </ul>
            </div>

            <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-yellow font-bold text-base">HDB Financial Services</h3>
                <span className="text-bloomberg-gray text-xs">DEC 2025 - JAN 2026</span>
              </div>
              <div className="text-bloomberg-cyan mb-2">Incoming Winter Analyst (Product Team) | Noida, UP</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Incoming role in the product division working on Finance + AI product development</li>
                <li>Focus on integrating artificial intelligence into financial service products</li>
                <li>Hands-on experience in product team workflows</li>
              </ul>
            </div>

            <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-yellow font-bold text-base">HDR Financial Services</h3>
                <span className="text-bloomberg-gray text-xs">OCT 2025 - JAN 2026</span>
              </div>
              <div className="text-bloomberg-cyan mb-2">Investment Analyst (Banking, Loans & Credit)</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Analyzing one of the product's attracting and investment feasibility</li>
                <li>Led end-to-end objection analysis to identify underperforming debt portfolios on underlying metrics and business development insights</li>
              </ul>
            </div>

             <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-yellow font-bold text-base">Measurable Software Pvt Ltd</h3>
                <span className="text-bloomberg-gray text-xs">JUN 2025 - PRESENT</span>
              </div>
              <div className="text-bloomberg-cyan mb-2">Head of AI & Business Development | Tech AI</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Spearheaded as a strategic positioning strategy to 2x capabilities through product innovations</li>
                <li>Architected comprehensive enterprise resource planning system optimizing workflows</li>
                <li>Bootstrapped development of proprietary banking automation agents streamlining KYC, valuation, and data diligence workflows by ~40%</li>
                <li>Engineered Lloyds market intelligence scraper analyzing RSA posts-sale for business development insights</li>
              </ul>
            </div>

            <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-yellow font-bold text-base">FidelFolio Investments</h3>
                <span className="text-bloomberg-gray text-xs">FEB 2025 - MAY 2025</span>
              </div>
              <div className="text-bloomberg-cyan mb-2">Quantitative Analyst (Equity)</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Crafted machine learning models for quantitative portfolio construction using Python and statsmodels</li>
                <li>Built multivariate model analyzing correlation patterns between asset classes, improving client efficiency by ~50%</li>
                <li>Programmed modular functions for AI model deployment in live trading environment increasing efficiency by ~20%</li>
              </ul>
            </div>
             
             <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-yellow font-bold text-base">WorldQuant</h3>
                <span className="text-bloomberg-gray text-xs">OCT 2023 - FEB 2025</span>
              </div>
              <div className="text-bloomberg-cyan mb-2">Research Consultant</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Alpha generation to maximize returns and minimize risk</li>
                <li>Utilized Portfolio Management, Computational Finance, and Algorithmic Trading skills</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 2: Entrepreneurial & Leadership */}
        <div>
          <h2 className="text-lg font-bold text-bloomberg-orange mb-4 border-b border-bloomberg-border pb-1">⚡ ENTREPRENEURIAL VENTURES</h2>
          
          <div className="flex flex-col gap-6 mb-8">
            <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-yellow font-bold text-base">Itivrit AI</h3>
                <span className="text-bloomberg-gray text-xs">OCT 2025 - PRESENT</span>
              </div>
              <div className="text-bloomberg-cyan mb-2">Founder & CEO</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Co-founded a conversational AI product emphasizing primary sources, provenance, and timeline-based exploration</li>
                <li>Leading all non-technical operations including strategy, product roadmap, and business development</li>
                <li>Positioning direct interaction with historical records rather than intermediaries</li>
              </ul>
            </div>

            <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-yellow font-bold text-base">BioPay</h3>
                <span className="text-bloomberg-gray text-xs">NOV 2024 - OCT 2025</span>
              </div>
              <div className="text-bloomberg-cyan mb-2">Founder</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Founded BioPay, a leading company delivering biometric payment transactions using face & voice</li>
                <li>Led product development for a secure solution eliminating complexity achieved 85% first prototype accuracy</li>
                <li>Built innovative face & voice authentication for end-to-end seamless digital transactions</li>
                <li>Onboarded and mentored a team of 6 interns across AI/product teams</li>
                <li>Exited venture after successful product development</li>
              </ul>
            </div>

            <div className="group hover:bg-white/5 p-2 rounded transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-bloomberg-yellow font-bold text-base">Private Portfolio</h3>
                <span className="text-bloomberg-gray text-xs">2022 - PRESENT</span>
              </div>
              <div className="text-bloomberg-cyan mb-2">Long-term Investor</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Active long-term investor managing an 8-figure (INR) personal portfolio</li>
                <li>Managing equity/crypto markets using advanced trading agents through Q3 2022</li>
                <li>Building full-spec trading execution frameworks and algorithmic mechanisms for low-latency execution</li>
                <li>Focus on fundamental analysis, asset allocation, and risk management across various asset classes</li>
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
                        <h3 className="text-bloomberg-yellow font-bold text-sm">WorldQuant</h3>
                        <span className="text-bloomberg-gray text-xs">OCT 2023 - FEB 2025</span>
                      </div>
                      <div className="text-bloomberg-cyan text-xs mb-1">Investment Analyst</div>
                      <ul className="list-disc list-inside text-gray-400 text-xs">
                        <li>Alpha generation in investment returns and minimize risk</li>
                      </ul>
                   </div>
                   
                   <div className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-bloomberg-yellow font-bold text-sm">CollegeCraves</h3>
                        <span className="text-bloomberg-gray text-xs">SEP 2024 - JAN 2025</span>
                      </div>
                      <div className="text-bloomberg-cyan text-xs mb-1">Co-Founder</div>
                      <ul className="list-disc list-inside text-gray-400 text-xs">
                        <li>Implemented innovative web-based solutions to make accessing cafeteria across campus easier</li>
                      </ul>
                   </div>

                   <div className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-bloomberg-yellow font-bold text-sm">Masai & IIT Mandi</h3>
                        <span className="text-bloomberg-gray text-xs">AUG 2024 - JAN 2025</span>
                      </div>
                      <div className="text-bloomberg-cyan text-xs mb-1">Teaching Assistant</div>
                      <ul className="list-disc list-inside text-gray-400 text-xs">
                         <li>TA for CS-101 and Data Science-1 courses</li>
                      </ul>
                   </div>
                </div>
             )}
          </div>

          <h2 className="text-lg font-bold text-bloomberg-orange mb-4 border-b border-bloomberg-border pb-1">⚡ LEADERSHIP</h2>
          <div className="space-y-4">
             <div className="flex justify-between">
                <div>
                   <span className="text-bloomberg-yellow font-bold">Kamand Bioengineering Group</span>
                   <span className="text-gray-400 text-xs ml-2">Co-Coordinator</span>
                </div>
                <span className="text-gray-500 text-xs">AUG 2024 - PRESENT</span>
             </div>
             <div className="flex justify-between">
                <div>
                   <span className="text-bloomberg-yellow font-bold">National Service Scheme (NSS HP)</span>
                   <span className="text-gray-400 text-xs ml-2">Coordinator</span>
                </div>
                <span className="text-gray-500 text-xs">NOV 2023 - NOV 2025</span>
             </div>
             <div className="flex justify-between">
                <div>
                   <span className="text-bloomberg-yellow font-bold">Kamand Economy Festival</span>
                   <span className="text-gray-400 text-xs ml-2">Founder & Event Lead</span>
                </div>
                <span className="text-gray-500 text-xs">NOV 2024 - FEB 2025</span>
             </div>
             <div className="flex justify-between">
                <div>
                   <span className="text-bloomberg-yellow font-bold">Teach Your Neighbour</span>
                   <span className="text-gray-400 text-xs ml-2">Co-founder</span>
                </div>
                <span className="text-gray-500 text-xs">MAY 2024 - JUN 2024</span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkPanel;
