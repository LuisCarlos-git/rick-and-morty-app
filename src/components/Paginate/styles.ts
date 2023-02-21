import { styled } from '@/styles/theme'

export const Wrapper = styled('div')
export const Page = styled('button', {
  padding: '$8 $16',
  fontSize: '$16',
  fontWeight: '$700',
  background: '$white',
  border: '2px solid transparent',
  borderRadius: '$md',

  variants: {
    active: {
      true: {
        border: '2px solid $alive',
      },
    },
  },
})
