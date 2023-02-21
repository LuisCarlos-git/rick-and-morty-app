import { styled } from '@/styles/theme'

export const Wrapper = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
})
export const Button = styled('button', {
  appearance: 'none',
  border: 0,
  background: '$gray-secondary',
  color: '#fff',
  width: 60,
  borderRadius: '$sm',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
    color: '$light-gray',
  },
})
export const PagesWrapper = styled('div', {
  margin: '0 $16',
})
export const Page = styled('button', {
  padding: '$8 $16',
  fontSize: '$16',
  fontWeight: '$700',
  background: '$white',
  border: '2px solid transparent',
  borderRadius: '$md',

  '& + &': {
    marginLeft: '$8',
  },

  variants: {
    active: {
      true: {
        border: '2px solid $alive',
      },
    },
  },
})
