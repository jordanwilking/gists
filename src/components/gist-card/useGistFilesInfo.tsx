import { useState, useEffect } from 'react'
import { GistFileWithContent, GistWithContent } from '../../types/gist-types'

export type GistFileInfo = {
  activeFile: GistFileWithContent // the current file to display
  hasNextFile: boolean
  nextFile: () => void
  hasPrevFile: boolean
  prevFile: () => void
  hasFiles: boolean
  fileCount: number
}

/** Hook for determining which file to display for a gist */
const useGistFilesInfo = (gist: GistWithContent): GistFileInfo => {
  const [fileKeys, setFileKeys] = useState(Object.keys(gist.files))
  const [keyIndex, setKeyIndex] = useState<number>(0)

  useEffect(() => {
    // gist has changed - reset the state
    const keys = Object.keys(gist.files)
    const initKeyIndex = 0
    setKeyIndex(initKeyIndex)
    setFileKeys(keys)
  }, [gist.id])

  const hasNextFile = keyIndex + 1 < fileKeys.length
  const hasPrevFile = keyIndex - 1 >= 0

  const nextFile = () => {
    if (hasNextFile) setKeyIndex(keyIndex + 1)
  }

  const prevFile = () => {
    if (hasPrevFile) setKeyIndex(keyIndex - 1)
  }

  return {
    activeFile: gist.files[fileKeys[keyIndex]],
    hasNextFile,
    nextFile,
    hasPrevFile,
    prevFile,
    hasFiles: hasNextFile || hasPrevFile,
    fileCount: fileKeys.length,
  }
}

export default useGistFilesInfo
