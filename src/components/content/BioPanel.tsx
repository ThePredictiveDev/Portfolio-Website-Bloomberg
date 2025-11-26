const BioPanel = () => {
  return (
    <div className="h-full flex flex-col gap-6 text-bloomberg-text font-mono text-sm">
      {/* Header Info */}
      <div className="border-b border-bloomberg-border pb-4">
        <h1 className="text-2xl font-bold text-bloomberg-orange mb-1">DEVANSH GARG</h1>
        <div className="text-bloomberg-blue-300">Educated in AI, Building in Finance</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Education & Contact */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-2">CURRENT POSITIONS</h2>
            <div className="mb-2">
              <div className="font-bold">Indian Institute of Technology (IIT), Mandi</div>
              <div>Bachelor of Technology - Bioengineering (Major)</div>
              <div>Minor: Intelligent Systems (AI)</div>
              <div className="text-bloomberg-yellow mt-1">CLASS OF 2027</div>
            </div>
          </div>

          <div>
            <h2 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-2">CONTACT</h2>
            <div className="flex flex-col gap-1">
              <div>LinkedIn: <a href="https://www.linkedin.com/in/devansh-garg-92888a241" target="_blank" rel="noopener noreferrer" className="text-bloomberg-cyan hover:underline">devansh-garg-92888a241</a></div>
              <div>GitHub: <a href="https://github.com/ThePredictiveDev" target="_blank" rel="noopener noreferrer" className="text-bloomberg-cyan hover:underline">ThePredictiveDev</a></div>
              <div>Email: <a href="mailto:devanshg.iitm@gmail.com" className="text-bloomberg-cyan hover:underline">devanshg.iitm@gmail.com</a></div>
              <div>Phone: +91 9910329901</div>
            </div>
          </div>
          
          <div>
             <h2 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-2">LOCATED</h2>
             <div className="text-bloomberg-yellow">NOIDA, UP / MANDI, HP</div>
          </div>
        </div>

        {/* Right Column: Abstract */}
        <div>
          <h2 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-2">ABSTRACT / BIO</h2>
          <div className="flex flex-col gap-4 text-justify leading-relaxed">
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
        </div>
      </div>
    </div>
  );
};

export default BioPanel;
