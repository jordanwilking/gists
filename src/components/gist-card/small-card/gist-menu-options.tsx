import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import React from 'react'
import useMenu from '../../../hooks/useMenu'
import useGistOptions from './useGistOptions'

export type GistMenuOptionsProps = {
  url: string
  content: string
}

/**
 * Vertical kabob menu for small gist card
 */
const GistMenuOptions = ({ url, content }: GistMenuOptionsProps) => {
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

export default GistMenuOptions
