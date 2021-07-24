import { useEffect, useState } from 'react'
import { SUCCESSFUL_ACTION } from '../../snack/snack-props-presets'
import useSnack from '../../snack/use-snack'
import { GistMenuOptionsProps } from './gist-menu-options'

type Option = {
  name: string
  onClick: (value?: string) => void
}

/**
 * Hook for gist options
 * Keeps them up-to-date
 */
const useGistOptions = ({ url, content }: GistMenuOptionsProps): Option[] => {
  const [options, setOptions] = useState<Option[]>([])
  const addSnack = useSnack()

  useEffect(() => {
    setOptions([
      {
        name: 'Open',
        onClick: () => window.open(url),
      },
      {
        name: 'Copy',
        onClick: () => {
          navigator.clipboard.writeText(content)
          addSnack('Copied!', SUCCESSFUL_ACTION)
        },
      },
    ])
  }, [url, content])

  return options
}

export default useGistOptions
