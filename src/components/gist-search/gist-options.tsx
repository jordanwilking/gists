import React, { useState, useEffect } from 'react'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import StarIcon from '@material-ui/icons/Star'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import TooltipButton from '../buttons/tooltip-button'
import useSnack from '../snack/use-snack'
import { SUCCESSFUL_ACTION } from '../snack/snack-props-presets'
import { useStarredStorage } from '../starred-storage/starred-storage.provider'
import { GistWithContent } from '../../types/gist-types'

type GistOptionsParentProps = {
  listView?: boolean
} & GistOptionsProps

type GistOptionsProps = {
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
  listView: listDisplay,
}: GistOptionsParentProps) => {
  return (
    <>
      {listDisplay ? (
        <GistMenuOptions gist={gist} url={url} content={content} />
      ) : (
        <GistIconOptions gist={gist} url={url} content={content} />
      )}
    </>
  )
}

const GistIconOptions = ({ gist, url, content }: GistOptionsProps) => {
  const addSnack = useSnack()
  // TODO: hook to consolidate this logic? with isStarred?
  const { addGist, removeGist, isStarred, starredGists } = useStarredStorage()
  const isStarredGist = isStarred(gist)

  return (
    <div className='mx-2'>
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
      <TooltipButton
        tipText={isStarredGist ? 'Unstar' : 'Star'}
        onClick={() => {
          if (isStarred) {
            removeGist(gist.id)
            addSnack('Unstarred!', SUCCESSFUL_ACTION)
          } else {
            addGist(gist)
            addSnack('Starred!', SUCCESSFUL_ACTION)
          }
        }}
      >
        {isStarredGist ? <StarIcon /> : <StarOutlineIcon />}
      </TooltipButton>
    </div>
  )
}

const GistMenuOptions = ({ gist, url, content }: GistOptionsProps) => {
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

const useGistOptions = ({ gist, url, content }: GistOptionsProps): Option[] => {
  const [options, setOptions] = useState<Option[]>([])
  const addSnack = useSnack()
  const { addGist } = useStarredStorage()

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
