import React from 'react';
import { Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-[#0A0B1F] to-[#1B1B3D] text-white px-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-clash-display font-semibold mb-8 leading-tight">
          Choose the Right LLM for your Use-Case
        </h1>
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          sx={{
            backgroundColor: 'white',
            color: '#0A0B1F',
            '&:hover': {
              backgroundColor: '#f8f8f8',
            },
            padding: '12px 32px',
            borderRadius: '9999px',
            textTransform: 'none',
            fontSize: '1.125rem',
            fontFamily: 'Clash Grotesk',
            fontWeight: 500,
          }}
          onClick={() => {
            const compareSection = document.getElementById('compare-section');
            compareSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Try Now
        </Button>
      </div>
    </div>
  );
};

export default HeroSection; 