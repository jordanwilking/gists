import { GistWithContent } from '../../types/gist-types'
import { validateGists } from '../validation/validate-gists'

export const STORED_GISTS = 'storedGists'

/**
 * Returns starred gists from localStorage
 * If no gists are in storage, returns an empty array
 */
export const getGistsFromStorage = (): GistWithContent[] => {
  const storedGists: GistWithContent[] = JSON.parse(
    localStorage.getItem(STORED_GISTS)
  )
  return storedGists ?? []
}

/**
 * Sets starred gists in localStorage
 */
export const setGistsInStorage = (gists: GistWithContent[]) => {
  if (!Array.isArray(gists))
    return localStorage.setItem(STORED_GISTS, JSON.stringify([]))

  const validGists = validateGists(gists)
  localStorage.setItem(STORED_GISTS, JSON.stringify(validGists))
}
