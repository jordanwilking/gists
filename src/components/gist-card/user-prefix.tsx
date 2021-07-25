import Link from '@material-ui/core/Link'
import React from 'react'

type UserPrefixProps = {
  userName: string
  url: string
}

const UserPrefix = ({ userName, url }: UserPrefixProps) => {
  return (
    <>
      <Link color='secondary' href={url}>{`${userName}`}</Link>
      <span className='mx-1'>-</span>
    </>
  )
}

export default UserPrefix
