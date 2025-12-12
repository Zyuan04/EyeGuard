import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface DashboardProps {
  onExit: () => void;
}

export function Dashboard({ onExit }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sessionTime, setSessionTime] = useState(0);
  const [strain, setStrain] = useState(48);
  const [blinks, setBlinks] = useState(12);
  const [distance, setDistance] = useState(24);
  const [alerts, setAlerts] = useState<string[]>(["System initialized."]);
  const [breakTime, setBreakTime] = useState(20);
  const [isBreakActive, setIsBreakActive] = useState(false);

  // Session Timer
  useEffect(() => {
    const timer = setInterval(() => setSessionTime(t => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulation Loop
  useEffect(() => {
    const sim = setInterval(() => {
      setStrain(Math.floor(Math.random() * 30) + 30);
      setBlinks(Math.floor(Math.random() * 5) + 10);
      const dists = [22, 23, 24, 25, 18, 24, 32];
      setDistance(dists[Math.floor(Math.random() * dists.length)]);
    }, 4000);
    return () => clearInterval(sim);
  }, []);

  // Break Timer
  useEffect(() => {
    let interval: any;
    if (isBreakActive && breakTime > 0) {
      interval = setInterval(() => setBreakTime(t => t - 1), 1000);
    } else if (breakTime === 0) {
      setIsBreakActive(false);
      setBreakTime(20);
      addAlert("Break Complete!");
    }
    return () => clearInterval(interval);
  }, [isBreakActive, breakTime]);

  const addAlert = (msg: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setAlerts(prev => [`${time} - ${msg}`, ...prev].slice(0, 10));
  };

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}m ${s}s`;
  };

  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'eye-strain', icon: '👁️', label: 'Strain Relief' },
    { id: 'break-reminders', icon: '⏳', label: 'Smart Breaks' },
    { id: 'distance', icon: '📏', label: 'Distance' },
  ];

  return (
    <div className="fixed inset-0 bg-[#050511] text-white font-sans overflow-hidden z-50 flex">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#6C5DD3] rounded-full blur-[80px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-[#00E096] rounded-full blur-[80px] opacity-10"></div>
      </div>

      {/* Sidebar */}
      <div className="w-[80px] md:w-[260px] bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col p-4 md:p-6 z-10 transition-all">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#6C5DD3] to-[#8E84F5] rounded-xl flex items-center justify-center text-xl shadow-lg shadow-[#6C5DD3]/30">👁️</div>
          <span className="hidden md:block font-bold text-xl tracking-tight">EyeGuard</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all ${
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-[#6C5DD3]/20 to-transparent text-[#8E84F5] border-l-4 border-[#6C5DD3]' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden md:block font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <button onClick={onExit} className="mt-auto flex items-center gap-4 px-4 py-3.5 text-slate-400 hover:text-red-400 transition-colors">
            <X size={20} />
            <span className="hidden md:block font-medium text-sm">Exit Demo</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto z-10">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {navItems.find(n => n.id === activeTab)?.label}
            </h1>
            <p className="text-slate-400 text-sm">Real-time ergonomic telemetry active.</p>
          </div>
          <div className="text-right hidden sm:block">
             <div className="text-slate-400 text-sm font-medium">{new Date().toLocaleDateString()}</div>
             <div className="text-[#6C5DD3] text-xs mt-1 font-bold animate-pulse">● LIVE CONNECTION</div>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Hero Card */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="relative z-10 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Wellness Score</h2>
                <p className="text-slate-400 text-sm mb-4 max-w-xs">Your ergonomic health is optimal. Blink rate within safe parameters.</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00E096]/10 border border-[#00E096]/30 text-[#00E096] rounded-full text-xs font-bold">
                  <div className="w-2 h-2 bg-current rounded-full"></div> Monitoring Active
                </div>
              </div>
              <div className="relative w-32 h-32 flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full border-[6px] border-white/5"></div>
                 <div className="absolute inset-0 rounded-full border-[6px] border-[#00E096] border-l-transparent border-b-transparent -rotate-45 shadow-[0_0_20px_rgba(0,224,150,0.4)] transition-all duration-1000" style={{ transform: `rotate(${strain * 3.6}deg)` }}></div>
                 <span className="text-4xl font-bold">88</span>
              </div>
            </div>

            {/* Metrics Column */}
            <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                    <h3 className="text-sm font-bold text-white mb-4">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-2xl p-4 text-center">
                            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-1">{blinks}</div>
                            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Blinks/min</div>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-4 text-center">
                            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-1">{formatTime(sessionTime)}</div>
                            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Session</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alert Feed */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                 <h3 className="text-sm font-bold text-white mb-4">Live Feed</h3>
                 <div className="space-y-3 max-h-40 overflow-y-auto custom-scrollbar">
                    {alerts.map((alert, i) => (
                        <div key={i} className="flex gap-4 text-sm text-slate-400 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                            <span>{alert}</span>
                        </div>
                    ))}
                 </div>
            </div>
            
             <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center transition-colors ${distance < 20 ? 'border-red-500/50 bg-red-500/10' : ''}`}>
                 <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Distance</div>
                 <div className="text-4xl font-bold mb-2">{distance}"</div>
                 <div className={`text-xs font-bold ${distance < 20 ? 'text-red-400' : 'text-[#00E096]'}`}>
                     {distance < 20 ? '⚠ Too Close' : '● Optimal'}
                 </div>
            </div>
          </div>
        )}

        {activeTab === 'eye-strain' && (
             <div className="grid lg:grid-cols-2 gap-8 h-full">
                 <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl flex flex-col items-center justify-center p-10 text-center relative overflow-hidden">
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                         <div className="w-64 h-64 border border-[#6C5DD3]/30 rounded-full radar-pulse"></div>
                         <div className="absolute w-48 h-48 border border-[#6C5DD3]/50 rounded-full radar-pulse" style={{animationDelay: '1s'}}></div>
                     </div>
                     <div className="text-8xl mb-6 relative z-10 drop-shadow-[0_0_30px_rgba(108,93,211,0.6)]">👁️</div>
                     <h2 className="text-4xl font-bold mb-2">{strain}%</h2>
                     <p className="text-slate-400 mb-8">Current Ocular Stress</p>
                     <div className="w-full max-w-xs bg-white/10 h-2 rounded-full overflow-hidden">
                         <div className="h-full bg-[#6C5DD3] shadow-[0_0_15px_#6C5DD3]" style={{ width: `${strain}%`, transition: 'width 1s' }}></div>
                     </div>
                 </div>
                 <div className="space-y-6">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                        <h3 className="text-lg font-bold mb-6">AI Suggestions</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start text-slate-300 text-sm leading-relaxed">
                                <div className="text-[#00E096]">✓</div>
                                <p>Blink rate is slightly low. Try to blink consciously during loading screens.</p>
                            </div>
                            <div className="flex gap-4 items-start text-slate-300 text-sm leading-relaxed">
                                <div className="text-[#00E096]">✓</div>
                                <p>Ambient light is low. Monitor brightness has been auto-adjusted to 65%.</p>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
        )}

        {activeTab === 'break-reminders' && (
            <div className="flex items-center justify-center h-[calc(100%-100px)]">
                 <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 text-center max-w-lg w-full">
                     <div className="text-6xl mb-6">⏳</div>
                     <h2 className="text-2xl font-bold mb-2">Micro-Break</h2>
                     <p className="text-slate-400 mb-8">Look 20 feet away for 20 seconds.</p>
                     
                     <div className="text-7xl font-mono font-bold text-white mb-10 tracking-wider">
                         00:{breakTime.toString().padStart(2, '0')}
                     </div>
                     
                     <div className="flex gap-4 justify-center">
                         {!isBreakActive ? (
                            <button onClick={() => { setIsBreakActive(true); addAlert("Break Started"); }} className="px-8 py-3 bg-gradient-to-r from-[#6C5DD3] to-[#8E84F5] rounded-xl font-bold shadow-lg shadow-[#6C5DD3]/30 hover:scale-105 transition-transform">
                                Start Timer
                            </button>
                         ) : (
                            <button onClick={() => setIsBreakActive(false)} className="px-8 py-3 bg-white/10 rounded-xl font-bold border border-white/20 hover:bg-white/20">
                                Stop
                            </button>
                         )}
                     </div>
                 </div>
            </div>
        )}

        {activeTab === 'distance' && (
            <div className="flex flex-col items-center justify-center h-[calc(100%-100px)]">
                <div className="relative w-full max-w-lg aspect-video bg-black rounded-3xl border-2 border-white/10 overflow-hidden mb-8 shadow-2xl">
                     <div className="absolute top-0 left-0 w-full h-1 bg-[#00E096] shadow-[0_0_20px_#00E096] scan-line opacity-50"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                         <div className={`w-32 h-40 border-4 rounded-3xl opacity-50 ${distance < 20 ? 'border-red-500' : 'border-[#00E096]'}`}></div>
                     </div>
                     <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-xs text-[#00E096] font-mono">CAM_01 // ACTIVE</div>
                </div>
                
                <div className="text-center">
                    <div className="text-6xl font-bold mb-2">{distance}"</div>
                    <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Current Distance</p>
                </div>
            </div>
        )}

      </div>

      {/* Floating Timer Widget */}
      <div className="fixed bottom-8 right-8 bg-[#050511]/90 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="font-mono text-lg font-bold">{new Date(sessionTime * 1000).toISOString().substr(11, 8)}</span>
      </div>
    </div>
  );
}