import React from 'react'
import GistCardSkeleton from '../gist-card/card/gist-card-skeleton'
import GistSmallCardSkeleton from '../gist-card/small-card/gist-small-card-skeleton'

const GistCardDisplaySkeleton = () => {
  return (
    <div className='flex w-full items-center md:max-h-80 xl:w-1/2 p-2'>
      <GistSmallCardSkeleton />
      <GistCardSkeleton />
    </div>
  )
}

export default GistCardDisplaySkeleton
