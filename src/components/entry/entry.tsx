import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core'
import GistSearch from '../gist-search/gist-search'
import { SnackProvider } from '../snack/snack.provider'

const Entry = () => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
        },
      }),
    []
  )

  return (
    <ThemeProvider theme={theme}>
      <SnackProvider>
        <GistSearch />
      </SnackProvider>
    </ThemeProvider>
  )
}

export default Entry
