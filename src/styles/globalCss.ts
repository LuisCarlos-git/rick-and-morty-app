import { globalCss } from './theme'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  body: {
    background: '$black',
    height: '100vh',
    fontFamily: 'Roboto',
  },
})
