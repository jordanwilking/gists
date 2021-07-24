import React, { useState } from 'react'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import { GistWithContent } from '../../../types/gist-types'
import HoverInfo from '../../hover-info/hover-info'
import Collapse from '@material-ui/core/Collapse'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import TooltipButton from '../../buttons/tooltip-button'
import { useStarredStorage } from '../../starred-storage/starred-storage.provider'
import { GistFileInfo } from '../useGistFilesInfo'
import { toLower } from '../gist-card-utils'
import GistOverview from './gist-overview'
import GistFilePager from '../gist-file-pager'
import StarButton from '../../buttons/star-button'
import GistMenuOptions from './gist-menu-options'
import { truncate } from '../../../utilities/string-utils'

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
            <TooltipButton
              tipText={expanded ? 'Collapse' : 'Expand'}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
            </TooltipButton>
            <StarButton
              isStarred={isStarredGist}
              star={handleStar}
              unstar={handleUnstar}
            />
            <GistMenuOptions url={gist.html_url} content={file.content} />
          </div>
        </div>
        <Collapse in={expanded} className='overflow-y-auto mx-2 mb-2 pt-0'>
          <SyntaxHighlighter
            language={toLower(file?.language)}
            showLineNumbers
            style={dracula}
            customStyle={{ margin: 0 }}
          >
            {file.content}
          </SyntaxHighlighter>
        </Collapse>
      </div>
    </Paper>
  )
}

export default GistSmallCard
