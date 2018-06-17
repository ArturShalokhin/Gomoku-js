import { ActionTree } from 'vuex'

import { ICoords } from '@/types/index'
import { IGameState } from './types'
import { RootState } from '../../types'
import * as types from './mutation-types'
import {
	checkWin as checkWinLib,
	generateMap as generateMapLib
} from '@/utils/lib'

export const generateMap = ({ commit }: any, payload: ICoords): void => {
	commit(types.GENERATE_MAP, generateMapLib(payload.x, payload.y))
}

export const move = async ({ dispatch, commit, state }: any, coords: ICoords): Promise<void> => {
	const { x, y } = coords

	if (!state.map[x][y] && !state.isEndGame) {
		commit(types.MOVE, coords)
		const checkWin = await dispatch('checkWin', { x, y })
		if (checkWin) {
			dispatch('endGame', checkWin)
		} else {
			dispatch('changePlayer')
		}
	}
}

export const changePlayer = ({ commit, state }: any): void => {
	const nextPlayer = state.currPlayer === 'X' ? 'O' : 'X'
	commit(types.CHANGE_PLAYER, nextPlayer)
}

export const checkWin = ({ state }: any, coords: ICoords): boolean|ICoords[] => {
	const map = [ ...state.map ]
	return checkWinLib(map, coords, state.currPlayer)
}

export const endGame = ({ commit }: any, coords: ICoords): void => {
	commit(types.SET_END_GAME, true)
	commit(types.SET_WIN_COORDS, coords)
}

export const restartGame = ({ commit }: any, coords: ICoords): void => {
	commit(types.GENERATE_MAP, generateMapLib(coords.x, coords.y))
	commit(types.SET_END_GAME, false)
	commit(types.CHANGE_PLAYER, 'X')
}

export const actions: ActionTree<IGameState, RootState> = {
  generateMap,
  move,
  changePlayer,
  checkWin,
  endGame,
  restartGame
}
