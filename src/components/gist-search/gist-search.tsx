import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import SearchBar from '../search-bar/search-bar'
import { GistResponse, Gist as GistType } from '../../types/gist-types'
import Gist from './gist'
import axios from 'axios'
import GistSearchDetails from './gist-search-detail'

/**
 * Grabs previously search's gists from local storage
 * Return an empty array if no gists were saved
 */
const getPrevSearch = (): GistType[] => {
  const prevSearch = localStorage.getItem('prevSearch')
  return prevSearch ? JSON.parse(prevSearch) : []
}

const GistSearch = () => {
  const [gists, setGists] = useState<GistType[]>(getPrevSearch())

  const handleSubmit = async (searchInput: string) => {
    // TODO: error handling, remove page limit
    const res: GistResponse = await axios.get(
      `https://api.github.com/users/${searchInput}/gists`
    )

    localStorage.setItem('prevSearch', JSON.stringify(res.data))
    setGists(res.data)
  }

  return (
    <Paper square className='h-full'>
      <Grid container direction='column' className='h-full' wrap='nowrap'>
        <Grid
          container
          item
          direction='column'
          alignItems='center'
          justifyContent='center'
          className='h-40 min-h-40'
        >
          <SearchBar
            onSubmit={handleSubmit}
            placeholder='Search Github Gists'
          />
          {!!gists.length && <GistSearchDetails gists={gists} />}
        </Grid>
        <Grid container item className='overflow-y-auto p-2'>
          {gists.map((gist) => {
            return <Gist key={gist.id} gistId={gist.id} />
          })}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GistSearch
