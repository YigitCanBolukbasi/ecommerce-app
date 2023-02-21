const checkbox = theme => ({
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: theme.palette.primary.main,
        checked: {
          color: theme.palette.primary.main
        }
      }
    }
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        fontSize: 16
      }
    }
  }
});

export default checkbox;
