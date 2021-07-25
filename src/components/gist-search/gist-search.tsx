import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import React, { useState } from 'react'
import { Gist as GistType } from '../../types/gist-types'
import SearchBar from '../search-bar/search-bar'
import { validateGists } from '../validation/validate-gists'
import Gist from './gist'
import GistSearchUserDetails from './gist-search-detail'
import GistSearchMessage from './gist-search-message'
import { getPrevSearch } from './previous-search-storage'

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

        setGists(validateGists(returnedGists))
        setTimeout(() => setIsLoading(false), 1000)
      })
      .catch((error) => {
        // request returned not modified, forbidden, or not found
        if (error?.response?.status === 403) {
          setNotFoundMessage('Github api rate limit exceeded')
        } else {
          setNotFoundMessage(`No user found for ${searchInput}`)
        }
        setTimeout(() => setIsLoading(false), 1000)
        setGists([])
      })
  }

  return (
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
        {gists.map((gist) => (
          <Gist key={gist.id} gist={gist} />
        ))}
      </Grid>
    </Grid>
  )
}

export default GistSearch
