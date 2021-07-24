import Typography from '@material-ui/core/Typography'
import React from 'react'
import { GistFileWithContent, GistWithContent } from '../../../types/gist-types'
import { isValidDate, toLocale } from '../../../utilities/date-utils'
import { pluralize } from '../../../utilities/string-utils'

type GistOverviewProps = {
  gist: GistWithContent
  file: GistFileWithContent
  fileCount: number
}

const GistOverview = ({ gist, file, fileCount }: GistOverviewProps) => {
  const fileText = pluralize('file', fileCount)

  return (
    <div>
      <Typography variant='subtitle1'>{file.filename}</Typography>
      <Typography variant='body2'>
        {isValidDate(gist.created_at) && `created ${toLocale(gist.created_at)}`}
        {` - ${fileCount} ${fileText}`}
      </Typography>
      <Typography variant='body2'>{gist.description}</Typography>
    </div>
  )
}

export default GistOverview
