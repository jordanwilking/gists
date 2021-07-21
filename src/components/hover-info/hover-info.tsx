import React from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import DescriptionIcon from '@material-ui/icons/Description'
import { SvgIconProps } from '@material-ui/core'
import { truncate } from '../../utilities/string-utils'

type HoverInfoProps = {
  info: React.ReactNode
  TooltipProps?: TooltipProps
  IconProps?: SvgIconProps
}

const TooltipTitle = ({ info }: HoverInfoProps) => {
  const isString = typeof info === 'string'

  return (
    <>{isString ? <Typography variant='body2'>{info}</Typography> : info}</>
  )
}

const HoverInfo = ({ info, ...props }: HoverInfoProps) => {
  return (
    <Tooltip title={<TooltipTitle info={info} />} {...props.TooltipProps}>
      <DescriptionIcon fontSize='small' className='mx-2' {...props.IconProps} />
    </Tooltip>
  )
}

export default HoverInfo
