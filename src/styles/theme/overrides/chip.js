const chip = theme => ({
  MuiChip: {
    styleOverrides: {
      root: {
        height: 26,
        margin: 0,
        background: '#F5F5FD',
        color: '#5856D6',
        fontSize: '18px',
        fontFamily: theme.typography.fontFamily,
        lineHeight: '23px',
        '&:not(:first-of-type)': {
          marginLeft: '10px'
        }
      },
      label: {
        marginLeft: '3px',
        marginTop: '3px'
      },
      deleteIconColorDefault: {
        color: '#878787',
        marginRight: '8px'
      }
    }
  }
});

export default chip;
