type Location = {
  name: string
  url: string
}

type Pagination = {
  count: number
  pages: number
  next: string
  prev: string | null
}

type Result = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: Date
}

export type CharactersToDomain = {
  id: number
  name: string
  status: string
  specie: string
  lastLocation: Location['name']
  origin: Location['name']
}

export type PaginationToDomain = {
  count: number
  pages: number
}

export type GetAllCharactersResponse = {
  info: Pagination
  results: Result[]
}

export type GetAllCharactersMapperToDomain = {
  pagination: PaginationToDomain
  characters: CharactersToDomain[]
}
