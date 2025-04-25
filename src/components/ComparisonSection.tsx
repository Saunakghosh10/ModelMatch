import React, { useState } from 'react';
import { Box } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import GridViewIcon from '@mui/icons-material/GridView';

interface Model {
  id: string;
  name: string;
  provider: string;
  description: string;
  isSelected: boolean;
}

const availableModels: Model[] = [
  { id: 'gpt-35', name: 'GPT-3.5-Turbo', provider: 'OpenAI', description: 'Fast and cost-effective', isSelected: true },
  { id: 'gpt-4', name: 'GPT-4-Turbo', provider: 'OpenAI', description: 'Most capable model', isSelected: false },
  { id: 'mistral-tiny', name: 'Mistral-Tiny', provider: 'Mistral AI', description: 'Efficient and compact', isSelected: true },
  { id: 'mistral-small', name: 'Mistral-Small', provider: 'Mistral AI', description: 'Balanced performance', isSelected: false },
  { id: 'mistral-medium', name: 'Mistral-Medium', provider: 'Mistral AI', description: 'Enhanced capabilities', isSelected: false },
  { id: 'claude-3', name: 'Claude 3 Opus', provider: 'Anthropic', description: 'Latest generation', isSelected: false },
  { id: 'gemini-pro', name: 'Gemini Pro', provider: 'Google', description: 'Advanced reasoning', isSelected: false },
  { id: 'llama-2', name: 'Llama 2', provider: 'Meta', description: 'Open source model', isSelected: false },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`model-tabpanel-${index}`}
      aria-labelledby={`model-tab-${index}`}
      {...other}
      className="animate-fade-in"
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const ComparisonSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('SYSTEM PROMPT');
  const [userInput, setUserInput] = useState('');
  const [selectedModels, setSelectedModels] = useState<Model[]>(availableModels);
  const [viewMode, setViewMode] = useState<'grid' | 'split'>('split');

  const tabs = ['SYSTEM PROMPT', 'CONFIGURATION', 'TOOLS', 'MODELS'];

  const toggleModelSelection = (modelId: string) => {
    setSelectedModels(prevModels => 
      prevModels.map(model => ({
        ...model,
        isSelected: model.id === modelId ? !model.isSelected : model.isSelected
      }))
    );
  };

  const activeModels = selectedModels.filter(model => model.isSelected);

  const handleViewModeToggle = () => {
    setViewMode(current => current === 'split' ? 'grid' : 'split');
  };

  return (
    <div className="space-y-6">
      {/* Top Configuration Section */}
      <div className="bg-white/[0.02] rounded-2xl border border-white/[0.05] backdrop-blur-sm">
        {/* Custom Tabs */}
        <div className="flex border-b border-white/[0.05] overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm tracking-wide transition-all duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? 'text-white border-b-2 border-white bg-white/[0.02]'
                  : 'text-white/40 hover:text-white/60 hover:bg-white/[0.02]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === 'SYSTEM PROMPT' && (
            <div className="space-y-4">
              <div className="relative">
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="w-full h-48 bg-white/[0.02] rounded-xl border border-white/10 p-4 text-white/90 placeholder-white/30 text-sm resize-none focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all duration-200"
                  placeholder="Enter your system prompt here..."
                />
                <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                  <button 
                    className="p-2 text-white/40 hover:text-white/90 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
                    onClick={() => navigator.clipboard.writeText(userInput)}
                  >
                    <ContentCopyRoundedIcon fontSize="small" />
                  </button>
                  <button 
                    className="p-2 text-white/40 hover:text-white/90 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
                    onClick={() => setUserInput('')}
                  >
                    <span className="material-icons-outlined text-sm">clear</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-white/40 bg-white/[0.02] p-3 rounded-lg">
                <span className="material-icons-outlined text-sm">tips_and_updates</span>
                <span>Use clear and specific instructions to guide the model's behavior</span>
              </div>
            </div>
          )}

          {activeTab === 'CONFIGURATION' && (
            <div className="space-y-8">
              {[
                {
                  name: 'Temperature',
                  description: 'Controls randomness in the output',
                  type: 'range',
                  min: 0,
                  max: 100,
                  defaultValue: 70
                },
                {
                  name: 'Max Tokens',
                  description: 'Maximum length of the response',
                  type: 'number',
                  min: 1,
                  max: 4096,
                  defaultValue: 100
                },
                {
                  name: 'Top P',
                  description: 'Controls diversity of the output',
                  type: 'range',
                  min: 0,
                  max: 100,
                  defaultValue: 90
                }
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200">
                  <div>
                    <p className="text-sm text-white/90 font-medium">{setting.name}</p>
                    <p className="text-xs text-white/40 mt-1">{setting.description}</p>
                  </div>
                  {setting.type === 'range' ? (
                    <div className="w-48 flex items-center space-x-4">
                      <input
                        type="range"
                        min={setting.min}
                        max={setting.max}
                        defaultValue={setting.defaultValue}
                        className="flex-1 accent-white/80"
                      />
                      <span className="text-sm text-white/60 w-8">{setting.defaultValue}</span>
                    </div>
                  ) : (
                    <input
                      type="number"
                      min={setting.min}
                      max={setting.max}
                      defaultValue={setting.defaultValue}
                      className="w-24 bg-white/5 rounded-lg px-3 py-2 text-sm text-white/90 border border-white/10 focus:outline-none focus:border-white/20 transition-all duration-200"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'TOOLS' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'Code Completion', icon: 'code' },
                { name: 'Text Generation', icon: 'text_fields' },
                { name: 'Translation', icon: 'translate' },
                { name: 'Summarization', icon: 'summarize' },
                { name: 'Image Analysis', icon: 'image_search' },
                { name: 'Data Analysis', icon: 'analytics' },
                { name: 'Chat Bot', icon: 'chat' },
                { name: 'Q&A', icon: 'help_outline' }
              ].map((tool, index) => (
                <button
                  key={index}
                  className="p-4 text-left text-white/80 hover:text-white bg-white/[0.02] hover:bg-white/[0.04] rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group"
                >
                  <span className="material-icons-outlined mb-2 text-white/40 group-hover:text-white/90 transition-colors duration-200">
                    {tool.icon}
                  </span>
                  <p className="text-sm font-medium">{tool.name}</p>
                </button>
              ))}
            </div>
          )}

          {activeTab === 'MODELS' && (
            <>
              {/* Model Selection Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-sm font-medium text-white/90">Selected Models: {activeModels.length}</h3>
                  <p className="text-xs text-white/40 mt-1">Select models to compare side by side</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleViewModeToggle}
                    className="p-2 text-white/60 hover:text-white/90 rounded-lg hover:bg-white/[0.05] transition-colors duration-200"
                    title={viewMode === 'split' ? 'Switch to Grid View' : 'Switch to Split View'}
                  >
                    {viewMode === 'split' ? <GridViewIcon fontSize="small" /> : <CompareArrowsIcon fontSize="small" />}
                  </button>
                </div>
              </div>

              {/* Model Grid */}
              <div className="grid grid-cols-2 gap-4">
                {selectedModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => toggleModelSelection(model.id)}
                    className={`group p-4 rounded-xl border transition-all duration-300 text-left relative overflow-hidden ${
                      model.isSelected
                        ? 'border-white/40 bg-white/[0.08] shadow-lg shadow-white/5'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Selection Indicator Overlay */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r from-white/5 to-transparent transition-opacity duration-300 ${
                        model.isSelected ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    
                    <div className="relative flex justify-between items-start">
                      <div>
                        <h4 className={`text-sm font-medium transition-colors duration-300 ${
                          model.isSelected ? 'text-white' : 'text-white/90'
                        }`}>{model.name}</h4>
                        <p className="text-xs text-white/40 mt-1">{model.provider}</p>
                        <p className="text-xs text-white/60 mt-2">{model.description}</p>
                      </div>
                      {/* Selection Indicator Dot */}
                      <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        model.isSelected 
                          ? 'border-white bg-white scale-100' 
                          : 'border-white/20 bg-transparent scale-90'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Comparison Section */}
      {activeModels.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeModels.map((model) => (
            <div 
              key={model.id}
              className="bg-white/[0.02] rounded-xl border border-white/10 p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white/90">{model.name}</h3>
                  <p className="text-xs text-white/40">{model.provider}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-white/40 hover:text-white/90 rounded-lg hover:bg-white/[0.05] transition-all duration-200">
                    <ContentCopyRoundedIcon fontSize="small" />
                  </button>
                  <button className="p-2 text-white/40 hover:text-white/90 rounded-lg hover:bg-white/[0.05] transition-all duration-200">
                    <PlayArrowRoundedIcon fontSize="small" />
                  </button>
                  <button className="p-2 text-white/40 hover:text-white/90 rounded-lg hover:bg-white/[0.05] transition-all duration-200">
                    <SettingsOutlinedIcon fontSize="small" />
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white/[0.02] rounded-lg border border-white/10 p-4">
                <p className="text-sm text-white/40">Response will appear here...</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComparisonSection;