import Grid from '@material-ui/core/Grid'
import React from 'react'

const GistSearchMessage = ({ message }: { message: string }) => {
  return (
    <Grid container item justifyContent='center'>
      <div className='flex justify-center w-3/5 xl:w-2/5 pl-2 py-4'>
        {message}
      </div>
    </Grid>
  )
}

export default GistSearchMessage
