import Link from '@material-ui/core/Link'
import React from 'react'
import { GistFileWithContent, GistWithContent } from '../../../types/gist-types'
import { isValidDate, toLocale } from '../../../utilities/date-utils'
import { pluralize } from '../../../utilities/string-utils'
import TruncatedLine from '../../truncated-line/truncated-line'

type GistDetailsProps = {
  gist: GistWithContent
  file: GistFileWithContent
  fileCount: number
}

const GistDetails = ({ gist, file, fileCount }: GistDetailsProps) => {
  const createdDate = gist.created_at

  return (
    <div>
      <div>
        <Link color='secondary' href={gist.html_url}>
          {file.filename}
        </Link>
        {isValidDate(createdDate) && ` - created ${toLocale(createdDate)}`}
        {` - ${fileCount} ${pluralize('file', fileCount)}`}
      </div>
      {gist.description && (
        <TruncatedLine text={gist.description} maxLength={65} />
      )}
    </div>
  )
}

export default GistDetails
