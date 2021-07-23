import React from 'react'
import Typography from '@material-ui/core/Typography'
import { GistWithContent } from '../../../types/gist-types'
import { pluralize } from '../../../utilities/string-utils'

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

export default GistOverview
