export type GistResponse = {
  data: Gist[]
  status: number
  statusText: string
}

export type GistBase = {
  id: string // gist id
  created_at: string
  description: string
  comments: number // number of comments
  comments_url: string
  html_url: string
  owner: GistOwner
  truncated: boolean
}

export type Gist = {
  files: {
    [key: string]: GistFile
  }
} & GistBase

export type GistFileWithContent = { content: string } & GistFile

export type GistWithContent = {
  files: {
    [key: string]: GistFileWithContent
  }
} & GistBase

export type GistFile = {
  filename: string
  type: string
  language: string
  raw_url: string
  size: 375
}

export type GistOwner = {
  login: string // user's username
  id: number
  avatar_url: string
  url: string
  html_url: string
}
