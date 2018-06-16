import { MutationTree } from 'vuex'

import { IGameState } from './types'
import {
  GENERATE_MAP,
  SET_VALUE,
  CHANGE_PLAYER
} from './mutation-types'

import { ICoords } from '@/types/index'

export const mutations: MutationTree<IGameState> = {
	[GENERATE_MAP] (state, payload: string[][]) {
		state.map = [ ...payload ]
	},
	[SET_VALUE] (state, payload: ICoords) {
		state.map[payload.x][payload.y] = state.currPlayer
		state.map = [...state.map]
	},
	[CHANGE_PLAYER] (state, payload: string) {
		state.currPlayer = payload
	}
}
