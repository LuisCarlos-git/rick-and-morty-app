import { setupServer } from 'msw/node'
import { describe, expect, it } from 'vitest'
import { render, waitFor } from '@testing-library/react'

import { charactersHandlers } from '@/mocks/domians/characters/characters.handlers'

import Dashboard from '.'

export const mswServer = setupServer(...charactersHandlers)

describe('<Dashboard />', () => {
  beforeEach(() => mswServer.listen())
  afterEach(() => mswServer.resetHandlers())
  afterAll(() => mswServer.close())
  it('should render character card', async () => {
    const { getByText } = render(<Dashboard />)

    await waitFor(() => {
      expect(getByText('Toxic Rick')).toBeInTheDocument()
      expect(getByText('Dead - Humanoid')).toBeInTheDocument()
    })
  })
})
