import React from 'react'
import Paper from '@material-ui/core/Paper'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { GistWithContent } from '../../../types/gist-types'
import { GistOptions } from '../gist-options'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import GistDetails from './gist-details'
import { GistFileInfo } from '../useGistFilesInfo'
import { toLower } from '../gist-card-utils'

type GistCardProps = {
  gist: GistWithContent
  fileInfo: GistFileInfo
}

const GistCard = ({ gist, fileInfo }: GistCardProps) => {
  const { activeFile: file, fileCount } = fileInfo

  return (
    <Paper className='hidden md:flex flex-col w-full h-full' elevation={8}>
      <div className='flex flex-row justify-between w-full m-2'>
        <GistDetails gist={gist} file={file} fileCount={fileCount} />
        <GistOptions
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