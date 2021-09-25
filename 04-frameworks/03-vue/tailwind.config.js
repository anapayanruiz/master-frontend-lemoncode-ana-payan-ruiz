module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  // important: true,
  theme: {
    screens: {
      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      desktop: "1280px",
      "desktop-lg": "1860px"
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        default: ["DefaultFont"],
        default2: ["DefaultFont2"],
        default3: ["DefaultFont3"],
        default4: ["DefaultFont4"],
        default5: ["DefaultFont5"]
      },
      fontSize: {
        "10": "10px",
        "11": "11px",
        "12": "12px",
        "14": "14px",
        "15": "15px",
        "16": "16px",
        "17": "17px",
        "18": "18px",
        "20": "20px",
        "22": "22px",
        "24": "24px",
        "26": "26px",
        "30": "30px",
        "36": "36px",
        "42": "42px",
        "44": "44px",
        "46": "46px",
        "55": "55px"
      },
      colors: {
        "color-1": "var(--color-1)",
        "color-2": "var(--color-2)",
        "color-3": "var(--color-3)",
        "color-4": "var(--color-4)",
        "color-5": "var(--color-5)",
        "color-6": "var(--color-6)",
        "color-7": "var(--color-7)",
        "color-8": "var(--color-8)",
        "color-9": "var(--color-9)"
      },
      width: {
        "3/10": "30%",
        "7/10": "70%",
        "22-px": "22px",
        "27-px": "27px",
        "30-px": "30px",
        "50-px": "50px",
        "85-px": "85px"
      },
      height: {
        "22-px": "22px",
        "27-px": "27px",
        "30-px": "30px",
        "50-px": "50px",
        "85-px": "85px"
      },
      margin: {
        "18": "4.5rem",
        "88": "22rem"
      },
      padding: {
        "120": "30rem",
        "140": "35rem",
        "160": "40rem",
        "192": "48rem"
      },
      zIndex: {
        "panel-background": 14,
        panel: 15,
        "top-bar": 99,
        "top-bar-title": 100,
        "top-bar-custom-bar": 101,
        "spinner-background": 102,
        spinner: 103,
        "modal-background": 200,
        modal: 201
      },
      gap: {
        "140": "35rem"
      },
      minWidth: {
        "96": "24rem"
      }
    }
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"]
    }
  },
  plugins: []
};
