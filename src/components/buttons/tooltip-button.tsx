import React, { ReactElement } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'

type TooltipButtonProps = {
  children: ReactElement
  tipText: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const TooltipButton = ({ children, tipText, onClick }: TooltipButtonProps) => {
  return (
    <Tooltip title={tipText}>
      <IconButton onClick={onClick}>{children}</IconButton>
    </Tooltip>
  )
}

export default TooltipButton
