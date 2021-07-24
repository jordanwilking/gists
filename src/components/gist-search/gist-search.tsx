import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
import React, { useState } from 'react'
import { Gist as GistType } from '../../types/gist-types'
import SearchBar from '../search-bar/search-bar'
import Gist from './gist'
import GistSearchUserDetails from './gist-search-detail'

/**
 * Grabs previously search's gists from local storage
 * Return an empty array if no gists were saved
 */
const getPrevSearch = (): GistType[] => {
  const prevSearch = localStorage.getItem('prevSearch')
  return prevSearch ? JSON.parse(prevSearch) : []
}

/**
 * The parent component for searching gists
 * Handles component displays and the initial search
 */
const GistSearch = () => {
  const [gists, setGists] = useState<GistType[]>(getPrevSearch())
  const [isLoading, setIsLoading] = useState(false)
  const [notFoundMessage, setNotFoundMessage] = useState('')

  const handleSubmit = (searchInput: string) => {
    setIsLoading(true)

    axios
      .get(`https://api.github.com/users/${searchInput}/gists`)
      .then((res) => {
        const returnedGists: GistType[] = res.data

        if (returnedGists.length) {
          // gists found - reset message and store localStorage
          setNotFoundMessage('')
          localStorage.setItem('prevSearch', JSON.stringify(returnedGists))
        } else {
          // gists not found, but no errors
          setNotFoundMessage(`No gists found for ${searchInput}`)
        }

        setGists(returnedGists)
        setTimeout(() => setIsLoading(false), 1000)
      })
      .catch(() => {
        // request returned not modified, forbidden, or not found
        setTimeout(() => setIsLoading(false), 1000)
        setGists([])
        setNotFoundMessage(`No user found for ${searchInput}`)
      })
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
            isLoading={isLoading}
          />
          {notFoundMessage && <GistSearchMessage message={notFoundMessage} />}
          {!!gists.length && <GistSearchUserDetails gists={gists} />}
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

const GistSearchMessage = ({ message }: { message: string }) => {
  return (
    <Grid container item justifyContent='center'>
      <div className='flex justify-center w-3/5 xl:w-2/5 pl-2 py-4'>
        {message}
      </div>
    </Grid>
  )
}

export default GistSearch
