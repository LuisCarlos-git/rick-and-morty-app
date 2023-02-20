import { rest } from 'msw'

import { BASE_URL } from '@/http/httpClient/apiClient'

import { characters } from './characters.data'

const getAllCharacters = rest.get(`${BASE_URL}/character`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(characters))
})

export const charactersHandlers = [getAllCharacters]
