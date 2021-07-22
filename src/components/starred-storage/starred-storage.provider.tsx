import React, { createContext, useState, useContext } from 'react'
import { GistWithContent } from '../../types/gist-types'

type StarredStorageContextType = {
  starredGists: GistWithContent[]
  addGist: (gist: GistWithContent) => GistWithContent[]
  removeGist: (id: string) => GistWithContent[]
}

export const StarredStorageContext = createContext(
  {} as StarredStorageContextType
)

export const useStarredStorage = () => useContext(StarredStorageContext)

const STORED_GISTS = 'storedGists'
type Props = {
  children: React.ReactNode
}

/**
 * TODO: dupes
 */

const getGistsFromStorage = (): GistWithContent[] => {
  const storedGists = JSON.parse(localStorage.getItem(STORED_GISTS))
  return storedGists ?? []
}
const setGistsInStorage = (gists: GistWithContent[]) =>
  localStorage.setItem(STORED_GISTS, JSON.stringify(gists))

export const StarredStorageProvider = ({ children }: Props) => {
  const [starredGists, setStarredGists] = useState<GistWithContent[]>(
    getGistsFromStorage()
  )

  const addGist = (gist: GistWithContent) => {
    const storedGists = getGistsFromStorage()
    const newGists = [...storedGists, gist]
    setGistsInStorage(newGists)
    setStarredGists(newGists)
    return newGists
  }

  const removeGist = (id: string) => {
    const storedGists = getGistsFromStorage()
    const newGists = storedGists.filter((gist) => gist.id !== id)
    setGistsInStorage(newGists)
    setStarredGists(newGists)
    return newGists
  }

  return (
    <StarredStorageContext.Provider
      value={{ addGist, removeGist, starredGists }}
    >
      {children}
    </StarredStorageContext.Provider>
  )
}
