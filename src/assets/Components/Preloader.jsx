import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const bigCounterRef = useRef(null);
  const smallCounterRef = useRef(null);
  const progressBarRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);
  const countObj = useRef({ val: 0 });

  useEffect(() => {
    const overlay = overlayRef.current;
    const bigCounter = bigCounterRef.current;
    const smallCounter = smallCounterRef.current;
    const bar = progressBarRef.current;
    const name = nameRef.current;
    const subtitle = subtitleRef.current;
    const line = lineRef.current;

    if (!overlay || !bigCounter || !bar) return;

    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        onComplete?.();
      },
    });

    // Phase 1: Count 0 → 100 + progress bar fill
    tl.to(countObj.current, {
      val: 100,
      duration: 2.4,
      ease: 'power2.inOut',
      onUpdate: () => {
        const v = Math.round(countObj.current.val);
        const str = v < 10 ? `0${v}` : `${v}`;
        if (bigCounter) bigCounter.textContent = str;
        if (smallCounter) smallCounter.textContent = str;
      },
    })
      .to(
        bar,
        { scaleX: 1, duration: 2.4, ease: 'power2.inOut' },
        '<'
      )

      // Phase 2: Name clip-path reveal
      .to(
        name,
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          y: 0,
          duration: 0.75,
          ease: 'power4.out',
        },
        '-=0.5'
      )
      .to(
        subtitle,
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.35'
      )

      // Phase 3: Hold
      .to({}, { duration: 0.5 })

      // Phase 4: Fade out inner elements
      .to([bigCounter, name, subtitle, line], {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: 'power3.in',
        stagger: 0.04,
      })

      // Phase 5: Curtain wipes UP
      .to(overlay, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut',
      });

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      style={{ willChange: 'transform' }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-start justify-between px-6 sm:px-10 md:px-16 py-10 md:py-14 overflow-hidden"
    >
      {/* Top-left: brand tag */}
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="text-white/50 text-xs uppercase tracking-[0.25em] font-light">
          Portfolio — Loading
        </span>
      </div>

      {/* Center: faint giant counter */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          ref={bigCounterRef}
          className="font-black text-white leading-none tabular-nums"
          style={{
            fontSize: 'clamp(100px, 22vw, 300px)',
            letterSpacing: '-0.04em',
            opacity: 0.06,
          }}
        >
          00
        </span>
      </div>

      {/* Bottom section */}
      <div className="w-full flex flex-col gap-5">
        {/* Name masked reveal */}
        <div className="overflow-hidden">
          <h1
            ref={nameRef}
            className="text-white font-black uppercase leading-none"
            style={{
              fontSize: 'clamp(32px, 7vw, 96px)',
              clipPath: 'inset(0% 100% 0% 0%)',
              transform: 'translateY(20px)',
              willChange: 'clip-path, transform',
              letterSpacing: '-0.02em',
            }}
          >
            Sanchit Chaurasiya
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.2em] font-light"
          style={{ opacity: 0, transform: 'translateY(12px)', willChange: 'opacity, transform' }}
        >
          Frontend Developer &nbsp;·&nbsp; React &nbsp;·&nbsp; GSAP
        </p>

        {/* Progress track + live % */}
        <div ref={lineRef} className="flex items-center gap-5 mt-1">
          <div className="flex-1 h-px bg-white/15 relative overflow-hidden rounded-full">
            <div
              ref={progressBarRef}
              className="absolute inset-0 bg-white origin-left rounded-full"
              style={{ transform: 'scaleX(0)', willChange: 'transform' }}
            />
          </div>
          <span className="text-white/50 text-xs font-mono tabular-nums w-12 text-right">
            <span ref={smallCounterRef}>00</span>
            <span className="text-white/25">%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
