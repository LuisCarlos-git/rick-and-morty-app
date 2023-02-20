import {
  GetAllCharactersMapperToDomain,
  GetAllCharactersResponse,
} from '@/types/services/characters'

import { allCharactersMapper } from '@/utils/mappers/characters'

import { httpClient } from '../httpClient'

class CharactersServices {
  async getAllCharacters(): Promise<GetAllCharactersMapperToDomain> {
    const response = await httpClient.get<GetAllCharactersResponse>(
      '/character',
    )

    return allCharactersMapper.toDomain(response.data)
  }
}

export const characterServices = new CharactersServices()
