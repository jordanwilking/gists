import React, { useState } from 'react'
import { Gist, GistWithContent } from '../../types/gist-types'
import { useEffect } from 'react'
import axios from 'axios'
import GistSmallCard from './gist-small-card'
import GistCard from './gist-card'

type GistProps = {
  gistId: string
  gist: GistWithContent
}

const Gist = ({ gistId, gist }: GistProps) => {
  // const [gist, setGist] = useState<Gist>()
  const [isLoading, setIsLoading] = useState(true)

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

  const fileNames = Object.keys(gist.files)
  const file = gist.files[fileNames[0]]

  return (
    <div
      className='flex w-full items-center md:h-80 xl:w-1/2 p-2'
      // style={{ border: '2px solid purple' }}
    >
      <GistSmallCard gist={gist} file={file} />
      <GistCard gist={gist} />
    </div>
  )
}

export default Gist
