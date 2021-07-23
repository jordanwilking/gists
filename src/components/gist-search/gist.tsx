import React, { useState } from 'react'
import { Gist, GistWithContent } from '../../types/gist-types'
import { useEffect } from 'react'
import axios from 'axios'
import GistCardDisplay from './gist-card-display'
import GistCardDisplaySkeleton from './gist-card-display-skeleton'

type GistProps = {
  gistId: string
}

const Gist = ({ gistId }: GistProps) => {
  const [gist, setGist] = useState<GistWithContent>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://api.github.com/gists/${gistId}`)
      .then((res) => {
        setGist(res.data)
        setIsLoading(false)
      })
      .catch((error) => {
        // TODO: this can post errors if no user
        console.log(error)
      })
  }, [])

  if (isLoading) {
    return <GistCardDisplaySkeleton />
  }

  return <GistCardDisplay gist={gist} />
}

export default Gist
