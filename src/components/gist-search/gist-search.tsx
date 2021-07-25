import { useTheme } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
import React, { useState } from 'react'
import { Gist as GistType } from '../../types/gist-types'
import SearchBar from '../search-bar/search-bar'
import Gist from './gist'
import GistSearchUserDetails from './gist-search-detail'
import { getPrevSearch } from './previous-search-storage'

const validateGists = (gists: GistType[]) => {
  return gists.filter((gist) => {
    // Check some standard values in the structure
    if (gist?.id && gist?.owner?.id && gist.files) {
      // Verify that the gist has at least 1 file
      for (let prop in gist.files) {
        if (gist.files.hasOwnProperty(prop)) return true
      }
    }

    // Gist is in valid - don't keep it
    return false
  })
}

/**
 * The parent component for searching gists
 * Handles component displays and the initial search
 */
const GistSearch = () => {
  const { palette } = useTheme()
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

        // TODO: validate gists and only keep the ones that pass
        setGists(validateGists(returnedGists))
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
    <Paper
      square
      className='h-full'
      style={{ background: palette.background.default }}
    >
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
