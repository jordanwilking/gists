import { createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import GistSearch from '../gist-search/gist-search'
import { SnackProvider } from '../snack/snack.provider'
import { StarredStorageProvider } from '../starred-storage/starred-storage.provider'

const Entry = () => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
          secondary: {
            main: '#86e2d5',
          },
        },
      }),
    []
  )

  return (
    <ThemeProvider theme={theme}>
      <SnackProvider>
        <StarredStorageProvider>
          <GistSearch />
        </StarredStorageProvider>
      </SnackProvider>
    </ThemeProvider>
  )
}

export default Entry
