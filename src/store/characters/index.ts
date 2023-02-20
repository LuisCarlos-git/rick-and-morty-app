import { create } from 'zustand'
import produce from 'immer'

import { StoreType } from '@/types/store/characters'

const useCharacters = create<StoreType>((set) => {
  const setState = (fn: (state: StoreType['state']) => void) =>
    set(produce<StoreType>(({ state }) => fn(state)))

  return {
    state: {
      characters: [],
    },
    actions: {
      populateCharacters(characters) {
        setState((state) => {
          state.characters = characters
        })
      },
    },
  }
})

export const useCharactersActions = () =>
  useCharacters((store) => store.actions)

export const useCharactersState = () => useCharacters((store) => store.state)
