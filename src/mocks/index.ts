import { setupWorker } from 'msw'
import { charactersHandlers } from './domians/characters/characters.handlers'

export const worker = setupWorker(...charactersHandlers)
