import Grid from '@material-ui/core/Grid'
import React from 'react'
import Gist from '../gist-search/gist'
import GistSearchMessage from '../gist-search/gist-search-message'
import { useStarredStorage } from '../starred-storage/starred-storage.provider'

const StarredGists = () => {
  const { starredGists } = useStarredStorage()

  return (
    <Grid container direction='column' className='h-full pt-10' wrap='nowrap'>
      <Grid container item className='overflow-y-auto p-2'>
        {starredGists.length === 0 && (
          <GistSearchMessage message='No starred gists - search for gists and star the ones that you like' />
        )}
        {starredGists.map((gist) => (
          <Gist key={gist.id} gist={gist} showUser />
        ))}
      </Grid>
    </Grid>
  )
}

export default StarredGists
