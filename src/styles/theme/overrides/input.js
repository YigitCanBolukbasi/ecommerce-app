const input = theme => ({
  MuiTextField: {
    styleOverrides: {
      root: {
        minHeight: 40,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        '& fieldset': { border: 'none' },
        '& .Mui-disabled': {
          '&.MuiInputBase-root': { opacity: 0.6, backgroundColor: '#E1E3E6' }
        },
        '& .MuiAutocomplete-tag': {
          display: 'flex',
          color: '#5856D6',
          fontSize: '18px',
          fontFamily: theme.typography.fontFamily,
          lineHeight: '23px',
          alignItems: 'center'
        }
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontWeight: theme.typography.fontWeightBold,
        fontFamily: theme.typography.fontFamily,
        lineHeight: '1.1rem'
      }
    }
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        justifyContent: 'center'
        // height: 40
      }
    }
  }
});

export default input;
