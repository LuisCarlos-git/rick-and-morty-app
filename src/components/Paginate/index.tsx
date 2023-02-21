import { useState } from 'react'
import * as Styles from './styles'

type PaginateProps = {
  total: number
  limit: number
  onChangePage: (newPage: number) => void
}

const MAX_ITEMS = 5
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export const Paginate = ({ total, onChangePage, limit }: PaginateProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const firstPage = Math.max(currentPage - MAX_LEFT, 1)
  const totalPages = Math.ceil(total / limit)

  const handleChangeDirectPage = (page: number) => {
    onChangePage(page)
    setCurrentPage(page)
  }

  const previousPage = () => {
    onChangePage(currentPage - 1)
    setCurrentPage((prev) => prev - 1)
  }

  const nextPage = () => {
    onChangePage(currentPage + 1)
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <Styles.Wrapper>
      <button disabled={currentPage === 1} onClick={previousPage}>
        Previous page
      </button>
      {Array.from({ length: Math.min(MAX_ITEMS, totalPages) })
        .map((_, index) => index + firstPage)
        .map((page) => {
          if (page > totalPages) return null
          return (
            <Styles.Page
              aria-label="current page"
              onClick={() => handleChangeDirectPage(page)}
              active={currentPage === page}
              key={page}
            >
              {page}
            </Styles.Page>
          )
        })}
      <button disabled={currentPage >= totalPages} onClick={nextPage}>
        Next page
      </button>
    </Styles.Wrapper>
  )
}
