import IconButton from '@material-ui/core/IconButton'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import React from 'react'
import { GistWithContent } from '../../../types/gist-types'
import StarButton from '../../buttons/star-button'
import { SUCCESSFUL_ACTION } from '../../snack/snack-props-presets'
import useSnack from '../../snack/use-snack'
import { useStarredStorage } from '../../starred-storage/starred-storage.provider'
import GistFilePager from '../gist-file-pager'
import { GistFileInfo } from '../useGistFilesInfo'

type GistOptionsProps = {
  gist: GistWithContent
  url: string
  content: string
  fileInfo: GistFileInfo
}

/**
 * Action icons for GistCard
 */
const GistIconOptions = ({
  gist,
  url,
  content,
  fileInfo,
}: GistOptionsProps) => {
  const addSnack = useSnack()
  const { addGist, removeGist, isStarred } = useStarredStorage()
  const isStarredGist = isStarred(gist)

  const handleStar = () => addGist(gist)
  const handleUnstar = () => removeGist(gist.id)

  return (
    <div className='mx-2'>
      <GistFilePager fileInfo={fileInfo} />
      <IconButton
        onClick={() => {
          navigator.clipboard.writeText(content)
          addSnack('Copied!', SUCCESSFUL_ACTION)
        }}
      >
        <FileCopyIcon />
      </IconButton>
      <IconButton onClick={() => window.open(url)}>
        <OpenInNewIcon />
      </IconButton>
      <StarButton
        isStarred={isStarredGist}
        star={handleStar}
        unstar={handleUnstar}
      />
    </div>
  )
}

export default GistIconOptions
