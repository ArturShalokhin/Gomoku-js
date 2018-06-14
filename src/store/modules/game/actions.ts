import { ActionTree } from 'vuex'

import { GameState } from './types'
import { RootState } from '../../types'
import * as types from './mutation-types'

export const generateMap = ({ commit }: { commit: any }, payload: any): void => {
	const map = Array(payload.x).fill(null).map(() => Array(payload.y).fill(null))
	commit(types.GENERATE_MAP, map)
}

export const setValue = ({ commit }: { commit: any }, payload: any): void => {
	commit(types.SET_VALUE, payload)
}

export const actions: ActionTree<GameState, RootState> = {
  generateMap,
  setValue
}
