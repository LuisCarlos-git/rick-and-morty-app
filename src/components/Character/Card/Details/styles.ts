import { styled } from '@/styles/theme'

export const Wrapper = styled('section', {
  display: 'block',

  '& + &': {
    marginTop: '$8',
  },
})

export const Title = styled('span', {
  color: '$light-gray',
  fontWeight: '$700',
  fontSize: '$16',
})

export const Subtitle = styled('p', {
  color: '$white',
  fontSize: '$20',
  marginTop: '$4',
})
