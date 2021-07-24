import { MenuProps } from '@material-ui/core/Menu'
import { useState } from 'react'

/**
 * Hook for managing Material UI Menu state
 */
const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState<MenuProps['anchorEl']>(null)

  const closeMenu = () => setAnchorEl(null)
  const updateAnchor = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }

  return { anchorEl, open: Boolean(anchorEl), closeMenu, updateAnchor }
}

export default useMenu
