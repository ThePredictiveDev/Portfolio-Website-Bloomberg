import { useEffect } from 'react';
import TopBar from './components/layout/TopBar';
import BottomBar from './components/layout/BottomBar';
import SidePanel from './components/layout/SidePanel';
import Panel from './components/layout/Panel';
import { useTerminal } from './context/TerminalContext';

// Content
import BioPanel from './components/content/BioPanel';
import WorkPanel from './components/content/WorkPanel';
import PapersPanel from './components/content/PapersPanel';
import ProjectsPanel from './components/content/ProjectsPanel';
import CertsPanel from './components/content/CertsPanel';
import CasesPanel from './components/content/CasesPanel';
import ContactPanel from './components/content/ContactPanel';
import LeadershipPanel from './components/content/LeadershipPanel';
import HelpPanel from './components/content/HelpPanel';

function App() {
  const { activePanel, setActivePanel } = useTerminal();

  // Map panel IDs to titles and components
  const panels = {
    'BIO': { title: 'F1 BIO | EXECUTIVE PROFILE', component: <BioPanel /> },
    'WORK': { title: 'F2 WORK EXPERIENCE', component: <WorkPanel /> },
    'LEADERSHIP': { title: 'F3 LEADERSHIP EXPERIENCE', component: <LeadershipPanel /> },
    'PAPERS': { title: 'F4 RESEARCH WORK', component: <PapersPanel /> },
    'PROJ': { title: 'F5 PROJECTS', component: <ProjectsPanel /> },
    'CERTS': { title: 'F6 CERTIFICATIONS', component: <CertsPanel /> },
    'CASES': { title: 'F7 CASE STUDIES', component: <CasesPanel /> },
    'CONTACT': { title: 'F8 CONTACT | CONNECT', component: <ContactPanel /> },
    'HELP': { title: 'F9 TERMINAL HELP', component: <HelpPanel /> },
  };

  const handleKeyDown = (e: KeyboardEvent) => {
     // Function keys mapping
     if (e.key === 'F1') { e.preventDefault(); setActivePanel('BIO'); }
     if (e.key === 'F2') { e.preventDefault(); setActivePanel('WORK'); }
     if (e.key === 'F3') { e.preventDefault(); setActivePanel('LEADERSHIP'); }
     if (e.key === 'F4') { e.preventDefault(); setActivePanel('PAPERS'); }
     if (e.key === 'F5') { e.preventDefault(); setActivePanel('PROJ'); }
     if (e.key === 'F6') { e.preventDefault(); setActivePanel('CERTS'); }
     if (e.key === 'F7') { e.preventDefault(); setActivePanel('CASES'); }
     if (e.key === 'F8') { e.preventDefault(); setActivePanel('CONTACT'); }
     if (e.key === 'F9') { e.preventDefault(); setActivePanel('HELP'); }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentPanel = panels[activePanel as keyof typeof panels] || panels['BIO'];

  return (
    <div className="h-screen w-screen flex flex-col bg-bloomberg-black text-bloomberg-text overflow-hidden relative">
      <TopBar />
      
      <div className="flex-1 flex overflow-hidden relative">
        {/* Main Content Area */}
        <div className="flex-1 relative bg-black p-1 min-w-0"> {/* Added min-w-0 to prevent flex item overflow issues */}
           {/* We use a "Panel" component but make it fill the space effectively */}
           <Panel 
             id="MAIN" 
             title={currentPanel.title} 
             isActive={true} 
             onClick={() => {}}
             // Fixed full size minus margins for the "tiled" look
             width="100%"
             height="100%"
           >
             {currentPanel.component}
           </Panel>
        </div>

        {/* Side Panel - Increased Width & Responsive */}
        <div className="hidden md:block w-96 xl:w-[30%] h-full flex-shrink-0">
           <SidePanel />
        </div>
      </div>

      <BottomBar />
      
      {/* Scanline Effect Overlay */}
      <div className="pointer-events-none absolute inset-0 z-50 scanline opacity-10"></div>
    </div>
  );
}

export default App;
