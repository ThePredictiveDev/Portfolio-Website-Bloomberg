import { useTerminal } from '../../context/TerminalContext';

const HelpPanel = () => {
  const { runCommand } = useTerminal();

  const commands = [
    { cmd: 'BIO <GO>', desc: 'View Executive Profile & Bio' },
    { cmd: 'WORK <GO>', desc: 'Professional Experience' },
    { cmd: 'LEADERSHIP <GO>', desc: 'Leadership & Initiatives' },
    { cmd: 'PAPERS <GO>', desc: 'Research Papers & Publications' },
    { cmd: 'PROJ <GO>', desc: 'Proprietary Projects' },
    { cmd: 'CERTS <GO>', desc: 'Professional Certifications' },
    { cmd: 'CASES <GO>', desc: 'Case Studies & Deal Flow' },
    { cmd: 'CONTACT <GO>', desc: 'Contact Information' },
  ];

  const funCommands = [
    { cmd: 'PDF <GO>', desc: 'Download Resume (PDF)' },
    { cmd: 'CRASH <GO>', desc: 'Simulate Market Crash' },
    { cmd: 'MOON <GO>', desc: 'Simulate Bull Run' },
    { cmd: 'VOL <GO>', desc: 'High Volatility Mode' },
    { cmd: 'RESET <GO>', desc: 'Reset Market Simulation' },
  ];

  return (
    <div className="h-full flex flex-col font-mono text-sm overflow-y-auto">
      <div className="border-b border-bloomberg-border pb-4 mb-4">
        <h1 className="text-2xl font-bold text-bloomberg-orange mb-1">TERMINAL HELP</h1>
        <div className="text-bloomberg-text">Command Reference & Shortcuts</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
           <h2 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-4 pb-1">NAVIGATION COMMANDS</h2>
           <div className="space-y-2">
             {commands.map((item, idx) => (
               <div 
                 key={idx} 
                 className="flex justify-between group hover:bg-white/5 p-1 cursor-pointer"
                 onClick={() => runCommand(item.cmd.split(' ')[0])}
               >
                 <span className="text-bloomberg-cyan font-bold">{item.cmd}</span>
                 <span className="text-gray-400">{item.desc}</span>
               </div>
             ))}
           </div>
        </div>

        <div>
           <h2 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-4 pb-1">SYSTEM & SIMULATION</h2>
           <div className="space-y-2">
             {funCommands.map((item, idx) => (
               <div 
                 key={idx} 
                 className="flex justify-between group hover:bg-white/5 p-1 cursor-pointer"
                 onClick={() => runCommand(item.cmd.split(' ')[0])}
               >
                 <span className="text-bloomberg-yellow font-bold">{item.cmd}</span>
                 <span className="text-gray-400">{item.desc}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPanel;
