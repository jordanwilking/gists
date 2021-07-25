import React, { createContext, useState, useContext } from 'react'
import { GistWithContent } from '../../types/gist-types'
import {
  getGistsFromStorage,
  setGistsInStorage,
} from './starred-storage-accessors'

type StarredStorageContextType = {
  addGist: (gist: GistWithContent) => GistWithContent[]
  removeGist: (id: string) => GistWithContent[]
  isStarred: (gist: GistWithContent) => boolean
}

export const StarredStorageContext = createContext(
  {} as StarredStorageContextType
)

export const useStarredStorage = () => useContext(StarredStorageContext)

type Props = {
  children: React.ReactNode
}

/**
 * Provides a context for managing starred gists in localStorage
 */
export const StarredStorageProvider = ({ children }: Props) => {
  const [starredGists, setStarredGists] = useState<GistWithContent[]>(
    getGistsFromStorage()
  )

  const addGist = (gist: GistWithContent) => {
    const newGists = [...starredGists, gist]
    setStarredGists(newGists)
    setGistsInStorage(newGists)
    return newGists
  }

  const removeGist = (id: string) => {
    const newGists = starredGists.filter((gist) => gist.id !== id)
    setStarredGists(newGists)
    setGistsInStorage(newGists)
    return newGists
  }

  const isStarred = (gist: GistWithContent) =>
    Boolean(starredGists.find((starred) => starred.id === gist.id))

  return (
    <StarredStorageContext.Provider value={{ addGist, removeGist, isStarred }}>
      {children}
    </StarredStorageContext.Provider>
  )
}
