import React, { useState } from 'react'
import { Gist, GistWithContent } from '../../types/gist-types'
import { useEffect } from 'react'
import axios from 'axios'
import GistSmallCard from '../gist-card/small-card/gist-small-card'
import GistCard from '../gist-card/card/gist-card'
import useGistFilesInfo from '../gist-card/useGistFilesInfo'

type GistProps = {
  gistId: string
  gist: GistWithContent
}

const Gist = ({ gistId, gist }: GistProps) => {
  // const [gist, setGist] = useState<Gist>()
  const [isLoading, setIsLoading] = useState(true)
  const fileInfo = useGistFilesInfo(gist)

  // TODO: error
  useEffect(() => {
    // axios
    //   .get(`https://api.github.com/gists/${gistId}`)
    //   .then((res) => {
    //     setGist(res.data)
    //     setIsLoading(false)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    setIsLoading(false)
  }, [])

  // TODO: skeleton
  if (isLoading) {
    return <div>Loading</div>
  }

  return (
    <div className='flex w-full items-center md:max-h-80 xl:w-1/2 p-2'>
      <GistSmallCard gist={gist} fileInfo={fileInfo} />
      <GistCard gist={gist} fileInfo={fileInfo} />
    </div>
  )
}

export default Gist
