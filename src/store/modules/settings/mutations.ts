import { MutationTree } from 'vuex'

import { ISettingsState } from './types'
import {
  CHANGE_TYPE_PLAYER,
  CHANGE_X,
  CHANGE_Y
} from './mutation-types'

export const mutations: MutationTree<ISettingsState> = {
	[CHANGE_TYPE_PLAYER] (state, payload: string) {
		state.typePlayer = payload
	},
	[CHANGE_X] (state, payload: number) {
		state.x = payload
	},
	[CHANGE_Y] (state, payload: number) {
		state.y = payload
	}
}
