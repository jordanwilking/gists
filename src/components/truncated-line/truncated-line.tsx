import React from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import DescriptionIcon from '@material-ui/icons/Description'
import { SvgIconProps } from '@material-ui/core'

type TruncatedLine = {
  text: string
  maxLength: number
  DivProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
  TooltipProps?: TooltipProps
  IconProps?: SvgIconProps
}

const TruncatedLine = ({ text, maxLength, ...props }: TruncatedLine) => {
  let displayText

  if (text.length > maxLength) {
    displayText = text.slice(0, maxLength) + '...'
  }

  return (
    <div {...props.DivProps}>
      {displayText ? (
        <>
          {displayText}
          <Tooltip
            title={<Typography variant='body2'>{text}</Typography>}
            {...props.TooltipProps}
          >
            <DescriptionIcon
              fontSize='small'
              className='mx-2'
              {...props.IconProps}
            />
          </Tooltip>
        </>
      ) : (
        <>{text}</>
      )}
    </div>
  )
}

export default TruncatedLine
