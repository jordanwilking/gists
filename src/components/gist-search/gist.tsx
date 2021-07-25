import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Gist, GistWithContent } from '../../types/gist-types'
import { isGistWithContent } from '../../types/type-utils'
import GistCardDisplay from './gist-card-display'
import GistCardDisplaySkeleton from './gist-card-display-skeleton'
import { addFileToPrevSearch } from './previous-search-storage'

type GistProps = {
  gist: Gist | GistWithContent
  showUser?: boolean
}

/**
 * Queries for each individual gist and displays
 * loading state and cards
 */
const Gist = ({ gist, showUser }: GistProps) => {
  const [gistWithContent, setGistWithContent] = useState<GistWithContent>()
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (isGistWithContent(gist)) {
      // previous search already has content, so we can
      // load it up without making requests
      setGistWithContent(gist)
      setIsLoading(false)
    } else {
      axios
        .get(`https://api.github.com/gists/${gist.id}`)
        .then((res) => {
          setGistWithContent(res.data)
          addFileToPrevSearch(res.data)
          setIsLoading(false)
        })
        .catch(() => {
          setHasError(true)
          setIsLoading(false)
        })
    }
  }, [])

  if (isLoading) return <GistCardDisplaySkeleton />

  // error - don't show this card
  if (hasError) return <></>

  return <GistCardDisplay gist={gistWithContent} showUser={showUser} />
}

export default Gist
