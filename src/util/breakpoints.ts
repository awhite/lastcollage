import { css } from 'styled-components'

export const desktop = (...args: any) => css`
  @media (min-width: 768px) {
    ${
      // @ts-ignore
      css(...args)
    }
  }
`

export const mobile = (...args: any) => css`
  @media (max-width: 767.98px) {
    ${
      // @ts-ignore
      css(...args)
    }
  }
`
