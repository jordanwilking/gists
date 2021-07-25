import { Gist } from '../../types/gist-types'

export const validateGists = (gists: Gist[]) => {
  return gists.filter((gist) => {
    // Check some standard values in the structure
    if (gist?.id && gist?.owner?.id && gist.files) {
      // Verify that the gist has at least 1 file
      for (let prop in gist.files) {
        if (gist.files.hasOwnProperty(prop)) return true
      }
    }

    // Gist is invalid - don't keep it
    return false
  })
}
