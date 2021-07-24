import StarIcon from '@material-ui/icons/Star'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import React from 'react'
import TooltipButton from '../buttons/tooltip-button'
import { SUCCESSFUL_ACTION } from '../snack/snack-props-presets'
import useSnack from '../snack/use-snack'

type StarButtonProps = {
  isStarred: boolean
  star: () => void
  unstar: () => void
}

/**
 * Star-shapped button
 * Filled when starred and empty when unstarred
 */
const StarButton = ({ isStarred, star, unstar }: StarButtonProps) => {
  const addSnack = useSnack()

  const handleStar = () => {
    star()
    addSnack('Starred!', { ...SUCCESSFUL_ACTION, undo: handleUnstar })
  }

  const handleUnstar = () => {
    unstar()
    addSnack('Unstarred!', { ...SUCCESSFUL_ACTION, undo: handleStar })
  }

  return (
    <TooltipButton
      tipText={isStarred ? 'Unstar' : 'Star'}
      onClick={isStarred ? handleUnstar : handleStar}
    >
      {isStarred ? <StarIcon /> : <StarOutlineIcon />}
    </TooltipButton>
  )
}

export default StarButton
