import { MutationTree } from 'vuex'

import { IGameState } from './types'
import {
  GENERATE_MAP,
  MOVE,
  CHANGE_PLAYER,
  SET_END_GAME,
  SET_WIN_COORDS
} from './mutation-types'

import { ICoords } from '@/types/index'

export const mutations: MutationTree<IGameState> = {
	[GENERATE_MAP] (state, payload: string[][]) {
		state.map = [ ...payload ]
	},
	[MOVE] (state, payload: ICoords) {
		state.map[payload.x][payload.y] = state.currPlayer
		state.map = [...state.map]
	},
	[CHANGE_PLAYER] (state, payload: string) {
		state.currPlayer = payload
	},
	[SET_END_GAME] (state, payload: boolean) {
		state.isEndGame = payload
	},
	[SET_WIN_COORDS] (state, payload: ICoords[]) {
		const currStateMap = [ ...state.map ]
		payload.forEach((item) => {
			currStateMap[item.x][item.y] = `${state.currPlayer}!`
		})
		state.map = currStateMap
	}
}
