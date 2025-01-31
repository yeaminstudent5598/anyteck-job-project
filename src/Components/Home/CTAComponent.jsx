import React from 'react';

const CTAComponent = () => {
  return (
    <section
      className="relative w-full h-[60vh] lg:h-[530px] overflow-hidden"
      style={{
        background: "linear-gradient(to right, #1f80f0, #0059bf)",
        clipPath: "polygon(0 17%, 100% 62%, 100% 100%, 0% 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        style={{ clipPath: "polygon(0 17%, 100% 62%, 100% 100%, 0% 100%)" }}
      >
        <defs>
          {/* ... (Gradients - same as before) */}
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e9ea" />
            <stop offset="100%" stopColor="#1f80f0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="100%" stopColor="#f06595" />
          </linearGradient>
        </defs>
        <g className="opacity-70">
          {/* All Shapes Here */}
          <path
            d="M0 0 C 200 100, 500 0, 700 200 L 0 400 Z"
            fill="url(#gradient1)"
            style={{ animation: "moveShape1 15s linear infinite alternate" }}
          />
          <path
            d="M 1920 0 C 1720 100, 1420 0, 1220 200 L 1920 400 Z"
            fill="url(#gradient1)"
            style={{ animation: "moveShape2 20s linear infinite alternate-reverse" }}
          />
          <path
            d="M 50 50 L 200 150 L 50 250 Z"
            fill="white"
            opacity={0.5}
            style={{ animation: "rotateShape 10s linear infinite" }}
          />
          <path
            d="M 1870 50 L 1720 150 L 1870 250 Z"
            fill="white"
            opacity={0.5}
            style={{ animation: "rotateShape 15s linear infinite reverse" }}
          />
          <circle
            cx="200"
            cy="100"
            r="50"
            fill="url(#gradient2)"
            style={{ animation: "pulse 12s linear infinite alternate" }}
          />
          <rect
            x="1000"
            y="500"
            width="100"
            height="50"
            fill="white"
            opacity={0.8}
            style={{ animation: "slide 18s linear infinite" }}
          />
          <ellipse
            cx="500"
            cy="700"
            rx="80"
            ry="40"
            fill="url(#gradient1)"
            style={{ animation: "scale 14s linear infinite alternate" }}
          />
          <polygon
            points="100,10 40,198 190,78 10,78 160,198"
            fill="white"
            opacity={0.6}
            style={{ animation: "skewShape 16s linear infinite" }}
          />

          {/* ... Add ALL your SVG shapes here ... */}
          {/* ... (You can even add many more shapes directly here) ... */}
          <path d="M 100 100 C 200 50, 300 150, 400 100" fill="white" opacity={0.7} style={{animation: "moveShape1 25s linear infinite alternate"}} />
          <circle cx="1500" cy="200" r="30" fill="url(#gradient2)" style={{animation: "pulse 18s linear infinite"}} />
          {/* ... and so on ... */}

        </g>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-white px-6 lg:px-20 z-10">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl lg:text-5xl font-bold">Legacy no longer</h2>
          <p className="mt-4 text-lg">
            Talk to us to find out how we can transform your organization for the future.
          </p>
          <a
            className="mt-6 inline-block py-3 px-6 shadow-lg bg-orange-600 hover:bg-orange-700 transition-all text-white font-medium"
            href="/en/contact-us"
          >
            Contact Us &gt;
          </a>
        </div>
      </div>
    </section>
  );
};



export default CTAComponent;