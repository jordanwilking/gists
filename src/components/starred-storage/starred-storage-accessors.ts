import { GistWithContent } from '../../types/gist-types'

export const STORED_GISTS = 'storedGists'

export const getGistsFromStorage = (): GistWithContent[] => {
  const storedGists = JSON.parse(localStorage.getItem(STORED_GISTS))
  return storedGists ?? []
}

export const setGistsInStorage = (gists: GistWithContent[]) =>
  localStorage.setItem(STORED_GISTS, JSON.stringify(gists))
