import { createStitches } from '@stitches/react'

export const convertPxToRem = (value: number) => `${value / 16}rem`

export const { styled, theme, globalCss } = createStitches({
  theme: {
    colors: {
      'gray-secondary': 'rgb(60, 62, 68)',
      'gray-primary': 'rgb(39, 43, 51)',
      white: '#fff',
      dead: 'rgb(214, 61, 46)',
      alive: 'rgb(85, 204, 68)',
      hover: 'rgb(255, 152, 0)',
      'light-gray': 'rgb(158, 158, 158)',
    },

    space: {
      4: convertPxToRem(4),
      8: convertPxToRem(8),
      12: convertPxToRem(12),
      16: convertPxToRem(16),
      20: convertPxToRem(20),
      24: convertPxToRem(24),
    },
    fontSizes: {
      12: convertPxToRem(12),
      16: convertPxToRem(16),
      20: convertPxToRem(20),
      24: convertPxToRem(24),
      28: convertPxToRem(28),
      32: convertPxToRem(32),
    },

    radii: {
      sm: convertPxToRem(4),
      md: convertPxToRem(8),
      full: convertPxToRem(999999),
    },

    fontWeights: {
      700: 700,
    },
  },
})
