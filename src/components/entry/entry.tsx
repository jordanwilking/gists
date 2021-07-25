import { createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { SnackProvider } from '../snack/snack.provider'
import { StarredStorageProvider } from '../starred-storage/starred-storage.provider'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'

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
          <Router>
            <Routes />
          </Router>
        </StarredStorageProvider>
      </SnackProvider>
    </ThemeProvider>
  )
}

export default Entry
