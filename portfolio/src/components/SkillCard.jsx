import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SkillCard = ({ image, name, percent }) => {
  const circleRef = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    // Animate strokeDashoffset for circular progress
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    gsap.set(circleRef.current, { strokeDasharray: circumference });
    gsap.fromTo(
      circleRef.current,
      { strokeDashoffset: circumference },
      { strokeDashoffset: offset, duration: 1.2, ease: "power2.out" }
    );

    // Animate number count-up
    gsap.fromTo(
      valueRef.current,
      { innerText: 0 },
      {
        innerText: percent,
        duration: 1.2,
        ease: "power2.out",
        snap: { innerText: 1 },
      }
    );
  }, [percent]);

  return (
    <div className="skill-card relative flex flex-col items-center group cursor-pointer">
      {/* Circular Progress */}
      <svg className="w-28 h-28 transform -rotate-90">
        <circle
          cx="56"
          cy="56"
          r="45"
          stroke="#2e2e2e"
          strokeWidth="10"
          fill="none"
        />
        <circle
          ref={circleRef}
          cx="56"
          cy="56"
          r="45"
          stroke="url(#gradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Percentage */}
      <span
        ref={valueRef}
        className="absolute text-xl font-bold text-white pointer-events-none"
        style={{ top: "38px" }}
      >
        0
      </span>

      {/* Skill Icon */}
      <img
        src={image}
        alt={name}
        className="absolute w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ top: "40px" }}
      />

      {/* Label */}
      <p className="mt-3 text-lg font-medium">{name}</p>
    </div>
  );
};

export default SkillCard;
