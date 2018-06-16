import { ActionTree } from 'vuex'

import { GameState } from './types'
import { RootState } from '../../types'
import * as types from './mutation-types'
import { checkWin as checkWinLib } from '@/utils/lib'

export const generateMap = ({ commit }: any, payload: any): void => {
	const map = Array(payload.x).fill(null).map(() => Array(payload.y).fill(null))
	commit(types.GENERATE_MAP, map)
}

export const setValue = ({ dispatch, commit, state }: any, coords: any): void => {
	const { x, y } = coords
	if (!state.map[x][y]) {
		commit(types.SET_VALUE, coords)
		dispatch('changePlayer')
	}
	dispatch('checkWin', { x, y })
}

export const changePlayer = ({ commit, state }: any, payload: any): void => {
	const nextPlayer = state.currPlayer === 'X' ? 'O' : 'X'
	commit(types.CHANGE_PLAYER, nextPlayer)
}

export const checkWin = ({ state }: any, coords: any): boolean => {
	const map = [ ...state.map ]
	const nextPlayer = state.currPlayer === 'X' ? 'O' : 'X'
	const win = checkWinLib(map, coords, nextPlayer)

	console.log(win)
	return true
}

export const actions: ActionTree<GameState, RootState> = {
  generateMap,
  setValue,
  changePlayer,
  checkWin
}
