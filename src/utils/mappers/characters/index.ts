import {
  GetAllCharactersMapperToDomain,
  GetAllCharactersResponse,
} from '@/types/services/characters'

class AllCharactersMapper {
  public toDomain(
    persistenceData: GetAllCharactersResponse,
  ): GetAllCharactersMapperToDomain {
    return {
      pagination: {
        count: persistenceData.info.count,
        pages: persistenceData.info.pages,
      },
      characters: persistenceData.results.map((character) => ({
        id: character.id,
        name: character.name,
        origin: character.origin.name,
        lastLocation: character.location.name,
        specie: character.species,
        status: character.status,
      })),
    }
  }
}

export const allCharactersMapper = new AllCharactersMapper()
