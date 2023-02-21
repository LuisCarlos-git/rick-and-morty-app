import { GetAllCharactersMapperToDomain } from '@/types/services/characters'

type Characters = GetAllCharactersMapperToDomain['characters']
type Pagination = GetAllCharactersMapperToDomain['pagination']

export type State = {
  characters: Characters
  pagination: Pagination
}
export type Actions = {
  populateCharacters: (characters: Characters) => void
  populatePagination: (paginationData: Pagination) => void
}

export type StoreType = {
  state: State
  actions: Actions
}
