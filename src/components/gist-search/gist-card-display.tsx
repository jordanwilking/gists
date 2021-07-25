import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import { GistWithContent } from '../../types/gist-types'
import GistCard from '../gist-card/card/gist-card'
import GistSmallCard from '../gist-card/small-card/gist-small-card'
import useGistFilesInfo from '../gist-card/useGistFilesInfo'

type GistCardDisplayProps = {
  gist: GistWithContent
  showUser?: boolean
}

/**
 * Displays a gist card
 * The decision for which card to display is made by media queries
 */
const GistCardDisplay = ({ gist, showUser }: GistCardDisplayProps) => {
  const fileInfo = useGistFilesInfo(gist)

  return (
    <div className='flex w-full items-center md:max-h-80 xl:w-1/2 p-2'>
      <GistSmallCard gist={gist} fileInfo={fileInfo} showUser={showUser} />
      <GistCard gist={gist} fileInfo={fileInfo} showUser={showUser} />
    </div>
  )
}

export default GistCardDisplay
