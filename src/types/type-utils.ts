import { Gist, GistWithContent } from './gist-types'

/**
 * Determines whether a gist has content and sets its type accordingly
 */
export const isGistWithContent = (
  gist: Gist | GistWithContent
): gist is GistWithContent => {
  const gistWithContent = gist as GistWithContent

  // if any file has content, then this gist has content
  for (let prop in gistWithContent.files) {
    if (
      gistWithContent.files.hasOwnProperty(prop) &&
      gistWithContent.files[prop]?.content
    ) {
      return true
    }

    return false
  }
}
