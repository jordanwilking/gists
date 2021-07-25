import Link from '@material-ui/core/Link'
import React from 'react'
import { GistFileWithContent, GistWithContent } from '../../../types/gist-types'
import { isValidDate, toLocale } from '../../../utilities/date-utils'
import { pluralize } from '../../../utilities/string-utils'
import TruncatedLine from '../../truncated-line/truncated-line'
import UserPrefix from '../user-prefix'

type GistDetailsProps = {
  gist: GistWithContent
  file: GistFileWithContent
  fileCount: number
  showUser?: boolean
}

const GistDetails = ({ gist, file, fileCount, showUser }: GistDetailsProps) => {
  const createdDate = gist.created_at

  return (
    <div>
      <div>
        {showUser && (
          <UserPrefix userName={gist.owner.login} url={gist.owner.html_url} />
        )}
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
