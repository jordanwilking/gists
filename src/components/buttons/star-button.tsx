import IconButton from '@material-ui/core/IconButton'
import StarIcon from '@material-ui/icons/Star'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import React from 'react'

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
  return (
    <IconButton onClick={isStarred ? unstar : star}>
      {isStarred ? <StarIcon /> : <StarOutlineIcon />}
    </IconButton>
  )
}

export default StarButton
