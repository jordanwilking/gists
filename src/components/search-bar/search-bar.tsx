import React, { useState } from 'react'
import {
  IconButton,
  InputBase,
  InputBaseProps,
  Paper,
  PaperProps,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { getSampleGist } from '../gist-search/sample-data'
import axios from 'axios'

type SearchBarProps = {
  // TODO: type
  onSubmit: (gists: any) => void
  placeholder?: string
  PaperProps?: PaperProps
  InputProps?: InputBaseProps
}

const SearchBar = ({ onSubmit, placeholder, ...props }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    setSearchInput('')
    onSubmit(getSampleGist().data)
  }

  return (
    // TODO: onHover styles
    <Paper
      component='form'
      className='flex items-center justify-between w-2/5 px-4 py-2'
      onSubmit={handleSubmit}
      {...props.PaperProps}
    >
      <InputBase
        placeholder={placeholder || 'Search'}
        className='w-full'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        {...props.InputProps}
      />
      <IconButton type='submit'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
