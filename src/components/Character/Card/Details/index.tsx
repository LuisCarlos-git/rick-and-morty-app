import * as Styles from './styles'

type DetailsProps = {
  title: string
  subtitle: string
}

export const Details = ({ subtitle, title }: DetailsProps) => (
  <Styles.Wrapper>
    <Styles.Title>{title}:</Styles.Title>
    <Styles.Subtitle>{subtitle}</Styles.Subtitle>
  </Styles.Wrapper>
)
