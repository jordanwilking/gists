import Paper from '@material-ui/core/Paper'
import Skeleton from '@material-ui/lab/Skeleton'
import React from 'react'

/** Loading component for GistCard */
const GistCardSkeleton = () => {
  return (
    <Paper className='hidden md:flex w-full h-full' elevation={8}>
      <Skeleton
        variant='rect'
        height={300}
        className='w-full'
        style={{ borderRadius: '4px' }}
      />
    </Paper>
  )
}

export default GistCardSkeleton
