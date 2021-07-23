import React, { ReactElement } from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton'

type TooltipButtonProps = {
  children: ReactElement
  tipText: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  TooltipProps?: TooltipProps
  IconButtonProps?: IconButtonProps
}

const TooltipButton = ({
  children,
  tipText,
  onClick,
  disabled,
  ...props
}: TooltipButtonProps) => {
  return (
    <Tooltip
      title={tipText}
      PopperProps={{ disablePortal: true }}
      {...props.TooltipProps}
    >
      <span>
        <IconButton
          onClick={onClick}
          disabled={disabled}
          {...props.IconButtonProps}
        >
          {children}
        </IconButton>
      </span>
    </Tooltip>
  )
}

export default TooltipButton
