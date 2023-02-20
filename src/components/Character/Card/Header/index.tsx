import * as Styles from './styles'

export type Status = 'Alive' | 'Dead' | 'Unknown'

type CardHeaderProps = {
  characterName: string
  status: Status
  specie: string
}

export type CardHeadersVariants = Lowercase<Status>

export const CardHeader = ({
  characterName,
  specie,
  status,
}: CardHeaderProps) => {
  const variant = status.toLowerCase() as CardHeadersVariants
  return (
    <Styles.Wrapper>
      <Styles.CharacterName>{characterName}</Styles.CharacterName>
      <Styles.CharacterStatus
        aria-label="status indicator"
        variant={variant}
      >{`${status} - ${specie}`}</Styles.CharacterStatus>
    </Styles.Wrapper>
  )
}
