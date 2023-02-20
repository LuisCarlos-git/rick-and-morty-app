import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import { Details } from '.'

describe('<Header />', () => {
  it('should render title and subtitle', () => {
    const { getByText } = render(
      <Details title="Rick" subtitle="Citadel of Ricks" />,
    )

    expect(getByText('Rick:')).toBeInTheDocument()
    expect(getByText('Citadel of Ricks')).toBeInTheDocument()
  })
})
