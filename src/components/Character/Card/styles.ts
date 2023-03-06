import { styled, convertPxToRem } from '@/styles/theme'

export const Wrapper = styled('article', {
  background: '$gray-secondary',
  height: convertPxToRem(220),
  borderRadius: '$md',
  overflow: 'hidden',
  display: 'flex',

  '@md': {
    paddingBottom: '$8',
    height: 200,
  },
})

export const Content = styled('div', {
  marginLeft: '$16',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingTop: '$12',
})

export const DetailsWrapper = styled('div', {
  marginTop: '$16',
})

export const CharacterImage = styled('div', {
  img: {
    width: '100%',
    height: '100%',
  },

  '@md': {
    maxWidth: 200,
    height: 'fit-content',
  },
})
