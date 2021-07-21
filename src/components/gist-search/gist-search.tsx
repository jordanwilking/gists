import React, { useState } from 'react'
// TODO: single imports
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  Menu,
  MenuItem,
  Paper,
  Tooltip,
  useTheme,
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchBar from '../search-bar/search-bar'
import { getSampleGist, getSampleGistFile } from './sample-data'
import Typography from '@material-ui/core/Typography'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import IconButton from '@material-ui/core/IconButton'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import FileCopyIcon from '@material-ui/icons/FileCopy'

const GistSearch = () => {
  // TODO: make width styles
  const [gists, setGists] = useState<Gist[]>(getSampleGist().data as Gist[])

  const handleSearchSubmit = (gists: Gist[]) => {
    // get our gists
    setGists(gists)
  }

  return (
    <Paper
      className='h-full'
      // style={{ border: '5px solid red' }}
    >
      <Grid
        container
        direction='column'
        className='h-full'
        wrap='nowrap'
        // style={{ border: '5px solid red' }}
      >
        <Grid
          container
          item
          alignItems='center'
          justifyContent='center'
          className='h-40'
          // style={{ border: '5px solid blue' }}
        >
          <SearchBar
            onSubmit={handleSearchSubmit}
            placeholder='Search Github Gists'
          />
        </Grid>
        <Grid
          container
          item
          className='h-9/10 overflow-y-auto p-2'
          style={
            {
              // border: '5px solid green',
            }
          }
        >
          {gists.map((gist) => {
            return <Gist key={gist.id} gist={gist} />
          })}
          {/* <GistContainer gists={gists} /> */}
        </Grid>
      </Grid>
    </Paper>
  )
}
type GistProps = {
  gist: Gist
}

const Gist = ({ gist }: GistProps) => {
  const key = Object.keys(gist.files)[0]
  const file = gist.files[key]

  return (
    <div
      className='flex w-full items-center md:h-80 xl:w-1/2 p-2'
      // style={{ border: '2px solid purple' }}
    >
      <GistSmallCard gist={gist} file={file} />
      <GistCard gist={gist} file={file} />
    </div>
  )
}

type GistDisplayProps = {
  gist: Gist
  file: GistFile
}

// TODO: props
const GistCard = ({ gist, file }: GistDisplayProps) => {
  const { palette } = useTheme()
  const numOfFiles = Object.keys(gist.files).length
  const sampleGist = getSampleGistFile()

  return (
    <Paper
      className='hidden relative md:inline-block w-full h-full min-h-64'
      elevation={8}
      // style={{ border: '2px solid green' }}
    >
      <div
        className='w-full m-2'
        // style={{ border: '2px solid blue' }}
      >
        <div>
          <Link color='secondary' href={gist.html_url}>
            {file.filename}
          </Link>
          {` - created ${gist.created_at}`}
          {` - ${numOfFiles} file${numOfFiles > 1 ? 's' : ''}`}
        </div>
        <div>{gist.description}</div>
      </div>
      <Divider variant='middle' />
      <div
        className='h-3/4 overflow-y-auto mx-2 mb-2'
        // style={{ border: '2px solid red' }}
      >
        <SyntaxHighlighter
          language={file?.language ? file.language.toLowerCase() : undefined}
          showLineNumbers
          style={dracula}
        >
          {sampleGist}
        </SyntaxHighlighter>
      </div>
      <div
        className='absolute top-0 right-0 z-10'
        style={{
          backgroundColor: palette.background.paper,
          // border: '2px solid red',
        }}
      >
        <Tooltip title='Copy'>
          <IconButton onClick={() => navigator.clipboard.writeText(sampleGist)}>
            <FileCopyIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Open'>
          <IconButton onClick={() => window.open(gist.html_url)}>
            <OpenInNewIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Favorite'>
          <IconButton onClick={() => {}}>
            <StarOutlineIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Paper>
  )
}

// TODO: type and consolidate
const GistSmallCard = ({ gist, file }: GistDisplayProps) => {
  return (
    <div
      className='flex w-full justify-between items-center md:hidden'
      style={{ border: '2px solid green' }}
    >
      <Link color='secondary' href={gist.html_url}>
        {file.filename}
      </Link>
      <VertMenu />
    </div>
  )
}

// TODO: name?
const VertMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const options = ['Star', 'Open gist', 'Open comments', 'Copy']

  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

type GistResponse = {}

type Gist = {
  id: string // gist id
  files: {
    [key: string]: GistFile
  }
  created_at: string
  description: string
  comments: number // number of comments
  comments_url: string
  html_url: string
  owner: GistOwner
  truncated: boolean
}

type GistFile = {
  filename: string
  type: string
  language: string
  raw_url: string
  size: 375
}

type GistOwner = {
  login: string // user's username
  id: number
  avatar_url: string
  url: string
}

type GistContainerProps = {
  gists: Gist[]
}

export default GistSearch
