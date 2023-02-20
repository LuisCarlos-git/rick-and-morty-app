import { useCallback, useEffect } from 'react'

import { CharacterCard } from '@/components/Character'

import { useCharactersActions, useCharactersState } from '@/store/characters'

import { characterServices } from '@/http/services/characters'

import * as Styles from './styles'

const Dashboard = () => {
  const { characters } = useCharactersState()
  const { populateCharacters } = useCharactersActions()

  const getAllCharacters = useCallback(async () => {
    const response = await characterServices.getAllCharacters()

    populateCharacters(response.characters)
  }, [populateCharacters])

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
    </Styles.Wrapper>
  )
}

export default Dashboard
