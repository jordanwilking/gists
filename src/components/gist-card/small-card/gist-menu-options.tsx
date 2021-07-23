import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import { GistWithContent } from '../../../types/gist-types'
import useMenu from '../../../hooks/useMenu'
import useGistOptions from './useGistOptions'

export type GistMenuOptionsProps = {
  gist: GistWithContent
  url: string
  content: string
}

const GistMenuOptions = ({ gist, url, content }: GistMenuOptionsProps) => {
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

export default GistMenuOptions
