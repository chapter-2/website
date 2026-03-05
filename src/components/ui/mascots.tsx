import React from "react";

// AXEL (The Mechanic)
export const Axel = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 800 800" className={className}>
    <g id="axel-mascot-sketch">
      <ellipse
        cx="400"
        cy="740"
        rx="180"
        ry="25"
        fill="#000"
        opacity="0.08"
        filter="url(#roughen)"
      />
      <g id="arm-right">
        <path
          d="M 520 400 Q 680 420 640 540"
          fill="none"
          stroke="#2DD4BF"
          strokeWidth="50"
          strokeLinecap="round"
          filter="url(#roughen)"
        />
      </g>
      <g id="legs">
        <path
          d="M 280 600 L 270 700 Q 300 730 340 700 L 350 600 Z"
          fill="#2DD4BF"
          stroke="#0F172A"
          strokeWidth="6"
          filter="url(#roughen)"
        />
        <path
          d="M 520 600 L 530 700 Q 500 730 460 700 L 450 600 Z"
          fill="#2DD4BF"
          stroke="#0F172A"
          strokeWidth="6"
          filter="url(#roughen)"
        />
      </g>
      <g id="body" filter="url(#softShadow)">
        <path
          d="M 220 380 C 220 180, 280 150, 400 150 C 520 150, 580 180, 580 380 C 580 580, 530 650, 400 650 C 270 650, 220 580, 220 380 Z"
          fill="#2DD4BF"
          stroke="#0F172A"
          strokeWidth="6"
          strokeLinejoin="round"
          filter="url(#roughen)"
        />
        <path
          d="M 220 380 C 220 480, 230 620, 270 640 C 310 640, 320 580, 320 500 C 320 400, 290 350, 290 350 L 240 350 C 220 360, 220 380, 220 380 Z M 580 380 C 580 480, 570 620, 530 640 C 490 640, 480 580, 480 500 C 480 400, 510 350, 510 350 L 560 350 C 580 360, 580 380, 580 380 Z"
          fill="#FB7185"
          stroke="#0F172A"
          strokeWidth="6"
          filter="url(#roughen)"
        />
        <rect
          x="245"
          y="550"
          width="55"
          height="35"
          rx="5"
          fill="#E11D48"
          opacity="0.4"
          filter="url(#roughen)"
        />
        <rect
          x="500"
          y="550"
          width="55"
          height="35"
          rx="5"
          fill="#E11D48"
          opacity="0.4"
          filter="url(#roughen)"
        />
      </g>
      <g id="horns" filter="url(#roughen)">
        <path
          d="M 320 220 Q 240 100 190 130 Q 250 180 270 240 Z"
          fill="#FBBF24"
          stroke="#0F172A"
          strokeWidth="6"
        />
        <path
          d="M 480 220 Q 560 100 610 130 Q 550 180 530 240 Z"
          fill="#FBBF24"
          stroke="#0F172A"
          strokeWidth="6"
        />
      </g>
      <g id="eye" filter="url(#roughen)">
        <circle
          cx="400"
          cy="320"
          r="75"
          fill="#F8FAFC"
          stroke="#0F172A"
          strokeWidth="6"
        />
        <circle
          cx="400"
          cy="320"
          r="35"
          fill="#D946EF"
          stroke="#0F172A"
          strokeWidth="5"
        />
        <circle cx="400" cy="320" r="20" fill="#09090B" />
        <circle cx="390" cy="305" r="10" fill="#FFFFFF" />
        <circle cx="415" cy="330" r="4" fill="#FFFFFF" />
      </g>
      <path
        id="mouth"
        d="M 340 460 Q 370 480 400 460 Q 430 480 460 460"
        fill="none"
        stroke="#09090B"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#roughen)"
      />
      <g id="arm-left">
        <path
          d="M 280 400 Q 120 420 160 540"
          fill="none"
          stroke="#2DD4BF"
          strokeWidth="50"
          strokeLinecap="round"
          filter="url(#roughen)"
        />
      </g>
      <g id="hand-wrench-group">
        <g id="wrench" transform="translate(10, -10)">
          <rect
            x="130"
            y="320"
            width="30"
            height="180"
            rx="15"
            fill="#94A3B8"
            stroke="#0F172A"
            strokeWidth="5"
            filter="url(#roughen)"
          />
          <path
            d="M 145 315 A 45 45 0 1 0 145 245 Q 160 260 160 280 Q 160 300 145 315 Z"
            fill="#94A3B8"
            stroke="#0F172A"
            strokeWidth="6"
            filter="url(#roughen) url(#softShadow)"
          />
          <circle
            cx="145"
            cy="510"
            r="30"
            fill="#94A3B8"
            stroke="#0F172A"
            strokeWidth="6"
            filter="url(#roughen)"
          />
          <circle cx="145" cy="510" r="15" fill="#09090B" />
        </g>
        <g id="hand-left">
          <circle
            cx="160"
            cy="510"
            r="45"
            fill="#2DD4BF"
            stroke="#0F172A"
            strokeWidth="6"
            filter="url(#roughen)"
          />
        </g>
      </g>
    </g>
  </svg>
);

