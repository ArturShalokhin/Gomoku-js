import { MutationTree } from 'vuex'

import { GameState } from './types'
import {
  GENERATE_MAP
} from './mutation-types'

export const mutations: MutationTree<GameState> = {
	[GENERATE_MAP] (state, payload: Array<Array<string|null>>) {
		state.map = [ ...payload ]
	}
}
