import { generateMedia } from 'styled-media-query'

// example media queries
export const BREAKPOINT_SM = 576

export const BREAKPOINT_XXL = 1600

const media = generateMedia({
  sm: `${BREAKPOINT_SM}px`,
  xxl: `${BREAKPOINT_XXL}px`
})
export default media
