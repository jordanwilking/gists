import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase'
import Paper, { PaperProps } from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import SearchIcon from '@material-ui/icons/Search'

type SearchBarProps = {
  onSubmit: (searchText: string) => void
  placeholder?: string
  PaperProps?: PaperProps
  InputProps?: InputBaseProps
}

const SearchBar = ({ onSubmit, placeholder, ...props }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    onSubmit(searchInput)
    setSearchInput('')
  }

  // TODO: theme onHover styles
  return (
    <Paper
      component='form'
      className='flex items-center justify-between w-3/5 xl:w-2/5 px-4 py-2 focus-within:border-2 focus-within:border-pink-700'
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
      <Tooltip title='Search'>
        <IconButton type='submit'>
          <SearchIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  )
}

export default SearchBar
