import React, { createContext, useState, useContext } from 'react'
import { GistWithContent } from '../../types/gist-types'
import {
  getGistsFromStorage,
  setGistsInStorage,
} from './starred-storage-accessors'

type StarredStorageContextType = {
  starredGists: GistWithContent[]
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

  const isStarred = (gist: GistWithContent) =>
    Boolean(starredGists.find((starred) => starred.id === gist.id))

  return (
    <StarredStorageContext.Provider
      value={{ starredGists, addGist, removeGist, isStarred }}
    >
      {children}
    </StarredStorageContext.Provider>
  )
}
