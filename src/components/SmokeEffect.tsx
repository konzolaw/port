"use client";
import { useState, useEffect } from "react";

export default function SmokeEffect() {
  const [showSmoke, setShowSmoke] = useState(true);

  useEffect(() => {
    // Smoke effect: show for 30s, hide for 30s, repeat
    const toggleSmoke = () => {
      setShowSmoke(prev => !prev);
    };

    const smokeInterval = setInterval(toggleSmoke, 30000); // Toggle every 30 seconds

    return () => clearInterval(smokeInterval);
  }, []);

  return (
    <div className={`absolute inset-0 z-[1] pointer-events-none overflow-hidden transition-opacity duration-1000 ${showSmoke ? 'opacity-100' : 'opacity-0'}`}>
      {/* First Smoke Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        style={{ filter: 'contrast(1.2) brightness(1.1)' }}
      >
        <source src="/images/smoke.mp4" type="video/mp4" />
      </video>
      
      {/* Second Smoke Video - Offset for layered effect */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        style={{ 
          filter: 'contrast(1.3) brightness(1.2)',
          transform: 'scale(1.1) rotate(180deg)'
        }}
      >
        <source src="/images/smoke1.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
