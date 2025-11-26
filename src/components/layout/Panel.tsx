import { useRef, ReactNode } from 'react';
import Draggable from 'react-draggable';
import { Minus, Square, X } from 'lucide-react';

interface PanelProps {
  title: string;
  id: string;
  children: ReactNode;
  isActive: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  initialPosition?: { x: number; y: number };
  width?: string | number;
  height?: string | number;
  onClick: () => void;
}

const Panel = ({ title, children, isActive, onClose, onMinimize, onMaximize, initialPosition = { x: 0, y: 0 }, width = '100%', height = '100%', onClick }: PanelProps) => {
  const nodeRef = useRef(null);

  return (
    <Draggable
      handle=".panel-header"
      defaultPosition={initialPosition}
      nodeRef={nodeRef}
      onStart={onClick}
    >
      <div 
        ref={nodeRef}
        className={`absolute flex flex-col bg-black border border-bloomberg-border shadow-2xl transition-shadow ${isActive ? 'z-40 border-bloomberg-orange shadow-bloomberg-orange/20' : 'z-10'}`}
        style={{ width, height }}
        onClick={onClick}
      >
        {/* Panel Header */}
        <div className={`panel-header flex items-center justify-between px-2 py-1 cursor-grab active:cursor-grabbing select-none ${isActive ? 'bg-bloomberg-orange' : 'bg-bloomberg-gray'}`}>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 ${isActive ? 'bg-black' : 'bg-bloomberg-orange'}`}></div>
            <span className={`font-bold font-sans text-sm uppercase ${isActive ? 'text-black' : 'text-bloomberg-orange'}`}>{title}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <button onClick={onMinimize} className={`p-0.5 hover:bg-black/20 rounded ${isActive ? 'text-black' : 'text-bloomberg-text'}`}>
              <Minus size={14} />
            </button>
            <button onClick={onMaximize} className={`p-0.5 hover:bg-black/20 rounded ${isActive ? 'text-black' : 'text-bloomberg-text'}`}>
              <Square size={12} />
            </button>
            <button onClick={onClose} className={`p-0.5 hover:bg-black/20 rounded ${isActive ? 'text-black' : 'text-bloomberg-text'}`}>
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Panel Content */}
        <div className="flex-1 overflow-auto p-4 relative custom-scrollbar bg-black">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Panel;
