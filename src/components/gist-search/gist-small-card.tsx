import React, { useState } from 'react'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import { GistFileWithContent, GistWithContent } from '../../types/gist-types'
import { GistOptions } from './gist-options'
import HoverInfo from '../hover-info/hover-info'
import { pluralize } from '../../utilities/string-utils'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import TooltipButton from '../buttons/tooltip-button'
import useSnack from '../snack/use-snack'
import { useStarredStorage } from '../starred-storage/starred-storage.provider'
import { SUCCESSFUL_ACTION } from '../snack/snack-props-presets'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import StarIcon from '@material-ui/icons/Star'

type GistDisplayProps = {
  gist: GistWithContent
  file: GistFileWithContent
}
const toLower = (str: string | undefined) =>
  str ? str.toLowerCase() : undefined

// TODO: anyway to clean this up?
const GistSmallCard = ({ gist, file }: GistDisplayProps) => {
  const addSnack = useSnack()
  const [expanded, setExpanded] = useState(false)
  const fileNames = Object.keys(gist.files)
  const fileCount = fileNames.length
  const { addGist, removeGist, starredGists } = useStarredStorage()
  const isStarred = starredGists.find((starred) => starred.id === gist.id)

  return (
    <Paper className='flex w-full md:hidden' elevation={8}>
      <div className='flex h-full w-full flex-col'>
        <div className='flex h-full w-full justify-between items-center pl-2'>
          <div className='flex flex-row items-center'>
            <Link color='secondary' href={gist.html_url} className='mr-2'>
              {file.filename}
            </Link>
            <HoverInfo
              info={<GistOverview gist={gist} fileCount={fileCount} />}
            />
          </div>
          <div>
            <TooltipButton
              tipText={expanded ? 'Collapse' : 'Expand'}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
            </TooltipButton>
            <TooltipButton
              tipText={isStarred ? 'Unstar' : 'Star'}
              onClick={() => {
                if (isStarred) {
                  removeGist(gist.id)
                  addSnack('Unstarred!', SUCCESSFUL_ACTION)
                } else {
                  addGist(gist)
                  addSnack('Starred!', SUCCESSFUL_ACTION)
                }
              }}
            >
              {isStarred ? <StarIcon /> : <StarOutlineIcon />}
            </TooltipButton>
            <GistOptions
              listView
              gist={gist}
              url={gist.html_url}
              content={file.content}
            />
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

type GistOverviewProps = {
  gist: GistWithContent
  fileCount: number
}

const GistOverview = ({ gist, fileCount }: GistOverviewProps) => {
  const fileText = pluralize('file', fileCount)

  return (
    <div>
      <Typography variant='subtitle1'>
        {`created ${gist.created_at} - ${fileCount} ${fileText}`}
      </Typography>
      <Typography variant='body2'>{gist.description}</Typography>
    </div>
  )
}

export default GistSmallCard
