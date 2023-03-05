import { setupWorker } from 'msw'
import { charactersHandlers } from './domains/characters/characters.handlers'

export const worker = setupWorker(...charactersHandlers)
