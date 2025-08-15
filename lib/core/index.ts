import type { AddFunction } from '../types'

export const add: AddFunction = (a: number, b: number): number => {
  return a + b
}
export default {
  add
}