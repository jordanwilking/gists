import { GistWithContent } from '../../types/gist-types'

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
export const setGistsInStorage = (gists: GistWithContent[]) =>
  localStorage.setItem(STORED_GISTS, JSON.stringify(gists))
