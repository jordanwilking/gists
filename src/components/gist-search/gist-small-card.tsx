import React from 'react'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import { GistFileWithContent, GistWithContent } from '../../types/gist-types'
import { GistOptions } from './gist-options'
import HoverInfo from '../hover-info/hover-info'
import { pluralize } from '../../utilities/string-utils'
import Typography from '@material-ui/core/Typography'

type GistDisplayProps = {
  gist: GistWithContent
  file: GistFileWithContent
}

const GistSmallCard = ({ gist, file }: GistDisplayProps) => {
  const fileNames = Object.keys(gist.files)
  const fileCount = fileNames.length

  return (
    <Paper
      className='flex w-full justify-between items-center md:hidden pl-2'
      elevation={8}
    >
      <div className='flex flex-row items-center'>
        <Link color='secondary' href={gist.html_url} className='mr-2'>
          {file.filename}
        </Link>
        <HoverInfo info={<GistOverview gist={gist} fileCount={fileCount} />} />
      </div>
      <GistOptions listView url={gist.html_url} content={file.content} />
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
