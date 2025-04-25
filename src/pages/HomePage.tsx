import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0B1F] via-[#1a1668] to-[#0A0B1F] z-0" />
      <div className="absolute inset-0 bg-[url('/section@3x.png')] bg-cover bg-center opacity-20 mix-blend-soft-light z-1" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl text-center space-y-8 animate-fade-in">
          {/* Highlight text */}
          <div className="flex items-center justify-center space-x-2 text-white/80">
            <AutoAwesomeIcon className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide">AI MODEL COMPARISON TOOL</span>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-clash-display font-semibold leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-purple-300 bg-clip-text text-transparent">
              Choose the Right LLM
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-white bg-clip-text text-transparent">
              for your Use-Case
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Compare different language models side by side and find the perfect match for your specific needs
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              className="group"
              sx={{
                backgroundColor: 'white',
                color: '#0A0B1F',
                '&:hover': {
                  backgroundColor: '#f8f8f8',
                  transform: 'translateY(-2px)',
                },
                padding: '16px 32px',
                borderRadius: '9999px',
                fontSize: '1.125rem',
                fontFamily: 'Clash Grotesk',
                fontWeight: 500,
                textTransform: 'none',
                boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease-in-out',
              }}
              onClick={() => navigate('/compare')}
            >
              Try Now
            </Button>
            
            <Button
              variant="outlined"
              startIcon={<CompareArrowsIcon />}
              sx={{
                borderColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.4)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                },
                padding: '16px 32px',
                borderRadius: '9999px',
                fontSize: '1.125rem',
                fontFamily: 'Clash Grotesk',
                fontWeight: 500,
                textTransform: 'none',
                transition: 'all 0.2s ease-in-out',
              }}
              onClick={() => navigate('/compare')}
            >
              View Models
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            {[
              { title: 'Side-by-Side Comparison', description: 'Compare multiple models simultaneously' },
              { title: 'Detailed Analysis', description: 'Get insights into model capabilities and performance' },
              { title: 'Easy Selection', description: 'Find the best model for your specific use case' }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-white text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0B1F] to-transparent z-2" />
    </div>
  );
};

export default HomePage;