import React from 'react'
import TooltipButton from '../buttons/tooltip-button'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { GistFileInfo } from './useGistFilesInfo'

type GistFilePagerProps = {
  fileInfo: GistFileInfo
}
const GistFilePager = ({ fileInfo }: GistFilePagerProps) => {
  return (
    <>
      {fileInfo.hasFiles && (
        <>
          <TooltipButton
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
          </TooltipButton>
        </>
      )}
    </>
  )
}

export default GistFilePager
