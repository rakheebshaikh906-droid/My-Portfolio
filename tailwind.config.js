/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080B10',
          900: '#0A0E14',
          850: '#0D1219',
          800: '#111826',
          700: '#161F2E',
          600: '#1F2937',
          500: '#2A3648',
        },

        fog: {
          100: '#E8ECF3',
          300: '#C4CCDA',
          500: '#8B93A7',
          700: '#5B6478',
        },

        signal: {
          teal: '#5EEAD4',
          amber: '#F5A524',
        },
      },

      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },

      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(94,234,212,0.12), transparent)',
      },

      keyframes: {
        spinSlow: {
          from: {
            transform: 'rotateX(58deg) rotateZ(45deg)',
          },
          to: {
            transform: 'rotateX(58deg) rotateZ(405deg)',
          },
        },

        pulseTrace: {
          '0%, 100%': {
            opacity: 0.35,
          },
          '50%': {
            opacity: 1,
          },
        },

        dash: {
          from: {
            strokeDashoffset: '240',
          },
          to: {
            strokeDashoffset: '0',
          },
        },

        floatSlow: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-8px)',
          },
        },

        riseIn: {
          from: {
            opacity: 0,
            transform: 'translateY(18px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        spinSlow: 'spinSlow 12s linear infinite',
        pulseTrace: 'pulseTrace 2.4s ease-in-out infinite',
        dash: 'dash 2.6s ease-out forwards',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        riseIn: 'riseIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },

  plugins: [],
}