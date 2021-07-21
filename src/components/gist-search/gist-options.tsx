import React, { useState, useEffect } from 'react'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import TooltipButton from '../buttons/tooltip-button'

type GistOptionsParentProps = {
  listView?: boolean
} & GistOptionsProps

type GistOptionsProps = {
  url: string
  content: string
}

type Option = {
  name: string
  onClick: (value?: string) => void
}

export const GistOptions = ({
  url,
  content,
  listView: listDisplay,
}: GistOptionsParentProps) => {
  return (
    <>
      {listDisplay ? (
        <GistMenuOptions url={url} content={content} />
      ) : (
        <GistIconOptions url={url} content={content} />
      )}
    </>
  )
}

export const GistIconOptions = ({ url, content }: GistOptionsProps) => {
  return (
    <div className='mx-2'>
      <TooltipButton
        tipText='Copy'
        onClick={() => navigator.clipboard.writeText(content)}
      >
        <FileCopyIcon />
      </TooltipButton>
      <TooltipButton tipText='Open' onClick={() => window.open(url)}>
        <OpenInNewIcon />
      </TooltipButton>
      <TooltipButton tipText='Favorite' onClick={() => {}}>
        <StarOutlineIcon />
      </TooltipButton>
    </div>
  )
}

export const GistMenuOptions = ({ url, content }: GistOptionsProps) => {
  const { anchorEl, open, closeMenu, updateAnchor } = useMenu()
  const options = useGistOptions({ url, content })

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

const useGistOptions = ({ url, content }: GistOptionsProps): Option[] => {
  const [options, setOptions] = useState<Option[]>([])

  useEffect(() => {
    setOptions([
      {
        name: 'Favorite',
        onClick: () => {},
      },
      {
        name: 'Open',
        onClick: () => window.open(url),
      },
      {
        name: 'Copy',
        onClick: () => navigator.clipboard.writeText(content),
      },
    ])
  }, [url, content])

  return options
}
