import { describe, expect, it } from 'vitest'

import { characters } from '@/mocks/domians/characters/characters.data'

import { allCharactersMapper } from '.'

describe('allCharactersMapper', () => {
  it('should mapped data to domain', () => {
    const mappedData = allCharactersMapper.toDomain(characters)

    expect(mappedData).toStrictEqual({
      pagination: {
        count: 826,
        pages: 42,
      },
      characters: [
        {
          id: 361,
          name: 'Toxic Rick',
          status: 'Dead',
          specie: 'Humanoid',
          origin: 'Alien Spa',
          lastLocation: 'Earth',
        },
      ],
    })
  })
})
