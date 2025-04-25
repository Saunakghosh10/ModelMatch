import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ComparisonSection from '../components/ComparisonSection';

const ComparisonPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0B1F] text-white">
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0B1F]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center text-white/80 hover:text-white transition-colors duration-200"
            >
              <IconButton
                size="small"
                sx={{
                  color: 'inherit',
                  padding: '4px',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.05)' },
                }}
              >
                <ArrowBack fontSize="small" />
              </IconButton>
              <span className="ml-2 text-sm font-clash-grotesk">Back to Home</span>
            </Link>
            <h1 className="text-lg font-clash-display text-white/90">Compare LLM Models</h1>
          </div>

          {/* Save button with subtle styling */}
          <button className="px-4 py-1.5 text-sm text-white/80 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all duration-200 font-clash-grotesk">
            Save Comparison
          </button>
        </div>
      </header>

      {/* Main content with proper spacing */}
      <main className="pt-20 pb-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Tabs and content */}
          <ComparisonSection />
        </div>
      </main>

      {/* Subtle footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0B1F] to-transparent py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs text-white/40 text-center font-clash-grotesk">
            Results may vary based on model versions and configurations
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComparisonPage; 