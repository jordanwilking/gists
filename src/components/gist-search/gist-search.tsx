import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import SearchBar from '../search-bar/search-bar'
import { getSampleGistWithFileContent } from './sample-data'
import { GistResponse, GistWithContent } from '../../types/gist-types'
import Gist from './gist'
import axios from 'axios'

const GistSearch = () => {
  const [gists, setGists] = useState<GistWithContent[]>(
    getSampleGistWithFileContent().data as GistWithContent[]
  )

  const handleSubmit = async (searchInput: string) => {
    // TODO: error handling, remove page limit
    // const res: GistResponse = await axios.get(
    //   `https://api.github.com/users/${searchInput}/gists?per_page=3`
    // )

    // setGists(res.data)

    setGists(gists)
  }

  return (
    <Paper square className='h-full'>
      <Grid container direction='column' className='h-full' wrap='nowrap'>
        <Grid
          container
          item
          alignItems='center'
          justifyContent='center'
          className='h-40'
        >
          <SearchBar
            onSubmit={handleSubmit}
            placeholder='Search Github Gists'
          />
        </Grid>
        <Grid container item className='overflow-y-auto p-2'>
          {gists.map((gist) => {
            return <Gist key={gist.id} gistId={gist.id} gist={gist} />
          })}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GistSearch
