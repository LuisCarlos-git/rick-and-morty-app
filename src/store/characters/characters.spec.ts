import { act } from '@testing-library/react-hooks'
import { describe, expect, it } from 'vitest'

import { customRenderHook } from '@/utils/test/customRenderHook'

import { State } from '@/types/store/characters'

import { useCharactersActions, useCharactersState } from '.'

describe('store[characters]', () => {
  it('should return initial state', () => {
    const result = customRenderHook(useCharactersState)

    expect(result.current).toStrictEqual({
      characters: [],
    })
  })

  it('should add character in state', () => {
    const resultActions = customRenderHook(useCharactersActions)
    const resultState = customRenderHook(useCharactersState)

    const characters: State['characters'] = [
      {
        origin: 'earth',
        id: 1,
        lastLocation: 'earth',
        name: 'rick',
        specie: 'Human',
        status: 'alive',
      },
    ]

    act(() => {
      resultActions.current.populateCharacters(characters)
    })

    expect(resultState.current.characters).toHaveLength(1)
  })
})
