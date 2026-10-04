tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 25s linear infinite"
      },
      colors: {
        "primary-fixed": "#dae2fd",
        "surface-container-low": "#eff4ff",
        "tertiary": "#000000",
        "surface-variant": "#d3e4fe",
        "on-tertiary-container": "#497cff",
        "on-error-container": "#93000a",
        "primary-container": "#131b2e",
        "surface-bright": "#f8f9ff",
        "inverse-primary": "#bec6e0",
        "inverse-on-surface": "#eaf1ff",
        "surface-container-highest": "#d3e4fe",
        "on-primary-fixed": "#131b2e",
        "on-secondary": "#ffffff",
        "primary-fixed-dim": "#bec6e0",
        "on-primary-container": "#7c839b",
        "secondary-container": "#86f2e4",
        "on-secondary-fixed": "#00201d",
        "on-tertiary": "#ffffff",
        "primary": "#000000",
        "on-tertiary-fixed": "#00174b",
        "background": "#f8f9ff",
        "on-primary": "#ffffff",
        "on-tertiary-fixed-variant": "#003ea8",
        "on-secondary-container": "#006f66",
        "outline-variant": "#c6c6cd",
        "tertiary-container": "#00174b",
        "error-container": "#ffdad6",
        "error": "#ba1a1a",
        "on-secondary-fixed-variant": "#005049",
        "on-error": "#ffffff",
        "secondary-fixed-dim": "#6bd8cb",
        "on-primary-fixed-variant": "#3f465c",
        "surface-container-lowest": "#ffffff",
        "inverse-surface": "#213145",
        "surface-tint": "#565e74",
        "surface-container-high": "#dce9ff",
        "surface": "#f8f9ff",
        "surface-container": "#e5eeff",
        "on-background": "#0b1c30",
        "surface-dim": "#cbdbf5",
        "tertiary-fixed": "#dbe1ff",
        "tertiary-fixed-dim": "#b4c5ff",
        "on-surface": "#0b1c30",
        "secondary-fixed": "#89f5e7",
        "secondary": "#006a61",
        "on-surface-variant": "#45464d",
        "outline": "#76777d"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        margin: "2rem",
        "space-2xl": "3rem",
        "space-lg": "1.5rem",
        "space-sm": "0.5rem",
        "gutter-mobile": "0.75rem",
        gutter: "1.5rem",
        "space-xs": "0.25rem",
        "space-xl": "2rem",
        "space-md": "1rem",
        "margin-mobile": "1rem"
      },
      fontFamily: {
        "body-lg": ["Inter"],
        "display-lg": ["Plus Jakarta Sans"],
        "timer-display": ["JetBrains Mono"],
        "headline-lg": ["Plus Jakarta Sans"],
        "headline-md": ["Plus Jakarta Sans"],
        "body-sm": ["Inter"],
        "headline-sm": ["Plus Jakarta Sans"],
        "label-md": ["Inter"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "body-md": ["Inter"],
        "code-sm": ["JetBrains Mono"],
        "label-sm": ["Inter"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "display-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "timer-display": ["24px", { lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg": ["28px", { lineHeight: "36px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "headline-md": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "headline-sm": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "headline-lg-mobile": ["22px", { lineHeight: "30px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "code-sm": ["12px", { lineHeight: "18px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }]
      }
    }
  }
};
