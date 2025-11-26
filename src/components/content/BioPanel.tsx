const BioPanel = () => {
  return (
    <div className="h-full flex flex-col text-bloomberg-text font-mono text-sm overflow-y-auto">
      {/* Header */}
      <div className="border-b border-bloomberg-border pb-4 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-bloomberg-orange mb-1">DEVANSH GARG</h1>
            <div className="text-bloomberg-yellow">EDUCATED IN AI, BUILDING IN FINANCE</div>
          </div>
          <div className="text-right text-xs text-gray-400">
            <div>CLASS OF 2027 | IIT MANDI</div>
          </div>
        </div>
      </div>

      {/* Main Content Grid - 2 Columns */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Column: Abstract/Bio - Takes most space */}
        <div className="lg:col-span-8 flex flex-col">
          <h2 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-3 pb-1">ABSTRACT / BIO</h2>
          <div className="flex flex-col gap-3 text-justify leading-relaxed text-xs">
            <p>
              My journey began with a curiosity for how complex systems behave, and over time that curiosity has grown into a blend of finance, AI, and problem-solving. I enjoy exploring how intelligent models, thoughtful analysis, and careful reasoning can shape real outcomes, whether in markets, products, or people's lives.
            </p>
            <p>
              I am actively pursuing internships in investment banking and private equity, with a particular interest in M&A, LBOs, transactions, and deal analysis. To prepare for that path, my hands-on experience so far has been in quantitative roles, where I focus on rigorous modelling, data-driven decision making, and building tools that help translate theory into actionable insight.
            </p>
            <p>
              Alongside this, I have built and led AI-focused ventures. I founded BioPay, a deep-tech AI based biometric authentication system similar to palm pay by wechat but instead using face and voice for UPI payments, which grew into a team that included six interns and tackled product, privacy, and systems challenges before I exited the venture. I co-founded Itivrit AI, a conversational AI product that emphasizes primary sources, provenance, and timeline-based exploration so users can interact directly with historical records rather than intermediaries.
            </p>
            <p>
              Whether I am developing AI tools, building valuation models, or analysing a complex deal structure, I try to stay curious, disciplined, and practical. My long-term aim is to build a private equity firm guided by social and cultural ESG principles, and I am using the mix of quant experience, deal-focused internships, and entrepreneurial work to get there.
            </p>
          </div>

          {/* Current Positions - Below Abstract */}
          <div className="mt-6">
            <h2 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-3 pb-1">EDUCATION</h2>
            <div className="bg-white/5 border border-bloomberg-border p-3">
              <div className="font-bold text-bloomberg-yellow">Indian Institute of Technology (IIT), Mandi</div>
              <div className="text-gray-300">Bachelor of Technology - Bioengineering (Major)</div>
              <div className="text-gray-300">Minor: Intelligent Systems (AI)</div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Card & Focus Tags */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Resume Download Box - Added at the top of right column */}
          <div className="border border-bloomberg-orange bg-bloomberg-orange/5 p-4 text-center">
             <h3 className="text-bloomberg-orange font-bold mb-2 text-xs">OFFICIAL RESUME</h3>
             <a 
               href="https://drive.google.com/file/d/1iY8q1Up1qMs-E-o7XqPvAo9qfAAZtLda/view?usp=sharing" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block bg-bloomberg-orange text-black font-bold px-6 py-2 text-xs hover:bg-bloomberg-orangeBright transition-colors"
             >
               DOWNLOAD PDF &lt;GO&gt;
             </a>
          </div>

          {/* Contact Card */}
          <div className="border border-bloomberg-border">
            <div className="bg-bloomberg-gray px-2 py-1 text-bloomberg-orange font-bold text-xs border-b border-bloomberg-border">
              CONTACT CARD
            </div>
            <div className="p-3 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">LOC:</span>
                <span className="text-white">Noida, UP / Mandi, HP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">PHONE:</span>
                <span className="text-white">+91 9910329901</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">EMAIL:</span>
                <a href="mailto:devanshg.iitm@gmail.com" className="text-bloomberg-cyan hover:underline">devanshg.iitm@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Focus Tags */}
          <div className="border border-bloomberg-border">
            <div className="bg-bloomberg-gray px-2 py-1 text-bloomberg-orange font-bold text-xs border-b border-bloomberg-border">
              FOCUS TAGS
            </div>
            <div className="p-3 flex flex-wrap gap-2">
              <span className="bg-bloomberg-gray border border-bloomberg-border px-2 py-0.5 text-[10px] text-bloomberg-cyan">IB / PE</span>
              <span className="bg-bloomberg-gray border border-bloomberg-border px-2 py-0.5 text-[10px] text-bloomberg-cyan">M&A</span>
              <span className="bg-bloomberg-gray border border-bloomberg-border px-2 py-0.5 text-[10px] text-bloomberg-cyan">QUANT</span>
              <span className="bg-bloomberg-gray border border-bloomberg-border px-2 py-0.5 text-[10px] text-bloomberg-cyan">AI STRATEGY</span>
            </div>
          </div>

          {/* Links */}
          <div className="border border-bloomberg-border">
            <div className="bg-bloomberg-gray px-2 py-1 text-bloomberg-orange font-bold text-xs border-b border-bloomberg-border">
              PROFILES
            </div>
            <div className="p-3 space-y-2 text-xs">
              <div>
                <a href="https://www.linkedin.com/in/devansh-garg-92888a241" target="_blank" rel="noopener noreferrer" className="text-bloomberg-cyan hover:underline">LinkedIn</a>
              </div>
              <div>
                <a href="https://github.com/ThePredictiveDev" target="_blank" rel="noopener noreferrer" className="text-bloomberg-cyan hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioPanel;
