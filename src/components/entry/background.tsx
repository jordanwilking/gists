import React from 'react'
import useTheme from '@material-ui/core/styles/useTheme'
import Paper from '@material-ui/core/Paper'

const Background = ({ children }: { children: React.ReactNode }) => {
  const { palette } = useTheme()

  return (
    <Paper
      square
      className='h-full'
      style={{ background: palette.background.default }}
    >
      {children}
    </Paper>
  )
}

export default Background
