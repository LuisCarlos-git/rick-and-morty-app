import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import { CardHeader } from '.'

describe('<Header />', () => {
  it('should render character name and character status', () => {
    const { getByText } = render(
      <CardHeader characterName="Rick" status="Alive" specie="Human" />,
    )

    expect(getByText('Rick')).toBeInTheDocument()
    expect(getByText('Alive - Human')).toBeInTheDocument()
  })
})
