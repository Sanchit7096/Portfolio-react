import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CrazyButton = ({ href, children, className = '', ...props }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const glow = glowRef.current;
    if (!container || !text) return;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Magnetic movement for container (moves 35% towards cursor)
      gsap.to(container, {
        x: x * 0.35,
        y: y * 0.35,
        rotation: x * 0.05, // Subtle dynamic rotation based on cursor
        scale: 1.05,
        duration: 0.3,
        ease: 'power3.out',
      });

      // Parallax effect for text (moves 15% towards cursor for depth)
      gsap.to(text, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.3,
        ease: 'power3.out',
      });

      // Glow element follow
      if (glow) {
        gsap.to(glow, {
          x: x * 0.5,
          y: y * 0.5,
          opacity: 0.6,
          scale: 1.1,
          duration: 0.4,
          ease: 'power3.out',
        });
      }
    };

    const onMouseLeave = () => {
      // Elastic spring back to original position on leave
      gsap.to(container, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: 'elastic.out(1.1, 0.4)',
      });

      gsap.to(text, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1.1, 0.4)',
      });

      if (glow) {
        gsap.to(glow, {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
        });
      }
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const handleCreateParticles = (e) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const particleCount = 20;
    const colors = ['#ffffff', '#000000', '#cccccc', '#f3f4f6', '#9ca3af'];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 rounded-full pointer-events-none z-50';
      particle.style.left = `${clickX}px`;
      particle.style.top = `${clickY}px`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(particle);

      // Random angle and speed
      const angle = Math.random() * Math.PI * 2;
      const velocity = 50 + Math.random() * 80;
      const destinationX = Math.cos(angle) * velocity;
      const destinationY = Math.sin(angle) * velocity;

      // Dynamic rotation and sizing
      gsap.to(particle, {
        x: destinationX,
        y: destinationY,
        opacity: 0,
        scale: 0.1,
        duration: 0.6 + Math.random() * 0.6,
        ease: 'power4.out',
        onComplete: () => particle.remove(),
      });
    }
  };

  return (
    <div className="relative inline-block z-20">
      {/* Background glow shadow trailing behind the button */}
      <span
        ref={glowRef}
        className="absolute -inset-1.5 rounded-xl bg-white/40 opacity-0 blur-lg -z-10 transition-opacity duration-300 pointer-events-none"
      />

      <a
        ref={containerRef}
        href={href}
        onClick={handleCreateParticles}
        className={`relative group inline-flex items-center justify-center px-8 py-3.5 mt-6 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-black bg-white overflow-hidden shadow-2xl border border-white/20 hover:border-white/60 select-none transition-all duration-300 ${className}`}
        style={{ transformStyle: 'preserve-3d' }}
        {...props}
      >
        {/* Dynamic sliding black backdrop */}
        <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />

        {/* Parallax button label */}
        <span
          ref={textRef}
          className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white"
          style={{ transform: 'translateZ(10px)' }}
        >
          {children}
        </span>
      </a>
    </div>
  );
};

export default CrazyButton;
