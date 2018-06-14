import { MutationTree } from 'vuex'

import { GameState } from './types'
import {
  GENERATE_MAP,
  SET_VALUE
} from './mutation-types'

export const mutations: MutationTree<GameState> = {
	[GENERATE_MAP] (state, payload: Array<Array<string|null>>) {
		state.map = [ ...payload ]
	},
	[SET_VALUE] (state, payload: any) {
		state.map[payload.x][payload.y] = state.currPlayer
		state.map = [...state.map]
	}
}
