import { convertPxToRem, styled } from '@/styles/theme'

export const Wrapper = styled('main', {
  background: '$gray-primary',
})
export const Banner = styled('section', {
  height: convertPxToRem(300),
  background: '$white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
export const BannerHeading = styled('h1', {
  fontSize: 70,
  fontWeight: '$700',
})
export const Content = styled('section', {
  maxWidth: convertPxToRem(1400),
  margin: '0 auto',
  padding: '$24 0',
  display: 'grid',
  gap: '$16',
  gridTemplateColumns: 'repeat(2, 1fr)',
})
