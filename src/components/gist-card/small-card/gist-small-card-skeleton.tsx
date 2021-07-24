import React from 'react'
import Paper from '@material-ui/core/Paper'
import Skeleton from '@material-ui/lab/Skeleton'

/**
 * Loading component for GistSmallCard
 */
const GistSmallCardSkeleton = () => {
  return (
    <Paper className='flex w-full md:hidden' elevation={8}>
      <Skeleton
        variant='rect'
        height={50}
        className='w-full'
        style={{ borderRadius: '4px' }}
      />
    </Paper>
  )
}

export default GistSmallCardSkeleton