// GIZMO (The Data Orb)
export const Gizmo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 800 800" className={className}>
    <g id="gizmo-mascot-sketch">
      <ellipse
        cx="400"
        cy="740"
        rx="160"
        ry="20"
        fill="#000"
        opacity="0.08"
        filter="url(#roughen)"
      />
      <g id="arm-back-left">
        <path
          d="M 280 480 Q 150 550 200 620"
          fill="none"
          stroke="#FB923C"
          strokeWidth="40"
          strokeLinecap="round"
          filter="url(#roughen)"
        />
        <circle
          cx="200"
          cy="620"
          r="30"
          fill="#FB923C"
          stroke="#0F172A"
          strokeWidth="5"
          filter="url(#roughen)"
        />
      </g>
      <g id="arm-back-right">
        <path
          d="M 520 480 Q 650 550 600 620"
          fill="none"
          stroke="#FB923C"
          strokeWidth="40"
          strokeLinecap="round"
          filter="url(#roughen)"
        />
        <circle
          cx="600"
          cy="620"
          r="30"
          fill="#FB923C"
          stroke="#0F172A"
          strokeWidth="5"
          filter="url(#roughen)"
        />
      </g>
      <g id="legs">
        <path
          d="M 320 620 L 300 700 Q 330 730 360 700 L 360 620 Z"
          fill="#FB923C"
          stroke="#0F172A"
          strokeWidth="6"
          filter="url(#roughen)"
        />
        <path
          d="M 480 620 L 500 700 Q 470 730 440 700 L 440 620 Z"
          fill="#FB923C"
          stroke="#0F172A"
          strokeWidth="6"
          filter="url(#roughen)"
        />
      </g>
      <g id="antennas">
        <path
          d="M 330 200 Q 250 100 280 80 M 470 200 Q 550 100 520 80"
          fill="none"
          stroke="#E64A19"
          strokeWidth="12"
          strokeLinecap="round"
          filter="url(#roughen)"
        />
        <circle
          cx="280"
          cy="80"
          r="20"
          fill="#FDE047"
          stroke="#0F172A"
          strokeWidth="6"
          filter="url(#roughen)"
        />
        <circle
          cx="520"
          cy="80"
          r="20"
          fill="#FDE047"
          stroke="#0F172A"
          strokeWidth="6"
          filter="url(#roughen)"
        />
      </g>
      <g id="body" filter="url(#softShadow)">
        <rect
          x="250"
          y="180"
          width="300"
          height="460"
          rx="150"
          fill="#FB923C"
          stroke="#0F172A"
          strokeWidth="6"
          filter="url(#roughen)"
        />
        <rect
          id="belly"
          x="290"
          y="400"
          width="220"
          height="200"
          rx="110"
          fill="#6EE7B7"
          stroke="#0F172A"
          strokeWidth="5"
          filter="url(#roughen)"
        />
      </g>
      <g id="eye" filter="url(#roughen)">
        <circle
          cx="400"
          cy="300"
          r="80"
          fill="#FFFFFF"
          stroke="#C2410C"
          strokeWidth="15"
        />
        <circle
          cx="400"
          cy="300"
          r="40"
          fill="#10B981"
          stroke="#0F172A"
          strokeWidth="5"
        />
        <circle cx="400" cy="300" r="20" fill="#0F766E" />
        <circle cx="390" cy="285" r="10" fill="#FFFFFF" />
        <circle cx="415" cy="310" r="5" fill="#FFFFFF" />
      </g>
      <path
        id="mouth-gizmo"
        d="M 360 410 Q 380 430 400 410 Q 420 430 440 410"
        fill="none"
        stroke="#78350F"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#roughen)"
      />
      <g id="arm-front-left">
        <path
          d="M 260 380 Q 120 350 180 250"
          fill="none"
          stroke="#FB923C"
          strokeWidth="45"
          strokeLinecap="round"
          filter="url(#roughen)"
        />
        <circle
          cx="180"
          cy="250"
          r="35"
          fill="#FB923C"
          stroke="#0F172A"
          strokeWidth="5"
          filter="url(#roughen)"
        />
      </g>
      <g id="arm-front-right">
        <path
          d="M 540 380 Q 680 350 620 250"
          fill="none"
          stroke="#FB923C"
          strokeWidth="45"
          strokeLinecap="round"
          filter="url(#roughen)"
        />
        <circle
          cx="620"
          cy="250"
          r="35"
          fill="#FB923C"
          stroke="#0F172A"
          strokeWidth="5"
          filter="url(#roughen)"
        />
      </g>
      <g id="data-orb" transform="translate(400, 160)">
        <circle
          cx="0"
          cy="0"
          r="90"
          fill="#E879F9"
          stroke="#4A044E"
          strokeWidth="6"
          filter="url(#roughen) url(#softShadow)"
        />
        <ellipse
          cx="0"
          cy="0"
          rx="70"
          ry="20"
          fill="none"
          stroke="#FDF4FF"
          strokeWidth="5"
          transform="rotate(25)"
          filter="url(#roughen)"
        />
        <ellipse
          cx="0"
          cy="0"
          rx="70"
          ry="20"
          fill="none"
          stroke="#FDF4FF"
          strokeWidth="5"
          transform="rotate(-45)"
          filter="url(#roughen)"
        />
        <circle
          cx="-50"
          cy="-30"
          r="8"
          fill="#FDE047"
          stroke="#0F172A"
          strokeWidth="4"
          filter="url(#roughen)"
        />
        <circle
          cx="60"
          cy="20"
          r="10"
          fill="#67E8F9"
          stroke="#0F172A"
          strokeWidth="4"
          filter="url(#roughen)"
        />
      </g>
    </g>
  </svg>
);

