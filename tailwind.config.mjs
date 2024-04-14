import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
      backgroundImage: {
        'gradient-center': 'radial-gradient(circle at center, #333333d4, #0000007a)',
      },
      backgroundSize: {
        '2em': '.2em .2em',
      },
			fontFamily: {
				// atomic: ["Atomic", "cursive"],
			},
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				accent: "var(--color-accent)",
				twitch: "var(--color-twitch)",
				ice: "var(--color-twitch-ice)",
			},
			screens: {
				xs: "360px",
				...defaultTheme.screens,
				"3xl": "1650px",
			},
			keyframes: {
        lastSlideToLeft: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '50%': {
            transform: 'translateX(-50%)',
          },
          '99%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            display: 'none',
          }
        },
        newSlideToLeft: {
          '0%': {
            transform: 'translateX(100%)',
            display: 'block',
          },
          '50%': {
            transform: 'translateX(50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          }
        },
        topbarx: {
          '0%': {
            transform: 'rotate(0deg)',
            left: '25%'
          },
          '50%': {
              transform: 'rotate(68,25deg)',
              left: '25%',
              top: '50%',
          },
          '100%': {
              transform: 'rotate(135deg)',
              left: '25%',
              top: '50%',
          }
        },
        middlebarx: {
          '0%': {
            width: 'auto'
          },
          '100%': {
            width: '0'
          }
        },
        bottombarx: {
          '0%': {
            transform: 'rotate(0deg)',
            left: '25%',
          },
          '50%': {
              transform: 'rotate(-68,25deg)',
              left: '25%',
              top: '50%',
          },
          '100%': {
              transform: 'rotate(-135deg)',
              left: '25%',
              top: '50%',
          }
        },
        scrollEffect : {
          'from': {
            opacity: '0',
            scale: '25%'
          },
          'to': {
            opacity: '1',
            scale: '100%'
          }
        }
      },
      animation: {
        lastSlideToLeft: 'lastSlideToLeft .8s linear 1s',
        newSlideToLeft: 'newSlideToLeft .8s linear 1s',
        topbarx: 'topbarx .5s forwards',
        middlebarx: 'middlebarx .0s forwards',
        bottombarx: 'bottombarx .5s forwards',
      },
		},
	},
}