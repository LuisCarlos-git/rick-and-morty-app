import { act } from '@testing-library/react-hooks'
import { describe, expect, it } from 'vitest'

import { customRenderHook } from '@/utils/test/customRenderHook'

import { State } from '@/types/store/characters'

import { useCharactersActions, useCharactersState } from '.'
import { characters } from '@/mocks/domains/characters/characters.data'

describe('store[characters]', () => {
  it('should return initial state', () => {
    const result = customRenderHook(useCharactersState)

    expect(result.current).toStrictEqual({
      characters: [],
      pagination: {},
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

  it('should populate pagination data', () => {
    const resultActions = customRenderHook(useCharactersActions)
    const resultState = customRenderHook(useCharactersState)

    act(() => {
      resultActions.current.populatePagination(characters.info)
    })

    expect(resultState.current).toStrictEqual({
      characters: [
        {
          origin: 'earth',
          id: 1,
          lastLocation: 'earth',
          name: 'rick',
          specie: 'Human',
          status: 'alive',
        },
      ],
      pagination: characters.info,
    })
  })
})
