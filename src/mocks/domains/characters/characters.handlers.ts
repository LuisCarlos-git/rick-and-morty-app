import { rest } from 'msw'

import { BASE_URL } from '@/http/httpClient/apiClient'

import { characters, charactersAnotherPage } from './characters.data'

const getAllCharacters = rest.get(`${BASE_URL}/character`, (req, res, ctx) => {
  const page = req.url.searchParams.get('page')

  if (page && Number(page) !== 1) {
    return res(ctx.status(200), ctx.json(charactersAnotherPage))
  }

  return res(ctx.status(200), ctx.json(characters))
})

export const charactersHandlers = [getAllCharacters]
