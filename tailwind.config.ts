/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  sage: {
			DEFAULT: "#4D8B31",
			light: "#6AAC44",
			dark: "#3A6B25",
		  },
		  dark: {
			DEFAULT: "#1A1A1A",
			lighter: "#2A2A2A",
		  },
		},
		fontFamily: {
		  sans: ["var(--font-inter)", "system-ui", "sans-serif"],
		  serif: ["var(--font-playfair-display)", "serif"],
		},
		keyframes: {
		  fadeIn: {
			"0%": { opacity: "0" },
			"100%": { opacity: "1" },
		  },
		  slideUp: {
			"0%": { transform: "translateY(10px)", opacity: "0" },
			"100%": { transform: "translateY(0)", opacity: "1" },
		  },
		},
		animation: {
		  fadeIn: "fadeIn 0.5s ease-out",
		  slideUp: "slideUp 0.5s ease-out",
		},
	  },
	},
	plugins: [
		require("tailwindcss-animate"),
		require('@tailwindcss/typography')
	],
  }
  
  