// ZIP (The Connectivity Ghost)
export const Zip = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 800 800" className={className}>
    <g id="zip-mascot-sketch">
      <ellipse
        cx="400"
        cy="760"
        rx="110"
        ry="18"
        fill="#000"
        opacity="0.06"
        filter="url(#roughen)"
      />
      <path
        d="M395 155 C555 160, 545 360, 505 455 C460 560, 425 630, 398 622 C370 618, 340 555, 290 455 C245 350, 260 145, 395 155 Z"
        fill="#4FD1E5"
        stroke="#0F172A"
        strokeWidth="6"
        strokeLinejoin="round"
        filter="url(#roughen) url(#softShadow)"
      />
      <g id="zip-wings">
        <path
          d="M275 350 Q140 325 185 245 Q230 285 285 325 Z"
          fill="#A5F3FC"
          stroke="#0F172A"
          strokeWidth="4"
          filter="url(#roughen)"
        />
        <path
          d="M525 355 Q660 315 615 255 Q570 290 520 330 Z"
          fill="#A5F3FC"
          stroke="#0F172A"
          strokeWidth="4"
          filter="url(#roughen)"
        />
      </g>
      <circle
        cx="338"
        cy="318"
        r="36"
        fill="#083344"
        stroke="#0F172A"
        strokeWidth="5"
        filter="url(#roughen)"
      />
      <circle
        cx="462"
        cy="322"
        r="34"
        fill="#083344"
        stroke="#0F172A"
        strokeWidth="5"
        filter="url(#roughen)"
      />
      <circle cx="350" cy="305" r="10" fill="#fff" />
      <circle cx="470" cy="305" r="10" fill="#fff" />
      <path
        d="M382 365 Q398 382 402 368 Q410 380 418 362"
        fill="none"
        stroke="#0F172A"
        strokeWidth="5"
        strokeLinecap="round"
        filter="url(#roughen)"
      />
      <g id="zip-arms">
        <path
          d="M295 420 Q325 490 355 478"
          fill="none"
          stroke="#4FD1E5"
          strokeWidth="22"
          strokeLinecap="round"
          filter="url(#roughen)"
        />
        <path
          d="M505 425 Q475 490 448 480"
          fill="none"
          stroke="#4FD1E5"
          strokeWidth="24"
          strokeLinecap="round"
          filter="url(#roughen)"
        />
      </g>
      <g id="zip-chip" transform="translate(0, -10)">
        <rect
          x="350"
          y="430"
          width="100"
          height="100"
          rx="14"
          fill="#1E293B"
          stroke="#0F172A"
          strokeWidth="6"
          filter="url(#roughen) url(#softShadow)"
        />
        <rect
          x="370"
          y="450"
          width="60"
          height="60"
          rx="8"
          fill="#FBBF24"
          stroke="#78350F"
          strokeWidth="4"
          filter="url(#roughen)"
        />
      </g>
    </g>
  </svg>
);

