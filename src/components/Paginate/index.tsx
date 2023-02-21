import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import * as Styles from './styles'

type PaginateProps = {
  totalPages: number
  onChangePage: (newPage: number) => void
}

const MAX_ITEMS = 5
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export const Paginate = ({ totalPages, onChangePage }: PaginateProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const firstPage = Math.max(currentPage - MAX_LEFT, 1)

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
      <Styles.Button
        aria-label="previous page"
        disabled={currentPage === 1}
        onClick={previousPage}
      >
        <CaretLeft weight="bold" size={24} />
      </Styles.Button>
      <Styles.PagesWrapper>
        {Array.from({ length: Math.min(MAX_ITEMS, totalPages) })
          .map((_, index) => index + firstPage)
          .map((page) => {
            // if (page > totalPages) return null
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
      </Styles.PagesWrapper>
      <Styles.Button
        aria-label="next page"
        disabled={currentPage >= totalPages}
        onClick={nextPage}
      >
        <CaretRight weight="bold" size={24} />
      </Styles.Button>
    </Styles.Wrapper>
  )
}
