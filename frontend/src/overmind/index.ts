import { createHook } from 'overmind-react'
import { state } from './state'
import { onInitialize } from './onInitialize'
import * as actions from './action';
import { IConfig } from 'overmind'

export const config = {
    onInitialize,
    state,
    actions
}

declare module 'overmind' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Config extends IConfig<{
    state: typeof config.state,
    actions: typeof config.actions,
    //effects: typeof config.effects
  }> {}
  // Due to circular typing we have to define an
  // explicit typing of state, actions and effects since
  // TS 3.9
}
export const useOvermind = createHook<typeof config>()
//export const useState = createStateHook()