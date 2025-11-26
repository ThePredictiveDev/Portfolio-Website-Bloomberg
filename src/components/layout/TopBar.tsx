import { useState, useRef, FormEvent } from 'react';
import { useTerminal } from '../../context/TerminalContext';

const TopBar = () => {
  const { runCommand } = useTerminal();
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      runCommand(input);
      setInput('');
    }
  };

  // Reordered function keys based on user request:
  // F1: BIO | F2: WORK | F3: LEADERSHIP | F4: PAPERS | F5: PROJ | F6: CERTS | F7: CASES | F8: CONTACT
  const functionKeys = [
    { key: 'F1', label: 'BIO', cmd: 'BIO' },
    { key: 'F2', label: 'WORK EXPERIENCE', cmd: 'WORK' },
    { key: 'F3', label: 'LEADERSHIP EXPERIENCE', cmd: 'LEADERSHIP' },
    { key: 'F4', label: 'RESEARCH WORK', cmd: 'PAPERS' },
    { key: 'F5', label: 'PROJECTS', cmd: 'PROJ' },
    { key: 'F6', label: 'CERTIFICATIONS', cmd: 'CERTS' },
    { key: 'F7', label: 'CASE STUDIES', cmd: 'CASES' },
    { key: 'F8', label: 'CONTACT', cmd: 'CONTACT' },
    { key: 'F9', label: 'HELP', cmd: 'HELP' },
  ];

  return (
    <div className="flex flex-col w-full bg-bloomberg-black border-b border-bloomberg-border z-50">
      {/* Command Line Section */}
      <div className="flex items-center px-2 py-1 gap-2 h-10">
        <div className="flex-1 flex items-center bg-black border border-bloomberg-border h-full max-w-xl relative">
          <span className="text-bloomberg-orange px-2 font-bold select-none">{'>'}</span>
          <form onSubmit={handleSubmit} className="flex-1 h-full">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value.toUpperCase())}
              className="w-full h-full bg-transparent border-none outline-none text-bloomberg-text font-mono uppercase placeholder-gray-700"
              placeholder="TYPE COMMAND..."
              autoFocus
            />
          </form>
          <button 
            onClick={handleSubmit}
            className="bg-bloomberg-orange text-white px-4 h-full font-bold hover:bg-bloomberg-orangeBright transition-colors text-sm flex items-center"
          >
            &lt;GO&gt;
          </button>
        </div>
        
        {/* Right side helper links or secondary menu could go here */}
        <div className="flex-1 flex justify-end items-center gap-4 text-xs text-bloomberg-text">
          <span>HELP &lt;F9&gt;</span>
        </div>
      </div>

      {/* Function Keys Strip */}
      <div className="flex items-center bg-bloomberg-gray px-1 py-1 gap-1 overflow-x-auto no-scrollbar">
        {functionKeys.map((item) => (
          <button
            key={item.key}
            onClick={() => runCommand(item.cmd)}
            className="flex items-center gap-2 px-3 py-1 bg-black border border-bloomberg-border hover:bg-bloomberg-gray hover:border-bloomberg-orange transition-colors min-w-fit"
          >
            <span className="text-bloomberg-orange font-bold text-xs">{item.key}</span>
            <span className="text-bloomberg-text text-xs font-bold">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
