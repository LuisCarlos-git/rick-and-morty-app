import { setupServer } from 'msw/node'
import { describe, expect, it } from 'vitest'
import { act, fireEvent, render, waitFor } from '@testing-library/react'

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

  it('should render paginate component', async () => {
    const { getByLabelText, getByText } = render(<Dashboard />)

    const nextPageButton = getByLabelText('next page')

    act(() => {
      fireEvent.click(nextPageButton)
    })

    await waitFor(() => {
      expect(getByText('Morty')).toBeInTheDocument()
    })
  })
})
