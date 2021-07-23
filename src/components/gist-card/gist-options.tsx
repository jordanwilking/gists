import React, { useState, useEffect } from 'react'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import TooltipButton from '../buttons/tooltip-button'
import useSnack from '../snack/use-snack'
import { SUCCESSFUL_ACTION } from '../snack/snack-props-presets'
import { useStarredStorage } from '../starred-storage/starred-storage.provider'
import { GistWithContent } from '../../types/gist-types'
import { GistFileInfo } from './useGistFilesInfo'
import GistFilePager from './gist-file-pager'
import StarButton from '../buttons/star-button'

type GistOptionsParentProps = {
  listView?: boolean
} & GistOptionsProps

type GistOptionsProps = {
  gist: GistWithContent
  url: string
  content: string
  fileInfo: GistFileInfo
}

type tempGistOptionsProps = {
  gist: GistWithContent
  url: string
  content: string
}

type Option = {
  name: string
  onClick: (value?: string) => void
}

export const GistOptions = ({
  gist,
  url,
  content,
  fileInfo,
  listView: listDisplay,
}: GistOptionsParentProps) => {
  return (
    <>
      {listDisplay ? (
        <GistMenuOptions gist={gist} url={url} content={content} />
      ) : (
        <GistIconOptions
          gist={gist}
          url={url}
          content={content}
          fileInfo={fileInfo}
        />
      )}
    </>
  )
}

const GistIconOptions = ({
  gist,
  url,
  content,
  fileInfo,
}: GistOptionsProps) => {
  const addSnack = useSnack()
  const { addGist, removeGist, isStarred } = useStarredStorage()
  const isStarredGist = isStarred(gist)

  const handleStar = () => addGist(gist)
  const handleUnstar = () => removeGist(gist.id)

  return (
    <div className='mx-2'>
      <GistFilePager fileInfo={fileInfo} />
      <TooltipButton
        tipText='Copy'
        onClick={() => {
          navigator.clipboard.writeText(content)
          addSnack('Copied!', SUCCESSFUL_ACTION)
        }}
      >
        <FileCopyIcon />
      </TooltipButton>
      <TooltipButton tipText='Open' onClick={() => window.open(url)}>
        <OpenInNewIcon />
      </TooltipButton>
      <StarButton
        isStarred={isStarredGist}
        star={handleStar}
        unstar={handleUnstar}
      />
    </div>
  )
}

const GistMenuOptions = ({ gist, url, content }: tempGistOptionsProps) => {
  const { anchorEl, open, closeMenu, updateAnchor } = useMenu()
  const options = useGistOptions({ gist, url, content })

  return (
    <>
      <IconButton onClick={updateAnchor}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={closeMenu}>
        {options.map((option) => (
          <MenuItem
            key={option.name}
            onClick={() => {
              option.onClick()
              closeMenu()
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState<MenuProps['anchorEl']>(null)

  const closeMenu = () => setAnchorEl(null)
  const updateAnchor = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }

  return { anchorEl, open: Boolean(anchorEl), closeMenu, updateAnchor }
}

const useGistOptions = ({
  gist,
  url,
  content,
}: tempGistOptionsProps): Option[] => {
  const [options, setOptions] = useState<Option[]>([])
  const addSnack = useSnack()

  useEffect(() => {
    setOptions([
      {
        name: 'Open',
        onClick: () => window.open(url),
      },
      {
        name: 'Copy',
        onClick: () => {
          navigator.clipboard.writeText(content)
          addSnack('Copied!', SUCCESSFUL_ACTION)
        },
      },
    ])
  }, [gist, url, content])

  return options
}
