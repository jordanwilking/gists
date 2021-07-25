import React from 'react'
import GistSearch from '../gist-search/gist-search'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMenu from '../../hooks/useMenu'
import SearchIcon from '@material-ui/icons/Search'
import StarIcon from '@material-ui/icons/Star'
import Typography from '@material-ui/core/Typography'
import { Switch, Route, useHistory, withRouter, Link } from 'react-router-dom'
import StarredGists from '../starred-page/starred-gists'
import Background from './background'

const Routes = () => {
  const history = useHistory()
  const { anchorEl, open, closeMenu, updateAnchor } = useMenu()

  return (
    <>
      <div className='absolute top-0 left-0'>
        <IconButton onClick={updateAnchor}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={closeMenu}>
          <MenuItem
            selected={history.location.pathname === '/'}
            key={'Search'}
            component={Link}
            to='/'
            onClick={closeMenu}
          >
            <SearchIcon className='mr-2' />
            <Typography>Search</Typography>
          </MenuItem>
          <MenuItem
            selected={history.location.pathname === '/starred'}
            key={'Starred'}
            component={Link}
            to='/starred'
            onClick={closeMenu}
          >
            <StarIcon className='mr-2' />
            <Typography>Starred</Typography>
          </MenuItem>
        </Menu>
      </div>

      <Switch>
        <Route path='/starred'>
          <Background>
            <StarredGists />
          </Background>
        </Route>
        <Route path='/'>
          <Background>
            <GistSearch />
          </Background>
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(Routes)
