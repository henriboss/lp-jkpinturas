module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "industrial-black": "#0a0a0a",
        "industrial-dark": "#111111",
        "industrial-dark-2": "#1a1a1a",
        "industrial-yellow": "#D4C417",
        "industrial-yellow-bright": "#f0dd1e",
        "industrial-green": "#7ABF2E",
        "industrial-white": "#f5f5f0",
        "industrial-gray": "#888",
        "industrial-gray-light": "#ccc",
        "primary": "#D4C417",
        "on-primary": "#000000",
        "primary-container": "#7ABF2E",
        "secondary": "#7ABF2E",
        "on-secondary": "#000000",
        "background": "#0a0a0a",
        "on-background": "#f5f5f0",
        "surface": "#111111",
        "on-surface": "#f5f5f0",
        "surface-variant": "#1a1a1a",
        "on-surface-variant": "#888888",
        "outline": "#333333",
        "outline-variant": "#2a2a2a",
        "whatsapp": "#25D366",
        "on-whatsapp": "#000000"
      },
      fontFamily: {
        "display": ["Barlow Condensed", "sans-serif"],
        "headline": ["Barlow Condensed", "sans-serif"],
        "body": ["Barlow", "sans-serif"],
        "tech": ["Barlow Condensed", "sans-serif"]
      },
      fontSize: {
        "display-hero": ["clamp(48px, 6vw, 76px)", {"lineHeight": "1", "fontWeight": "900", "letterSpacing": "-1px"}],
        "display-section": ["clamp(36px, 5vw, 58px)", {"lineHeight": "1", "fontWeight": "900"}],
        "heading-card": ["22px", {"lineHeight": "1", "fontWeight": "800"}],
        "body-lg": ["17px", {"lineHeight": "1.7", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
        "label-overline": ["11px", {"lineHeight": "1", "letterSpacing": "2px", "fontWeight": "600"}],
        "label-tech": ["10px", {"lineHeight": "1", "letterSpacing": "2px", "fontWeight": "700"}],
        "button-text": ["18px", {"lineHeight": "1", "fontWeight": "900", "letterSpacing": "1px"}]
      },
      spacing: {
        "container-max": "1100px",
        "gutter": "24px",
        "section-padding": "80px",
        "section-padding-lg": "100px"
      }
    }
  },
  plugins: [],
}
