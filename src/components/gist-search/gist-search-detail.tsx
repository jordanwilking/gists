import { IconButton } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import React from 'react'
import { Gist as GistType } from '../../types/gist-types'

type GistSearchDetailsProps = {
  gists: GistType[]
}

/**
 * Displays data about the creator of the gists being displayed
 */
const GistSearchUserDetails = ({ gists }: GistSearchDetailsProps) => {
  if (!gists.length) return <></>
  const owner = gists[0].owner

  return (
    <Grid container item justifyContent='center'>
      <div className='flex justify-center w-3/5 xl:w-2/5 pl-2'>
        <div>
          viewing {gists.length} gists created by
          <IconButton
            className='ml-4'
            onClick={() => window.open(owner.html_url)}
          >
            <Avatar
              alt='vsouza'
              src={owner.avatar_url}
              style={{ height: 26, width: 26 }}
            />
          </IconButton>
          <Link color='secondary' href={owner.html_url}>
            {owner.login}
          </Link>
        </div>
      </div>
    </Grid>
  )
}

export default GistSearchUserDetails
