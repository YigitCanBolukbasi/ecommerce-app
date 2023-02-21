const popper = theme => ({
  MuiPopper: {
    styleOverrides: {
      root: {
        maxWidth: '447px',
        borderWidth: '0',
        paddingTop: '5px',
        '& .MuiAutocomplete-paper': {
          boxSizing: 'border-box',
          height: '170px',
          border: '1px solid #E1E3E6',
          boxShadow: '0px 8px 24px -4px rgba(27, 46, 94, 0.18)',
          borderRadius: '8px',
          padding: '9px 9px 5px 0'
        },
        '& .MuiAutocomplete-listbox': {
          boxSizing: 'border-box',
          height: '100%',

          padding: '16px 28px 0',
          backgroundColor: theme.palette.common.white,
          color: '#878787',
          '& li.MuiAutocomplete-option': {
            borderRadius: '8px',
            background: 'none',
            margin: '0',
            padding: '8px 16px',
            '&:not(:first-of-type)': {
              marginTop: '8px'
            },
            '&[html-selected="true"]': {
              backgroundColor: '#FCEBDB',
              color: theme.palette.primary.main
            }
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#C9E8E3',
            height: '20px',
            width: '7px',
            border: '1px solid #C9E8E3'
          },
          '&::-webkit-scrollbar': {
            borderRadius: 8,
            width: '7px',
            backgroundColor: '#E1E3E6'
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: '#C9E8E3'
            },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: '#C9E8E3'
            },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#C9E8E3'
            },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#C9E8E3'
          }
        }
      }
    }
  }
});

export default popper;
