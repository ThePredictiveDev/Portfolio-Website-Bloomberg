import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-screen bg-black text-orange-500 font-mono flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold mb-4">SYSTEM ERROR</h1>
          <p className="text-xl mb-8">TERMINAL CRASHED. PLEASE RELOAD.</p>
          <div className="border border-orange-500 p-4 max-w-2xl overflow-auto bg-gray-900 text-white">
            <p className="font-bold text-red-500 mb-2">ERROR DETAILS:</p>
            <pre className="whitespace-pre-wrap text-xs">
              {this.state.error && this.state.error.toString()}
            </pre>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 px-6 py-2 bg-orange-500 text-black font-bold hover:bg-orange-400"
          >
            REBOOT SYSTEM &lt;GO&gt;
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

