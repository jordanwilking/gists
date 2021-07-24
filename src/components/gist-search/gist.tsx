import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Gist, GistWithContent } from '../../types/gist-types'
import GistCardDisplay from './gist-card-display'
import GistCardDisplaySkeleton from './gist-card-display-skeleton'

type GistProps = {
  gistId: string
}

/**
 * Queries for each individual gist and displays
 * loading state and cards
 */
const Gist = ({ gistId }: GistProps) => {
  const [gist, setGist] = useState<GistWithContent>()
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    axios
      .get(`https://api.github.com/gists/${gistId}`)
      .then((res) => {
        setGist(res.data)
        setIsLoading(false)
      })
      .catch(() => {
        setHasError(true)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <GistCardDisplaySkeleton />
  }

  // error - don't show this card
  if (hasError) return <></>

  return <GistCardDisplay gist={gist} />
}

export default Gist
