const button = (theme) => ({
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        background: "#0059BC",
        color: "white",
        borderRadius: "4px",
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }),
    },
  },
});

export default button;
