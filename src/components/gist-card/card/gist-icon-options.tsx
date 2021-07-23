import React from 'react'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import StarButton from '../../buttons/star-button'
import TooltipButton from '../../buttons/tooltip-button'
import { SUCCESSFUL_ACTION } from '../../snack/snack-props-presets'
import useSnack from '../../snack/use-snack'
import { useStarredStorage } from '../../starred-storage/starred-storage.provider'
import GistFilePager from '../gist-file-pager'
import { GistWithContent } from '../../../types/gist-types'
import { GistFileInfo } from '../useGistFilesInfo'

type GistOptionsProps = {
  gist: GistWithContent
  url: string
  content: string
  fileInfo: GistFileInfo
}

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
      <TooltipButton
        tipText='Copy'
        onClick={() => {
          navigator.clipboard.writeText(content)
          addSnack('Copied!', SUCCESSFUL_ACTION)
        }}
      >
        <FileCopyIcon />
      </TooltipButton>
      <TooltipButton tipText='Open' onClick={() => window.open(url)}>
        <OpenInNewIcon />
      </TooltipButton>
      <StarButton
        isStarred={isStarredGist}
        star={handleStar}
        unstar={handleUnstar}
      />
    </div>
  )
}

export default GistIconOptions
