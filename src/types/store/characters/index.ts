import { GetAllCharactersMapperToDomain } from '@/types/services/characters'

type Characters = GetAllCharactersMapperToDomain['characters']

export type State = {
  characters: Characters
}
export type Actions = {
  populateCharacters: (characters: Characters) => void
}

export type StoreType = {
  state: State
  actions: Actions
}
