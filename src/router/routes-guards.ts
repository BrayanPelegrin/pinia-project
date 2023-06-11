import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useLayoutStore } from '@/store'
export const clearLayoutTitle = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  console.log({ to, from, next })
  useLayoutStore().setTitle(undefined)
  next()
}