// NOVA (The Visionary - Ideation & Manifestation)
export const Nova = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 800 800" className={className}>
    <g id="nova-mascot-sketch">
      <ellipse
        cx="400"
        cy="740"
        rx="100"
        ry="15"
        fill="#000"
        opacity="0.08"
        filter="url(#roughen)"
      />

      {/* Glowing Rays / Aura */}
      <circle
        id="nova-rays"
        cx="400"
        cy="400"
        r="220"
        fill="none"
        stroke="#FBBF24"
        strokeWidth="12"
        strokeDasharray="30, 40"
        strokeLinecap="round"
        filter="url(#roughen)"
      />

      {/* Main Star Body */}
      <path
        d="M 400 150 C 550 250, 600 400, 500 550 C 400 650, 300 650, 200 550 C 100 400, 250 250, 400 150 Z"
        fill="#FDE047"
        stroke="#0F172A"
        strokeWidth="6"
        filter="url(#roughen) url(#softShadow)"
      />

      {/* Arms reaching up to the sky */}
      <path
        d="M 250 450 Q 150 350 180 250"
        fill="none"
        stroke="#FDE047"
        strokeWidth="25"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#roughen)"
      />
      <path
        d="M 550 450 Q 650 350 620 250"
        fill="none"
        stroke="#FDE047"
        strokeWidth="25"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#roughen)"
      />

      {/* One giant visionary eye */}
      <circle
        cx="400"
        cy="350"
        r="60"
        fill="#FFFFFF"
        stroke="#0F172A"
        strokeWidth="6"
        filter="url(#roughen)"
      />
      <circle
        cx="400"
        cy="330"
        r="25"
        fill="#3B82F6"
        stroke="#0F172A"
        strokeWidth="4"
        filter="url(#roughen)"
      />
      <circle cx="400" cy="330" r="10" fill="#0F172A" />
      <circle cx="390" cy="320" r="8" fill="#FFFFFF" />

      {/* Happy floating smile */}
      <path
        d="M 360 460 Q 400 500 440 460"
        fill="none"
        stroke="#0F172A"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#roughen)"
      />
      <circle
        cx="340"
        cy="430"
        r="15"
        fill="#F87171"
        opacity="0.4"
        filter="url(#roughen)"
      />
      <circle
        cx="460"
        cy="430"
        r="15"
        fill="#F87171"
        opacity="0.4"
        filter="url(#roughen)"
      />
    </g>
  </svg>
);

