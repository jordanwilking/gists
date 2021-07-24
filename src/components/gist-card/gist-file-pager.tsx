import IconButton from '@material-ui/core/IconButton'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import React from 'react'
import { GistFileInfo } from './useGistFilesInfo'

type GistFilePagerProps = {
  fileInfo: GistFileInfo
}

// TODO: tooltip performance issues
/** Pages through gist files */
const GistFilePager = ({ fileInfo }: GistFilePagerProps) => {
  return (
    <>
      {fileInfo.hasFiles && (
        <>
          <IconButton
            onClick={fileInfo.prevFile}
            disabled={!fileInfo.hasPrevFile}
          >
            <NavigateBeforeIcon fontSize='small' />
          </IconButton>
          <IconButton
            onClick={fileInfo.nextFile}
            disabled={!fileInfo.hasNextFile}
          >
            <NavigateNextIcon fontSize='small' />
          </IconButton>
          {/* <TooltipButton
            tipText='Previous File'
            onClick={fileInfo.prevFile}
            disabled={!fileInfo.hasPrevFile}
          >
            <NavigateBeforeIcon fontSize='small' />
          </TooltipButton>
          <TooltipButton
            tipText='Next File'
            onClick={fileInfo.nextFile}
            disabled={!fileInfo.hasNextFile}
          >
            <NavigateNextIcon fontSize='small' />
          </TooltipButton> */}
        </>
      )}
    </>
  )
}

export default GistFilePager
