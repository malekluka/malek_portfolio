import clsx from 'clsx';
import { m } from 'framer-motion';

function AnimatedPortrait() {
  return (
    <div className={clsx('relative h-[590px] w-[603px]')}>
      <div
        className={clsx(
          'from-accent-400/20 via-accent-400/0 absolute right-0 top-0 h-[590px] w-[500px] rounded-lg bg-gradient-to-t',
          'dark:from-accent-600/10 dark:via-accent-600/0'
        )}
      >
        <div className={clsx('absolute bottom-0 right-0 overflow-hidden')}>
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={clsx('relative w-[450px] h-[520px]')}
          >
            {/* Animated background circles */}
            <m.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl"
            />

            {/* Main portrait SVG */}
            <svg
              viewBox="0 0 400 500"
              className="relative z-10 drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background gradient */}
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d4a574" />
                  <stop offset="100%" stopColor="#c99861" />
                </linearGradient>
                <linearGradient id="hairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2d2d2d" />
                  <stop offset="100%" stopColor="#1a1a1a" />
                </linearGradient>
              </defs>

              {/* Background circle */}
              <m.circle
                cx="200"
                cy="250"
                r="180"
                fill="url(#bgGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />

              {/* Shoulders/Neck */}
              <m.path
                d="M 120 420 Q 140 380 200 370 Q 260 380 280 420 L 290 500 L 110 500 Z"
                fill="#c43c6e"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />

              {/* Neck */}
              <m.rect
                x="170"
                y="320"
                width="60"
                height="60"
                fill="url(#skinGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />

              {/* Face */}
              <m.ellipse
                cx="200"
                cy="240"
                rx="85"
                ry="105"
                fill="url(#skinGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
              />

              {/* Hair - Top */}
              <m.path
                d="M 115 180 Q 115 140 150 120 Q 200 100 250 120 Q 285 140 285 180 L 280 200 Q 275 160 200 150 Q 125 160 120 200 Z"
                fill="url(#hairGradient)"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />

              {/* Hair - Sides */}
              <m.path
                d="M 115 180 Q 110 220 120 260 L 130 250 Q 125 220 125 190 Z"
                fill="url(#hairGradient)"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
              <m.path
                d="M 285 180 Q 290 220 280 260 L 270 250 Q 275 220 275 190 Z"
                fill="url(#hairGradient)"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />

              {/* Eyebrows */}
              <m.path
                d="M 155 210 Q 165 205 175 210"
                stroke="#3d3d3d"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
              <m.path
                d="M 225 210 Q 235 205 245 210"
                stroke="#3d3d3d"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              />

              {/* Eyes */}
              <m.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              >
                {/* Left eye */}
                <ellipse cx="165" cy="235" rx="12" ry="15" fill="white" />
                <ellipse cx="167" cy="235" rx="8" ry="12" fill="#4a3428" />
                <ellipse cx="168" cy="233" rx="4" ry="6" fill="black" />
                <ellipse cx="169" cy="231" rx="2" ry="3" fill="white" opacity="0.8" />

                {/* Right eye */}
                <ellipse cx="235" cy="235" rx="12" ry="15" fill="white" />
                <ellipse cx="233" cy="235" rx="8" ry="12" fill="#4a3428" />
                <ellipse cx="232" cy="233" rx="4" ry="6" fill="black" />
                <ellipse cx="231" cy="231" rx="2" ry="3" fill="white" opacity="0.8" />
              </m.g>

              {/* Nose */}
              <m.path
                d="M 200 235 L 200 265 M 195 265 Q 200 270 205 265"
                stroke="#b88f5f"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              />

              {/* Smile */}
              <m.path
                d="M 170 290 Q 200 305 230 290"
                stroke="#d97c9f"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              />

              {/* Facial hair - subtle beard */}
              <m.path
                d="M 150 280 Q 150 310 165 320 Q 200 330 235 320 Q 250 310 250 280"
                stroke="#3d3d3d"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
            </svg>

            {/* Floating code elements around portrait */}
            <m.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-8 px-3 py-2 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-500/30"
            >
              <span className="text-purple-300 font-mono text-xs">&lt;React /&gt;</span>
            </m.div>

            <m.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-40 right-8 px-3 py-2 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/30"
            >
              <span className="text-blue-300 font-mono text-xs">Next.js</span>
            </m.div>

            <m.div
              animate={{
                y: [0, -12, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-32 left-12 px-3 py-2 bg-green-500/20 backdrop-blur-sm rounded-lg border border-green-500/30"
            >
              <span className="text-green-300 font-mono text-xs">TypeScript</span>
            </m.div>

            <m.div
              animate={{
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute top-60 left-4 px-3 py-2 bg-pink-500/20 backdrop-blur-sm rounded-lg border border-pink-500/30"
            >
              <span className="text-pink-300 font-mono text-xs">{'{ }'}</span>
            </m.div>

            <m.div
              animate={{
                y: [0, -14, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-40 right-16 px-3 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg border border-yellow-500/30"
            >
              <span className="text-yellow-300 font-mono text-xs">const</span>
            </m.div>

            {/* Particle effects */}
            <m.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-24 right-24 w-2 h-2 rounded-full bg-purple-400"
            />
            <m.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-48 left-20 w-3 h-3 rounded-full bg-blue-400"
            />
            <m.div
              animate={{
                y: [0, -12, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-36 right-20 w-2 h-2 rounded-full bg-green-400"
            />
          </m.div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedPortrait;