module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "deep-navy": "#0D47A1",
        "industrial-red": "#B8302A",
        "safety-yellow": "#F2C84C",
        "surface-cream": "#F4F2EC",
        "primary": "#003178",
        "on-primary": "#ffffff",
        "primary-container": "#0d47a1",
        "on-primary-container": "#a1bbff",
        "secondary": "#e0b73c",
        "on-secondary": "#ffffff",
        "secondary-container": "#fdd356",
        "on-secondary-container": "#735a00",
        "tertiary": "#720006",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#971616",
        "on-tertiary-container": "#ffa59b",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "background": "#f9f9ff",
        "on-background": "#181c23",
        "surface": "#f9f9ff",
        "on-surface": "#181c23",
        "surface-variant": "#dfe2ed",
        "on-surface-variant": "#434652",
        "outline": "#737783",
        "outline-variant": "#c3c6d4"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "sm": "0.125rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "unit": "8px",
        "container-max": "1280px",
        "gutter": "24px",
        "section-padding-desktop": "120px",
        "section-padding-mobile": "64px"
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "tech": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "display-lg-mobile": ["40px", {"lineHeight": "1.2", "fontWeight": "700"}],
        "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "label-tech": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "button-text": ["16px", {"lineHeight": "1", "fontWeight": "600"}]
      }
    }
  },
  plugins: [],
}
