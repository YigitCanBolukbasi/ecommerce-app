const formLabel = theme => ({
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: '#878787',
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: theme.typography.fontFamily,
        lineHeight: '1.5rem'
      }
    }
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        color: '#878787',
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: theme.typography.fontFamily,
        lineHeight: '1.5rem'
      }
    }
  }
});

export default formLabel;
