import { GistWithContent, Gist } from '../../types/gist-types'

/**
 * Grabs previously search's gists from local storage
 * Return an empty array if no gists were saved
 */
export const getPrevSearch = (): Gist[] => {
  const prevSearch = localStorage.getItem('prevSearch')
  return prevSearch ? JSON.parse(prevSearch) : []
}

/**
 * Adds file content to the relevant gist in the previous search.
 * This reduces the number of initial calls that we need to make
 * by the number of files in the all of the gists in the prev search.
 */
export const addFileToPrevSearch = (gistWithContent: GistWithContent) => {
  const prevSearch = localStorage.getItem('prevSearch')
  let gists: Gist[] = prevSearch ? JSON.parse(prevSearch) : []
  const gistIndex = gists.findIndex((gist) => gist.id === gistWithContent.id)
  gists[gistIndex] = gistWithContent
  localStorage.setItem('prevSearch', JSON.stringify(gists))
}
