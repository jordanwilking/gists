import { SvgIconProps } from '@material-ui/core'
import { TooltipProps } from '@material-ui/core/Tooltip'
import React from 'react'
import { truncate } from '../../utilities/string-utils'
import HoverInfo from '../hover-info/hover-info'

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

/**
 * Display component for text intended for use in GistCard
 * If text is too long, it is displayed with an icon
 * to display the full text on hover
 */
const TruncatedLine = ({
  text,
  maxLength,
  DivProps,
  ...props
}: TruncatedLine) => {
  let displayText

  if (text.length > maxLength) {
    displayText = truncate(text, maxLength)
  }

  return (
    <div {...DivProps}>
      {displayText ? (
        <>
          {displayText}
          <HoverInfo info={text} {...props} />
        </>
      ) : (
        <>{text}</>
      )}
    </div>
  )
}

export default TruncatedLine
