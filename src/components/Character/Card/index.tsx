import * as Styles from './styles'

import { CardHeader, Status } from './Header'
import { Details } from './Details'

import { CharactersToDomain } from '@/types/services/characters'

type CardProps = CharactersToDomain

export const Card = ({
  origin,
  lastLocation,
  name,
  specie,
  status,
  id,
}: CardProps) => (
  <Styles.Wrapper>
    <Styles.CharacterImage>
      <img
        src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
        alt={name}
      />
    </Styles.CharacterImage>
    <Styles.Content>
      <CardHeader
        characterName={name}
        status={status as Status}
        specie={specie}
      />
      <Styles.DetailsWrapper>
        <Details title="Last known location" subtitle={lastLocation} />
        <Details title="Origin" subtitle={origin} />
      </Styles.DetailsWrapper>
    </Styles.Content>
  </Styles.Wrapper>
)
