import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase'
import Paper, { PaperProps } from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import SearchIcon from '@material-ui/icons/Search'
import React, { useState } from 'react'

type SearchBarProps = {
  onSubmit: (searchText: string) => void
  placeholder?: string
  isLoading?: boolean
  PaperProps?: PaperProps
  InputProps?: InputBaseProps
}

const borderStyles =
  ' border-transparent border-2 hover:border-blue focus-within:border-blue'

const SearchBar = ({
  onSubmit,
  isLoading,
  placeholder,
  ...props
}: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault() // prevents default form redirect
    onSubmit(searchInput)
    setSearchInput('')
  }

  return (
    <Paper
      component='form'
      className={
        'flex items-center justify-between w-3/5 xl:w-2/5 pr-4 ' + borderStyles
      }
      onSubmit={handleSubmit}
      elevation={8}
      {...props.PaperProps}
    >
      <InputBase
        autoFocus
        placeholder={placeholder || 'Search'}
        className='h-full w-full pl-4 py-4'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        {...props.InputProps}
      />
      <div className='flex items-center'>
        {isLoading && (
          <CircularProgress color='inherit' size={21} className='mr-2' />
        )}
        <Tooltip title='Search'>
          <IconButton type='submit'>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Paper>
  )
}

export default SearchBar
