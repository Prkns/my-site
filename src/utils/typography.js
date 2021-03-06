import Typography from 'typography';

const typography = new Typography({
  // Base Config
  baseFontSize: '17px',
  baseLineHeight: 3,
  scaleRatio: 3.6,

  // Heading Settings
  headerFontFamily: ['Monument Extended', 'sans-serif'],
  headerWeight: '900',
  headerColor: '#1e2023',

  // Body Settings
  bodyFontFamily: ['Rubik', 'sans-serif'],
  bodyColor: '#1e2023',
  bodyWeight: '400',
  boldWeight: '500',

  overrideThemeStyles: ({ rhythm }) => ({
    h3: {
      color: '#FF6A3C'
    },
    h4: {
      fontWeight: 400
    },
    'footer h4': {
      color: '#fff'
    },

    '#intro-text h1': {
      color: '#FFEFEA'
    }
  })
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;
