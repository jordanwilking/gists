import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core'
import GistSearch from '../gist-search/gist-search'

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
      <GistSearch />
    </ThemeProvider>
  )
}

export default Entry
