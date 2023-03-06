import { useCallback, useEffect } from 'react'

import { Paginate } from '@/components/Paginate'
import { CharacterCard } from '@/components/Character'

import { useCharactersActions, useCharactersState } from '@/store/characters'

import { characterServices } from '@/http/services/characters'

import * as Styles from './styles'

const Dashboard = () => {
  const { characters, pagination } = useCharactersState()
  const { populateCharacters, populatePagination } = useCharactersActions()

  const getAllCharacters = useCallback(
    async (page = 1) => {
      const response = await characterServices.getAllCharacters(page)

      populateCharacters(response.characters)
      populatePagination(response.pagination)
    },
    [populateCharacters, populatePagination],
  )

  useEffect(() => {
    getAllCharacters()
  }, [getAllCharacters])

  return (
    <Styles.Wrapper>
      <Styles.Banner>
        <Styles.BannerHeading>The Rick and Morty APP</Styles.BannerHeading>
      </Styles.Banner>
      <Styles.Content>
        {!!characters.length &&
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              specie={character.specie}
              origin={character.origin}
              lastLocation={character.lastLocation}
            />
          ))}
      </Styles.Content>

      <Styles.PaginateWrapper>
        <Paginate
          totalPages={pagination.pages}
          onChangePage={(newPage) => getAllCharacters(newPage)}
        />
      </Styles.PaginateWrapper>
    </Styles.Wrapper>
  )
}

export default Dashboard
