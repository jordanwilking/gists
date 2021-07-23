import React from 'react'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import StarIcon from '@material-ui/icons/Star'
import TooltipButton from '../buttons/tooltip-button'
import useSnack from '../snack/use-snack'
import { SUCCESSFUL_ACTION } from '../snack/snack-props-presets'

type StarButtonProps = {
  isStarred: boolean
  star: () => void
  unstar: () => void
}

const StarButton = ({ isStarred, star, unstar }: StarButtonProps) => {
  const addSnack = useSnack()

  return (
    <TooltipButton
      tipText={isStarred ? 'Unstar' : 'Star'}
      onClick={() => {
        if (isStarred) {
          unstar()
          addSnack('Unstarred!', SUCCESSFUL_ACTION)
        } else {
          star()
          addSnack('Starred!', SUCCESSFUL_ACTION)
        }
      }}
    >
      {isStarred ? <StarIcon /> : <StarOutlineIcon />}
    </TooltipButton>
  )
}

export default StarButton
