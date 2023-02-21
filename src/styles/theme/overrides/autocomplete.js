const autocomplete = theme => ({
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        margin: 0,
        minHeight: '40px',
        '& *': { boxSizing: 'border-box' },
        '& .MuiFormControl-root': { alignItems: 'center' },
        '& .MuiOutlinedInput-root': { paddingTop: '0', paddingBottom: '0' },
        '& .MuiTextField-root': { boxSizing: 'border-box' },
        '&[aria-owns] .MuiTextField-root': { borderColor: '#F5A064' },
        '& .MuiChip-deleteIconColorDefault': { fill: '#878787' }
      }
    }
  }
});

export default autocomplete;
