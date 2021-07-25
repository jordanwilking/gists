import { expect } from 'chai'
import LocalStorageMock from '../../testing/local-storage-mock'
import {
  getSampleGists,
  getSampleGistsWithFileContent,
  getSampleGistsWithFileContentOneInvalid,
} from '../../testing/sample-data'
import { GistWithContent } from '../../types/gist-types'
import {
  getGistsFromStorage,
  setGistsInStorage,
  STORED_GISTS,
} from './starred-storage-accessors'

const globalAny: any = global
globalAny.localStorage = new LocalStorageMock()

describe('getGistsFromStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  it('returns empty array because no gists are stored', () => {
    const gists = getGistsFromStorage()
    expect(gists.length).to.equal(0)
  })
  it('returns gists from localStorage', () => {
    const storedGists = getSampleGists().data
    const firstGistId = storedGists[0].id
    localStorage.setItem(STORED_GISTS, JSON.stringify(storedGists))

    const gists = getGistsFromStorage()

    expect(gists.length).to.equal(storedGists.length)
    expect(gists[0].id).to.equal(firstGistId)
  })
})
describe('setGistsInStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  it('it stores the gists in localStorage', () => {
    const gistsToStore = getSampleGistsWithFileContent()
      .data as GistWithContent[]
    const firstGistId = gistsToStore[0].id
    setGistsInStorage(gistsToStore)
    const gists = JSON.parse(
      localStorage.getItem(STORED_GISTS)
    ) as GistWithContent[]

    expect(gists.length).to.equal(gistsToStore.length)
    expect(gists[0].id).to.equals(firstGistId)
  })
  it('it stores only valid gists in localStorage', () => {
    const gistsToStore = getSampleGistsWithFileContentOneInvalid()
      .data as GistWithContent[]
    setGistsInStorage(gistsToStore)
    const gists = JSON.parse(
      localStorage.getItem(STORED_GISTS)
    ) as GistWithContent[]

    expect(gists.length).to.equal(gistsToStore.length - 1)
  })
  it('it handles empty array', () => {
    const gistsToStore = [] as GistWithContent[]
    setGistsInStorage(gistsToStore)
    const gists = JSON.parse(
      localStorage.getItem(STORED_GISTS)
    ) as GistWithContent[]

    expect(gists.length).to.equal(0)
  })
  it('it handles invalid array content', () => {
    const gistsToStore = ['invalid'] as any
    setGistsInStorage(gistsToStore)
    const gists = JSON.parse(
      localStorage.getItem(STORED_GISTS)
    ) as GistWithContent[]

    expect(gists.length).to.equal(0)
  })
  it('it handles invalid non-array content', () => {
    const gistsToStore = 'invalid' as any
    setGistsInStorage(gistsToStore)
    const gists = JSON.parse(
      localStorage.getItem(STORED_GISTS)
    ) as GistWithContent[]

    expect(gists.length).to.equal(0)
  })
})
