import { describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, waitFor } from '@testing-library/react'

import { Paginate } from '.'

describe('<Paginate />', () => {
  it('should render pages', () => {
    const { getAllByLabelText } = render(
      <Paginate onChangePage={vi.fn()} totalPages={2} />,
    )

    expect(getAllByLabelText('current page')).toHaveLength(1)
    expect(getAllByLabelText('page')).toHaveLength(1)
  })

  it('should be first item is active', async () => {
    const { baseElement } = render(
      <Paginate onChangePage={vi.fn()} totalPages={2} />,
    )

    await waitFor(() => {
      expect(baseElement).toMatchSnapshot()
    })
  })

  it('should switch to next page after when click button page', async () => {
    const nextPage = vi.fn()
    const { getByText } = render(
      <Paginate onChangePage={nextPage} totalPages={2} />,
    )

    act(() => {
      const element = getByText('2')

      fireEvent.click(element)
    })

    await waitFor(() => {
      expect(nextPage).toHaveBeenCalledWith(2)
    })

    act(() => {
      const element = getByText('1')

      fireEvent.click(element)
    })

    await waitFor(() => {
      expect(nextPage).toHaveBeenCalledWith(1)
    })
  })

  it('should switch page when Next and Previuos button has clicked', async () => {
    const nextPage = vi.fn()
    const { getByLabelText } = render(
      <Paginate onChangePage={nextPage} totalPages={2} />,
    )

    act(() => {
      const element = getByLabelText('next page')

      fireEvent.click(element)
    })

    await waitFor(() => {
      expect(nextPage).toHaveBeenCalledWith(2)
    })

    act(() => {
      const element = getByLabelText('previous page')

      fireEvent.click(element)
    })

    await waitFor(() => {
      expect(nextPage).toHaveBeenCalledWith(1)
    })
  })
})
