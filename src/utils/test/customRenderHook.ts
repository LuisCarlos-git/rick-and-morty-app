import { renderHook } from '@testing-library/react-hooks'

export const customRenderHook = <TReturnHook>(hook: () => TReturnHook) =>
  renderHook(() => hook()).result
