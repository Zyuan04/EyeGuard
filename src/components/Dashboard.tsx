import React, { useState, useEffect } from 'react';
import { X, LayoutDashboard, Eye, Timer, TrendingUp, Move, Brain, Target, FileText, Coffee, Bell } from 'lucide-react';

interface DashboardProps {
  onExit: () => void;
}

export function Dashboard({ onExit }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [strain, setStrain] = useState(48);
  const [blinks, setBlinks] = useState(12);
  const [distance, setDistance] = useState(24);
  const [breakTime, setBreakTime] = useState(20);
  const [isBreakActive, setIsBreakActive] = useState(false);
  const [alerts, setAlerts] = useState<{time: string, msg: string}[]>([
    { time: 'Now', msg: 'System initialized.' }
  ]);

  // Session Timer
  useEffect(() => {
    const timer = setInterval(() => setSessionSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulation Loop for sensors
  useEffect(() => {
    const sim = setInterval(() => {
      setStrain(Math.floor(Math.random() * 30) + 30);
      setBlinks(Math.floor(Math.random() * 5) + 10);
    }, 4000);
    return () => clearInterval(sim);
  }, []);

  // Distance Simulation
  useEffect(() => {
    const sim = setInterval(() => {
      const dists = [22, 23, 24, 25, 18, 24, 32];
      const d = dists[Math.floor(Math.random() * dists.length)];
      setDistance(d);
    }, 6000);
    return () => clearInterval(sim);
  }, []);

  // Break Timer Logic
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
    setAlerts(prev => [{ time, msg }, ...prev].slice(0, 8));
  };

  const formatSessionTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'eye-strain', icon: Eye, label: 'Strain Relief' },
    { id: 'break-reminders', icon: Timer, label: 'Smart Breaks' },
    { id: 'patterns', icon: TrendingUp, label: 'Patterns' },
    { id: 'distance', icon: Move, label: 'Distance' },
    { id: 'fatigue', icon: Brain, label: 'Fatigue AI' },
  ];

  return (
    <div className="fixed inset-0 bg-[#050511] text-white font-sans overflow-hidden z-50 flex flex-col md:flex-row">
      {/* Background Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#6C5DD3] rounded-full blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-[#00E096] rounded-full blur-[100px] opacity-10"></div>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-[260px] bg-white/5 backdrop-blur-2xl border-r border-white/10 flex flex-col p-6 z-10">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#6C5DD3] to-[#8E84F5] rounded-xl flex items-center justify-center text-xl shadow-lg shadow-[#6C5DD3]/30">👁️</div>
          <span className="font-bold text-xl tracking-tight">EyeGuard</span>
        </div>
        
        <nav className="flex-1 space-y-2 overflow-x-auto md:overflow-visible flex md:flex-col gap-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all whitespace-nowrap md:whitespace-normal flex-shrink-0 ${
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-[#6C5DD3]/20 to-transparent text-[#8E84F5] border-l-4 border-[#6C5DD3]' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <button onClick={onExit} className="mt-6 md:mt-auto flex items-center gap-4 px-4 py-3.5 text-slate-400 hover:text-red-400 transition-colors">
            <X size={20} />
            <span className="font-medium text-sm">Exit Demo</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12 overflow-y-auto custom-scrollbar relative z-10">
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-black mb-2 tracking-tight">
              {navItems.find(n => n.id === activeTab)?.label === 'Dashboard' ? 'Command Center' : navItems.find(n => n.id === activeTab)?.label}
            </h1>
            <p className="text-slate-400 text-sm">Real-time ergonomic telemetry active.</p>
          </div>
          <div className="text-right hidden sm:block">
             <div className="text-slate-400 text-sm font-medium">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
             <div className="text-[#6C5DD3] text-xs mt-1 font-bold animate-pulse">● LIVE CONNECTION</div>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Hero Card */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
              <div className="relative z-10 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Wellness Score</h2>
                <p className="text-slate-400 text-sm mb-6 max-w-xs leading-relaxed">Your ergonomic health is currently optimal. Eye blink rate and screen distance are within safe parameters.</p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00E096]/15 border border-[#00E096]/30 text-[#00E096] rounded-full text-xs font-bold">
                  <div className="w-2 h-2 bg-current rounded-full shadow-[0_0_8px_currentColor]"></div> System Monitoring Active
                </div>
              </div>
              <div className="relative w-40 h-40 flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full border-[10px] border-white/5"></div>
                 <div 
                    className="absolute inset-0 rounded-full border-[10px] border-l-transparent border-b-transparent transition-all duration-1000 shadow-[0_0_25px_rgba(0,224,150,0.4)]"
                    style={{ 
                        transform: `rotate(-45deg)`, 
                        borderColor: strain > 60 ? '#FF3D71' : strain > 40 ? '#FFAB00' : '#00E096'
                    }}
                 ></div>
                 <span className="text-5xl font-black">88</span>
              </div>
            </div>

            {/* Quick Controls */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider opacity-60">Quick Controls</h3>
                <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Coffee, label: 'Break', action: () => { setActiveTab('break-reminders'); setIsBreakActive(true); } },
                      { icon: Target, label: 'Calibrate', action: () => addAlert('Sensors recalibrated') },
                      { icon: TrendingUp, label: 'History', action: () => setActiveTab('patterns') },
                      { icon: FileText, label: 'Report', action: () => {} },
                    ].map((btn, i) => (
                      <button key={i} onClick={btn.action} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-[#6C5DD3]/15 hover:border-[#6C5DD3] transition-all group">
                         <btn.icon size={20} className="text-slate-400 group-hover:text-white" />
                         <span className="text-[11px] font-bold text-slate-500 group-hover:text-white">{btn.label}</span>
                      </button>
                    ))}
                </div>
            </div>

            {/* Live Feed */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                 <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider opacity-60">Live Feed</h3>
                 <div className="space-y-4 max-h-[180px] overflow-y-auto custom-scrollbar pr-2">
                    {alerts.map((alert, i) => (
                        <div key={i} className="flex gap-6 text-sm items-center py-2 border-b border-white/5 last:border-0">
                            <span className="font-mono text-xs text-slate-500 w-12">{alert.time}</span>
                            <span className="text-slate-300">{alert.msg}</span>
                        </div>
                    ))}
                 </div>
            </div>

            {/* Secondary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center group hover:bg-white/[0.07] transition-all">
                    <div className="text-4xl font-black mb-1 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">{blinks}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Blinks/min</div>
                </div>
                <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center transition-all ${distance < 20 ? 'border-red-500/50 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.1)]' : ''}`}>
                    <div className="text-4xl font-black mb-1 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">{distance}"</div>
                    <div className={`text-[10px] font-bold uppercase tracking-widest ${distance < 20 ? 'text-red-400' : 'text-[#00E096]'}`}>
                        {distance < 20 ? 'Too Close' : 'Distance'}
                    </div>
                </div>
            </div>
          </div>
        )}

        {activeTab === 'eye-strain' && (
             <div className="grid lg:grid-cols-2 gap-10">
                 <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl flex flex-col items-center justify-center p-12 text-center relative overflow-hidden group">
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                         <div className="w-64 h-64 border border-[#6C5DD3]/30 rounded-full radar-pulse"></div>
                         <div className="absolute w-48 h-48 border border-[#6C5DD3]/50 rounded-full radar-pulse delay-700"></div>
                     </div>
                     <div className="text-8xl mb-6 relative z-10 drop-shadow-[0_0_30px_rgba(108,93,211,0.6)] group-hover:scale-110 transition-transform duration-500">👁️</div>
                     <h2 className="text-5xl font-black mb-2 tracking-tight">{strain}%</h2>
                     <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">Current Ocular Stress</p>
                     
                     <div className="w-full max-w-xs mt-10">
                        <div className="bg-white/10 h-2.5 rounded-full overflow-hidden">
                            <div 
                                className={`h-full transition-all duration-1000 ${strain > 60 ? 'bg-[#FF3D71] shadow-[0_0_15px_#FF3D71]' : strain > 40 ? 'bg-[#FFAB00] shadow-[0_0_15px_#FFAB00]' : 'bg-[#00E096] shadow-[0_0_15px_#00E096]'}`}
                                style={{ width: `${strain}%` }}
                            ></div>
                        </div>
                     </div>
                 </div>

                 <div className="flex flex-col gap-6">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                        <h3 className="text-sm font-bold text-white mb-8 uppercase tracking-widest opacity-60">Live Metrics</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: 'Blinks/min', val: blinks, color: 'white' },
                                { label: 'Focus Time', val: Math.floor(sessionSeconds/60) + 'm', color: 'white' },
                                { label: 'Dimming', val: '65%', color: 'white' },
                                { label: 'Gestures', val: '2x', color: '#FFAB00' },
                            ].map((m, i) => (
                                <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/5 flex flex-col items-center">
                                    <div className="text-2xl font-bold mb-1" style={{color: m.color}}>{m.val}</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{m.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                        <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest opacity-60">AI Recommendations</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 items-center">
                                <div className="text-[#00E096] font-bold">✓</div>
                                <p className="text-slate-300 text-sm">Blink rate detected slightly low. Conscious blinking recommended.</p>
                            </div>
                            <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 items-center">
                                <div className="text-[#00E096] font-bold">✓</div>
                                <p className="text-slate-300 text-sm">Ambient light is low. Monitor brightness auto-adjusted to 65%.</p>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
        )}

        {activeTab === 'break-reminders' && (
            <div className="flex items-center justify-center h-[calc(100%-120px)]">
                 <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-16 text-center max-w-xl w-full hover:border-white/20 transition-all">
                     <div className="text-7xl mb-8">⏳</div>
                     <h2 className="text-3xl font-black mb-2">Micro-Break Status</h2>
                     <p className="text-slate-400 mb-12 text-lg">Look away from your screen for 20 seconds.</p>
                     
                     <div className="text-8xl font-mono font-black text-white mb-12 tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                         00:{breakTime.toString().padStart(2, '0')}
                     </div>
                     
                     <div className="flex gap-6 justify-center">
                         {!isBreakActive ? (
                            <button onClick={() => { setIsBreakActive(true); addAlert("Break Started"); }} className="px-10 py-4 bg-gradient-to-r from-[#6C5DD3] to-[#8E84F5] rounded-2xl font-black shadow-xl shadow-[#6C5DD3]/30 hover:scale-105 transition-transform">
                                Start Timer
                            </button>
                         ) : (
                            <button onClick={() => setIsBreakActive(false)} className="px-10 py-4 bg-white/10 rounded-2xl font-black border border-white/20 hover:bg-white/20 transition-all">
                                Snooze
                            </button>
                         )}
                     </div>
                 </div>
            </div>
        )}

        {activeTab === 'patterns' && (
             <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                    <h3 className="text-sm font-bold text-white mb-10 uppercase tracking-widest opacity-60">Weekly Strain Intensity</h3>
                    <div className="flex items-end gap-3 h-64 px-4">
                        {[40, 60, 30, 80, 50, 90, 45].map((h, i) => (
                            <div key={i} className="flex-1 h-full flex flex-col justify-end group relative">
                                <div 
                                    className={`w-full rounded-t-xl transition-all duration-500 group-hover:brightness-125 ${i === 3 ? 'bg-[#6C5DD3] shadow-[0_0_20px_#6C5DD3]' : 'bg-white/20'}`} 
                                    style={{ height: `${h}%` }}
                                ></div>
                                <div className="text-[10px] text-center mt-4 font-bold text-slate-500 uppercase shrink-0">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                        <div className="text-4xl font-black text-[#8E84F5] mb-2">3.2h</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg Session</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                        <div className="text-4xl font-black text-[#00E096] mb-2">78%</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Health Score</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                        <div className="text-4xl font-black text-[#FFAB00] mb-2">14</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Daily Breaks</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                        <div className="text-4xl font-black text-white mb-2">6h</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Max Streak</div>
                    </div>
                </div>
             </div>
        )}

        {activeTab === 'distance' && (
            <div className="flex flex-col items-center justify-center h-[calc(100%-120px)]">
                <div className="relative w-full max-w-2xl aspect-video bg-black rounded-[40px] border-2 border-white/10 overflow-hidden mb-10 shadow-2xl group">
                     <div className="absolute top-0 left-0 w-full h-1 bg-[#00E096] shadow-[0_0_25px_#00E096] scan-line opacity-60"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                         <div className={`w-32 h-44 border-4 rounded-[40px] transition-all duration-300 ${distance < 20 ? 'border-[#FF3D71] shadow-[0_0_20px_#FF3D71]' : 'border-[#00E096] opacity-40'}`}></div>
                     </div>
                     <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] text-[#00E096] font-mono tracking-widest">
                        CAM_01 // PROXIMITY_ACTIVE
                     </div>
                </div>
                
                <div className="text-center">
                    <div className="text-8xl font-black mb-2 tracking-tighter">{distance}"</div>
                    <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border text-sm font-black uppercase tracking-widest transition-all ${
                        distance < 20 ? 'bg-red-500/10 border-red-500 text-red-400' :
                        distance > 30 ? 'bg-yellow-500/10 border-yellow-500 text-yellow-400' :
                        'bg-green-500/10 border-green-500 text-green-400'
                    }`}>
                        {distance < 20 ? '⚠ Too Close' : distance > 30 ? '⚠ Too Far' : 'Optimal Distance'}
                    </div>
                </div>
            </div>
        )}

        {activeTab === 'fatigue' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: 'Eye Rubbing', val: '2x', icon: '👁️', fill: '30%', color: 'fill-warning' },
                    { title: 'Posture Drop', val: 'Low', icon: '📉', fill: '10%', color: 'fill-success' },
                    { title: 'Squint Rate', val: 'High', icon: '😣', fill: '80%', color: 'fill-danger' },
                    { title: 'Focus Decay', val: 'Normal', icon: '🧠', fill: '45%', color: 'fill-success' },
                ].map((card, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">{card.title}</h3>
                            <span className="text-xl">{card.icon}</span>
                        </div>
                        <div className={`text-4xl font-black mb-4 ${
                            card.color === 'fill-danger' ? 'text-red-400' :
                            card.color === 'fill-warning' ? 'text-yellow-400' :
                            'text-green-400'
                        }`}>{card.val}</div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <div 
                                className={`h-full ${
                                    card.color === 'fill-danger' ? 'bg-[#FF3D71]' :
                                    card.color === 'fill-warning' ? 'bg-[#FFAB00]' :
                                    'bg-[#00E096]'
                                }`} 
                                style={{ width: card.fill }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>

      {/* Persistent Floating Timer Widget */}
      <div className="fixed bottom-10 right-10 bg-black/60 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full shadow-2xl z-[100] flex items-center gap-4 group hover:border-[#6C5DD3]/50 transition-all">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_red]"></div>
          <span className="font-mono text-xl font-black tracking-widest">{formatSessionTime(sessionSeconds)}</span>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}