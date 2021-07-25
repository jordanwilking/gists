import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import React, { useState } from 'react'
import { GistWithContent } from '../../../types/gist-types'
import { truncate } from '../../../utilities/string-utils'
import StarButton from '../../buttons/star-button'
import HoverInfo from '../../hover-info/hover-info'
import { useStarredStorage } from '../../starred-storage/starred-storage.provider'
import CodeBlock from '../code-block'
import { toLower } from '../gist-card-utils'
import GistFilePager from '../gist-file-pager'
import { GistFileInfo } from '../useGistFilesInfo'
import GistMenuOptions from './gist-menu-options'
import GistOverview from './gist-overview'

type GistDisplayProps = {
  gist: GistWithContent
  fileInfo: GistFileInfo
}

const MAX_TITLE_LENGTH = 20

/**
 * Gist display card for small width windows
 */
const GistSmallCard = ({ gist, fileInfo }: GistDisplayProps) => {
  const [expanded, setExpanded] = useState(false)
  const { addGist, removeGist, isStarred } = useStarredStorage()
  const isStarredGist = isStarred(gist)
  const { activeFile: file, fileCount } = fileInfo

  const handleStar = () => addGist(gist)
  const handleUnstar = () => removeGist(gist.id)

  return (
    <Paper className='flex w-full md:hidden' elevation={8}>
      <div className='flex h-full w-full flex-col'>
        <div className='flex h-full w-full justify-between items-center pl-2'>
          <div className='flex flex-row items-center'>
            <Link color='secondary' href={gist.html_url} className='mr-2'>
              {truncate(file.filename, MAX_TITLE_LENGTH)}
            </Link>
            <HoverInfo
              info={
                <GistOverview gist={gist} file={file} fileCount={fileCount} />
              }
            />
          </div>
          <div>
            <GistFilePager fileInfo={fileInfo} />
            <IconButton onClick={() => setExpanded(!expanded)}>
              {expanded ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
            </IconButton>
            <StarButton
              isStarred={isStarredGist}
              star={handleStar}
              unstar={handleUnstar}
            />
            <GistMenuOptions url={gist.html_url} content={file.content} />
          </div>
        </div>
        <Collapse in={expanded} className='overflow-y-auto'>
          <div className='mx-2 mb-2 pt-0'>
            <CodeBlock
              fileName={file.filename}
              language={toLower(file?.language)}
              content={file.content}
            />
          </div>
        </Collapse>
      </div>
    </Paper>
  )
}

export default GistSmallCard
