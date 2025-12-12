import React from 'react';
import { MonitorPlay, Bell, BarChart3, Layers, Play, Download, FileText } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface FinalPageProps {
  onLaunch: () => void;
}

export function FinalPage({ onLaunch }: FinalPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
            <span className="font-bold text-slate-800 text-sm">Final Design</span>
          </div>
          <h1 className="text-slate-900 mb-6 text-5xl font-black tracking-tight">
            Final Deliverable
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Review the final simulation, use case trailer, and project documentation below.
          </p>
        </div>

        {/* 2x2 Grid Layout - Landscape Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10 animate-fade-in-up delay-100">
          
          {/* 1. Interactive Simulation (Wide) */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-3">
               <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                 <MonitorPlay className="text-blue-600" size={20} /> Project Demo
               </h2>
               <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">V1.0.4</span>
            </div>
            
            <div className="relative w-full h-52 rounded-xl overflow-hidden shadow-inner border border-slate-200 group cursor-pointer" onClick={onLaunch}>
               <ImageWithFallback
                src="https://images.unsplash.com/photo-1694919123854-24b74b376da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMGRlc2t8ZW58MXx8fHwxNzY1MzA5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="EyeGuard Interface"
                className="w-full h-full object-cover filter brightness-75 group-hover:brightness-50 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="px-5 py-2 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-2 group-hover:bg-white/30 transition-colors border border-white/20">
                      <Play fill="white" size={16} />
                      <span className="font-bold text-sm">Launch</span>
                  </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4 px-2">
               {[
                { icon: Bell, title: "Smart Alerts" },
                { icon: BarChart3, title: "Live Data" },
                { icon: Layers, title: "AI Analysis" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-500">
                   <f.icon size={14} />
                   <span className="text-xs font-bold">{f.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Video Trailer (Wide) */}
          <div className="bg-slate-900 rounded-3xl shadow-xl shadow-slate-900/20 p-6 flex flex-col h-full text-white relative overflow-hidden justify-between">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>
             
             <div className="flex items-center justify-between mb-3 relative z-10">
                 <h2 className="text-lg font-bold flex items-center gap-2">
                     <Play size={20} className="text-blue-400" fill="currentColor" /> Use Case Scenario
                 </h2>
                 <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-0.5 rounded border border-white/10">1:56</span>
             </div>
                
             <a 
               href="https://youtu.be/hoT5FoRM68c?si=Ol5QEymWiOdEUVUu" 
               target="_blank" 
               rel="noopener noreferrer"
               className="relative w-full h-52 bg-black/50 rounded-xl overflow-hidden border border-white/10 group cursor-pointer shadow-lg z-10 block"
             >
                 <img 
                     src="https://img.youtube.com/vi/hoT5FoRM68c/maxresdefault.jpg"
                     alt="EyeGuard Use Case Scenario Video"
                     className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                        <Play fill="white" size={20} className="ml-1" />
                     </div>
                 </div>
             </a>
             
             <p className="text-slate-400 text-xs mt-3 relative z-10">
               Watch how EyeGuard integrates seamlessly into a daily gaming session.
             </p>
          </div>

          {/* 3. Project Impact Stats (Wide) */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-lg flex flex-col justify-center h-full min-h-[160px]">
             <div className="flex items-center justify-between h-full">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <BarChart3 size={24} />
                   </div>
                   <div>
                       <h3 className="font-bold text-lg leading-tight">Project<br/>Impact</h3>
                   </div>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="grid grid-cols-3 gap-6 text-center">
                    {[
                      { m: "65%", d: "Less Strain" },
                      { m: "4/5", d: "Posture" },
                      { m: "90%", d: "Happy" }
                    ].map((s, i) => (
                      <div key={i}>
                        <div className="text-2xl lg:text-3xl font-black">{s.m}</div>
                        <p className="text-blue-100 text-[10px] uppercase font-bold tracking-wide">{s.d}</p>
                      </div>
                    ))}
                 </div>
             </div>
          </div>

          {/* 4. Project Poster (Wide Horizontal) */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg flex items-center justify-between group hover:border-blue-300 transition-colors h-full min-h-[160px]">
             <div className="flex items-center gap-5">
                 <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors shrink-0">
                     <FileText className="text-blue-600" size={28} />
                 </div>
                 <div>
                     <h3 className="font-bold text-slate-900 text-lg">Project Poster</h3>
                     <p className="text-slate-500 text-sm">High-res PDF (A1)</p>
                 </div>
             </div>
             
             <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm shadow-md hover:shadow-lg">
                 <Download size={16} /> Download
             </button>
          </div>

        </div>

      </div>
    </div>
  );
}