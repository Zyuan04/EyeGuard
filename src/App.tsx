import React, { useState } from 'react';
import { Navigation } from '../src/components/Navigation';
import { HomePage } from '../src/components/HomePage';
import { ProblemPage } from '../src/components/ProblemPage';
import { SolutionPage } from '../src/components/SolutionPage';
import { ProcessPage } from '../src/components/ProcessPage';
import { FinalPage } from '../src/components/FinalPage';
import { Dashboard } from '../src/components/Dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'problem':
        return <ProblemPage />;
      case 'solution':
        return <SolutionPage />;
      case 'process':
        return <ProcessPage />;
      case 'final':
        return <FinalPage onLaunch={() => setCurrentPage('dashboard')} />;
      case 'dashboard':
        return <Dashboard onExit={() => setCurrentPage('home')} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      {currentPage !== 'dashboard' && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
      <main>
        {renderPage()}
      </main>
      
      {currentPage !== 'dashboard' && (
        <footer className="bg-slate-900 text-slate-400 py-12 text-center">
          <p className="text-sm">© 2024 EyeGuard Project. CSC3024 Milestone 4.</p>
        </footer>
      )}
    </div>
  );
}