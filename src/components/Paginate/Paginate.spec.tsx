import { describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, waitFor } from '@testing-library/react'

import { Paginate } from '.'

describe('<Paginate />', () => {
  it('should render pages', () => {
    const { getAllByLabelText } = render(
      <Paginate onChangePage={vi.fn()} total={40} limit={20} />,
    )

    expect(getAllByLabelText('current page')).toHaveLength(2)
  })

  it('should initial page will be first item', async () => {
    const { baseElement, getByText } = render(
      <Paginate onChangePage={vi.fn()} total={40} limit={20} />,
    )

    await waitFor(() => {
      expect(getByText('1')).toHaveClass('c-fkEELj c-fkEELj-fgLFNL-active-true')
      expect(baseElement).toMatchSnapshot()
    })
  })

  it('should change to next page after change to previous page', async () => {
    const nextPage = vi.fn()
    const { getByText } = render(
      <Paginate onChangePage={nextPage} total={40} limit={20} />,
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

  it('should switch to next page after switching to previous page when next and previous button is clicked', async () => {
    const nextPage = vi.fn()
    const { getByText } = render(
      <Paginate onChangePage={nextPage} total={40} limit={20} />,
    )

    act(() => {
      const element = getByText('Next page')

      fireEvent.click(element)
    })

    await waitFor(() => {
      expect(nextPage).toHaveBeenCalledWith(2)
    })

    act(() => {
      const element = getByText('Previous page')

      fireEvent.click(element)
    })

    await waitFor(() => {
      expect(nextPage).toHaveBeenCalledWith(1)
    })
  })
})
