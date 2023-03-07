import { convertPxToRem, styled } from '@/styles/theme'

export const Wrapper = styled('main', {
  background: '$gray-primary',
  paddingBottom: 40,
})
export const Banner = styled('section', {
  height: convertPxToRem(300),
  background: '$white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@md': {
    justifyContent: 'flex-start',
    paddingLeft: '$8',
  },
})
export const BannerHeading = styled('h1', {
  fontSize: 70,
  fontWeight: '$700',

  '@md': {
    fontSize: 50,
    wordBreak: 'break-world',
  },
})
export const Content = styled('section', {
  maxWidth: convertPxToRem(1400),
  margin: '0 auto',
  padding: '$24 0',
  display: 'grid',
  gap: '$16',
  gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',

  '@md': {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 $16',
    paddingTop: '$16',
  },
})

export const PaginateWrapper = styled('section', {
  maxWidth: convertPxToRem(1400),
  margin: '0 auto',
  paddingTop: '$24',
  display: 'flex',
  justifyContent: 'flex-end',

  '@md': {
    justifyContent: 'center',
  },
})
