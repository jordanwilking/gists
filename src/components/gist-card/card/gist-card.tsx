import Paper from '@material-ui/core/Paper'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { GistWithContent } from '../../../types/gist-types'
import { toLower } from '../gist-card-utils'
import { GistFileInfo } from '../useGistFilesInfo'
import GistDetails from './gist-details'
import GistIconOptions from './gist-icon-options'

type GistCardProps = {
  gist: GistWithContent
  fileInfo: GistFileInfo
}

/** Gist card display for larger windows */
const GistCard = ({ gist, fileInfo }: GistCardProps) => {
  const { activeFile: file, fileCount } = fileInfo

  return (
    <Paper className='hidden md:flex flex-col w-full h-full' elevation={8}>
      <div className='flex flex-row justify-between w-full m-2'>
        <GistDetails gist={gist} file={file} fileCount={fileCount} />
        <GistIconOptions
          gist={gist}
          url={gist.html_url}
          content={file.content}
          fileInfo={fileInfo}
        />
      </div>
      <div className='overflow-y-auto mx-2 mb-2 pt-0'>
        <SyntaxHighlighter
          language={toLower(file?.language)}
          showLineNumbers
          wrapLongLines
          style={dracula}
          customStyle={{ margin: 0 }}
        >
          {file.content}
        </SyntaxHighlighter>
      </div>
    </Paper>
  )
}

export default GistCard