// BITE (The Guard - Security & Discipline)
export const Bite = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 800 800" className={className}>
    <g id="bite-mascot-sketch">
      <ellipse
        cx="400"
        cy="740"
        rx="160"
        ry="20"
        fill="#000"
        opacity="0.1"
        filter="url(#roughen)"
      />

      {/* Sturdy Blocky Body */}
      <rect
        x="250"
        y="250"
        width="300"
        height="380"
        rx="40"
        fill="#EF4444"
        stroke="#0F172A"
        strokeWidth="6"
        filter="url(#roughen) url(#softShadow)"
      />

      {/* Legs planted firmly */}
      <rect
        x="280"
        y="630"
        width="40"
        height="80"
        rx="10"
        fill="#EF4444"
        stroke="#0F172A"
        strokeWidth="6"
        filter="url(#roughen)"
      />
      <rect
        x="480"
        y="630"
        width="40"
        height="80"
        rx="10"
        fill="#EF4444"
        stroke="#0F172A"
        strokeWidth="6"
        filter="url(#roughen)"
      />

      {/* Tough Eyes */}
      <circle
        cx="330"
        cy="350"
        r="30"
        fill="#FFFFFF"
        stroke="#0F172A"
        strokeWidth="6"
        filter="url(#roughen)"
      />
      <circle
        cx="470"
        cy="350"
        r="30"
        fill="#FFFFFF"
        stroke="#0F172A"
        strokeWidth="6"
        filter="url(#roughen)"
      />
      <circle cx="340" cy="350" r="10" fill="#0F172A" />
      <circle cx="460" cy="350" r="10" fill="#0F172A" />

      {/* Angry/Focused Eyebrows */}
      <path
        d="M 280 320 L 360 340"
        stroke="#0F172A"
        strokeWidth="8"
        strokeLinecap="round"
        filter="url(#roughen)"
      />
      <path
        d="M 520 320 L 440 340"
        stroke="#0F172A"
        strokeWidth="8"
        strokeLinecap="round"
        filter="url(#roughen)"
      />

      {/* Zig-Zag Teeth/Mouth */}
      <path
        d="M 320 450 L 350 480 L 400 440 L 450 480 L 480 450"
        fill="none"
        stroke="#0F172A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#roughen)"
      />

      {/* Crossed Arms (Defensive stance) */}
      <path
        d="M 220 500 Q 400 600 580 500"
        fill="none"
        stroke="#EF4444"
        strokeWidth="45"
        strokeLinecap="round"
        filter="url(#roughen) url(#softShadow)"
      />
      <path
        d="M 220 500 Q 400 600 580 500"
        fill="none"
        stroke="#0F172A"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#roughen)"
      />
    </g>
  </svg>
);

// ECHO (The Communicator - Social & Language)
export const Echo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 800 800" className={className}>
    <g id="echo-mascot-sketch">
      <ellipse
        cx="400"
        cy="740"
        rx="90"
        ry="15"
        fill="#000"
        opacity="0.1"
        filter="url(#roughen)"
      />

      {/* Tall Noodle Body */}
      <rect
        x="320"
        y="180"
        width="160"
        height="480"
        rx="80"
        fill="#818CF8"
        stroke="#0F172A"
        strokeWidth="6"
        filter="url(#roughen) url(#softShadow)"
      />

      {/* Long bendy arms */}
      <path
        d="M 320 400 Q 200 450 250 550"
        fill="none"
        stroke="#818CF8"
        strokeWidth="30"
        strokeLinecap="round"
        filter="url(#roughen)"
      />
      <path
        d="M 480 400 Q 600 450 550 550"
        fill="none"
        stroke="#818CF8"
        strokeWidth="30"
        strokeLinecap="round"
        filter="url(#roughen)"
      />

      {/* Big Headphones */}
      <path
        d="M 280 250 C 280 100, 520 100, 520 250"
        fill="none"
        stroke="#334155"
        strokeWidth="15"
        strokeLinecap="round"
        filter="url(#roughen)"
      />
      <g id="echo-headphones">
        <rect
          x="270"
          y="200"
          width="50"
          height="100"
          rx="20"
          fill="#0F172A"
          filter="url(#roughen)"
        />
        <rect
          x="480"
          y="200"
          width="50"
          height="100"
          rx="20"
          fill="#0F172A"
          filter="url(#roughen)"
        />
      </g>

      {/* Chill Eyes */}
      <path
        d="M 360 280 Q 380 270 400 280"
        fill="none"
        stroke="#0F172A"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#roughen)"
      />
      <path
        d="M 400 280 Q 420 270 440 280"
        fill="none"
        stroke="#0F172A"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#roughen)"
      />

      {/* Speaking Mouth */}
      <circle cx="400" cy="330" r="15" fill="#0F172A" filter="url(#roughen)" />
      <path
        d="M 440 310 Q 460 330 440 350"
        fill="none"
        stroke="#6366F1"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#roughen)"
      />
      <path
        d="M 455 300 Q 485 330 455 360"
        fill="none"
        stroke="#6366F1"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#roughen)"
      />
    </g>
  </svg>
);
