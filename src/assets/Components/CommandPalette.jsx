import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import resume from '../Sanchit_Chaurasiya.pdf';

const CommandPalette = ({ onCopyToast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const actions = [
    {
      id: 'nav-about',
      category: 'Navigation',
      label: 'About Me',
      shortcut: 'A',
      perform: () => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else navigate('/#about');
      },
    },
    {
      id: 'nav-skills',
      category: 'Navigation',
      label: 'Skills & Tech Stack',
      shortcut: 'S',
      perform: () => {
        const el = document.getElementById('skills');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else navigate('/#skills');
      },
    },
    {
      id: 'nav-exp',
      category: 'Navigation',
      label: 'Experience & Career',
      shortcut: 'E',
      perform: () => {
        const el = document.getElementById('experience');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else navigate('/#experience');
      },
    },
    {
      id: 'nav-proj',
      category: 'Navigation',
      label: 'Selected Projects',
      shortcut: 'P',
      perform: () => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else navigate('/#projects');
      },
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      label: 'Contact Section',
      shortcut: 'C',
      perform: () => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else navigate('/#contact');
      },
    },
    {
      id: 'proj-gx',
      category: 'Projects',
      label: 'GraphicX Studio (Production Website)',
      perform: () => navigate('/project/GraphicXStudio'),
    },
    {
      id: 'proj-dk',
      category: 'Projects',
      label: 'DK Computer (E-Commerce Platform)',
      perform: () => navigate('/project/DKComputer'),
    },
    {
      id: 'proj-ai',
      category: 'Projects',
      label: 'AI Chat Assistant (Gemini API)',
      perform: () => navigate('/project/AiChatBot'),
    },
    {
      id: 'proj-sn',
      category: 'Projects',
      label: 'Skill Navigator (Learning Roadmap)',
      perform: () => navigate('/project/Skillnavigator'),
    },
    {
      id: 'act-resume',
      category: 'Actions',
      label: 'View / Download Resume (PDF)',
      shortcut: '↵',
      perform: () => window.open(resume, '_blank'),
    },
    {
      id: 'act-email',
      category: 'Actions',
      label: 'Copy Email (Sanchitchaurasiya90@gmail.com)',
      shortcut: 'Copy',
      perform: () => {
        navigator.clipboard.writeText('Sanchitchaurasiya90@gmail.com');
        onCopyToast?.('Email copied to clipboard');
      },
    },
    {
      id: 'act-phone',
      category: 'Actions',
      label: 'Copy Phone (+91 7096781871)',
      shortcut: 'Copy',
      perform: () => {
        navigator.clipboard.writeText('+91 7096781871');
        onCopyToast?.('Phone number copied to clipboard');
      },
    },
    {
      id: 'act-github',
      category: 'Social',
      label: 'Open GitHub Profile (@Sanchit7096)',
      perform: () => window.open('https://github.com/Sanchit7096', '_blank'),
    },
    {
      id: 'act-linkedin',
      category: 'Social',
      label: 'Open LinkedIn Profile',
      perform: () => window.open('https://www.linkedin.com/in/sanchit-chaurasiya-7b8107252/', '_blank'),
    },
  ];

  const filtered = actions.filter((act) =>
    act.label.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  // Global keyboard shortcut: Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) {
            setQuery('');
            setSelectedIndex(0);
          }
          return !prev;
        });
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSelect = (act) => {
    setIsOpen(false);
    act.perform();
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  return (
    <>
      {/* Subtle Floating ⌘K Trigger Button */}
      <button
        type="button"
        onClick={() => {
          setQuery('');
          setSelectedIndex(0);
          setIsOpen(true);
        }}
        aria-label="Open Command Palette"
        className="fixed bottom-6 right-6 z-40 hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white/70 hover:text-white text-xs border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-xl select-none"
      >
        <span className="font-mono text-[11px] bg-white/10 px-1.5 py-0.5 rounded border border-white/15">
          ⌘K
        </span>
        <span className="text-[11px] font-medium">Quick Nav</span>
      </button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-lg rounded-2xl bg-[#120F17] border border-white/20 shadow-2xl overflow-hidden z-10 text-white"
            >
              {/* Search Bar */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
                <svg
                  className="w-4 h-4 text-gray-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Type a command or jump to section..."
                  className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
                />
                <kbd className="hidden sm:inline-block font-mono text-[10px] text-gray-400 bg-white/10 px-1.5 py-0.5 rounded border border-white/10">
                  ESC
                </kbd>
              </div>

              {/* Items List */}
              <div className="max-h-72 overflow-y-auto p-2 divide-y divide-white/5">
                {filtered.length === 0 ? (
                  <p className="p-4 text-center text-xs text-gray-500">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                ) : (
                  filtered.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs transition-colors duration-150 ${
                        idx === selectedIndex
                          ? 'bg-white/15 text-white'
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                          {item.category}
                        </span>
                        <span className="font-medium text-white/90">{item.label}</span>
                      </div>
                      {item.shortcut && (
                        <span className="text-[10px] font-mono text-gray-400 bg-white/10 px-1.5 py-0.5 rounded border border-white/10">
                          {item.shortcut}
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>

              {/* Footer info */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 text-[10px] text-gray-500 font-mono">
                <span>Navigate: ↑ ↓</span>
                <span>Select: Enter</span>
                <span>Close: ESC</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
