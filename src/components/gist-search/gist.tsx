import React, { useState } from 'react'
import { Gist, GistWithContent } from '../../types/gist-types'
import { useEffect } from 'react'
import axios from 'axios'
import GistSmallCard from '../gist-card/small-card/gist-small-card'
import GistCard from '../gist-card/card/gist-card'
import useGistFilesInfo from '../gist-card/useGistFilesInfo'

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

  // TODO: skeleton
  if (isLoading) {
    return <div>Loading</div>
  }

  return <GistCardDisplay gist={gist} />
}

type GistCardDisplayProps = {
  gist: GistWithContent
}

const GistCardDisplay = ({ gist }: GistCardDisplayProps) => {
  const fileInfo = useGistFilesInfo(gist)

  return (
    <div className='flex w-full items-center md:max-h-80 xl:w-1/2 p-2'>
      <GistSmallCard gist={gist} fileInfo={fileInfo} />
      <GistCard gist={gist} fileInfo={fileInfo} />
    </div>
  )
}

export default Gist
