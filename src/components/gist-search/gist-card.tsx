import React from 'react'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import TruncatedLine from '../truncated-line/truncated-line'
import { GistFileWithContent, GistWithContent } from '../../types/gist-types'
import { pluralize } from '../../utilities/string-utils'
import { GistOptions } from './gist-options'

type GistCardProps = {
  gist: GistWithContent
}

const GistCard = ({ gist }: GistCardProps) => {
  const fileNames = Object.keys(gist.files)
  const fileCount = fileNames.length
  const file = gist.files[fileNames[0]]

  const toLower = (str: string | undefined) =>
    str ? str.toLowerCase() : undefined

  return (
    <Paper className='hidden md:flex flex-col w-full h-full' elevation={8}>
      <div className='flex flex-row justify-between w-full m-2'>
        <GistDetails gist={gist} file={file} fileCount={fileCount} />
        <GistOptions url={gist.html_url} content={file.content} />
      </div>
      <div className='overflow-y-auto mx-2 mb-2 pt-0'>
        <SyntaxHighlighter
          language={toLower(file?.language)}
          showLineNumbers
          style={dracula}
          customStyle={{ margin: 0 }}
        >
          {file.content}
        </SyntaxHighlighter>
      </div>
    </Paper>
  )
}

type GistDetailsProps = {
  gist: GistWithContent
  file: GistFileWithContent
  fileCount: number
}

const GistDetails = ({ gist, file, fileCount }: GistDetailsProps) => {
  return (
    <div>
      <div>
        <Link color='secondary' href={gist.html_url}>
          {file.filename}
        </Link>
        {` - created ${gist.created_at}`}
        {` - ${fileCount} ${pluralize('file', fileCount)}`}
      </div>
      {gist.description && (
        <TruncatedLine text={gist.description} maxLength={65} />
      )}
    </div>
  )
}

export default GistCard
