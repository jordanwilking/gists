import React from 'react'
import { GistWithContent } from '../../types/gist-types'
import GistSmallCard from '../gist-card/small-card/gist-small-card'
import GistCard from '../gist-card/card/gist-card'
import useGistFilesInfo from '../gist-card/useGistFilesInfo'

type GistCardDisplayProps = {
  gist: GistWithContent
}

/**
 * Displays a gist card
 * The decision for which card to display is made by media queries
 */
const GistCardDisplay = ({ gist }: GistCardDisplayProps) => {
  const fileInfo = useGistFilesInfo(gist)

  return (
    <div className='flex w-full items-center md:max-h-80 xl:w-1/2 p-2'>
      <GistSmallCard gist={gist} fileInfo={fileInfo} />
      <GistCard gist={gist} fileInfo={fileInfo} />
    </div>
  )
}

export default GistCardDisplay
