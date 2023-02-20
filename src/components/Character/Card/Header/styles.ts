import { styled } from '@/styles/theme'

export const Wrapper = styled('section', {})
export const CharacterName = styled('h3', {
  color: '$white',
  fontSize: '$24',
})
export const CharacterStatus = styled('span', {
  fontSize: '$16',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  marginTop: '$4',

  variants: {
    variant: {
      alive: {
        '&::before': {
          marginRight: '$8',
          display: 'block',
          content: '',
          background: '$alive',
          width: 10,
          height: 10,
          borderRadius: '$full',
        },
      },
      dead: {
        '&::before': {
          marginRight: '$8',
          display: 'block',
          content: '',
          background: '$dead',
          width: 10,
          height: 10,
          borderRadius: '$full',
        },
      },
      unknown: {
        '&::before': {
          marginRight: '$8',
          display: 'block',
          content: '',
          background: '$gray-primary',
          width: 10,
          height: 10,
          borderRadius: '$full',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'unknown',
  },
})
