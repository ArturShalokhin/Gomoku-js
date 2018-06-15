import { ActionTree } from 'vuex'

import { GameState } from './types'
import { RootState } from '../../types'
import * as types from './mutation-types'

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
	const { x, y } = coords
	const centerValue = map[x][y]

	const verticalLine = (x) => {
		const countCell: number = 4
		const line = []
		const max = x + countCell
		const min = x - countCell

		for (let i = min; i < x; i++) {
			if (map[i]) {
				line.push(map[i][y])
			}
		}

		line.push(map[x][y])

		for (let i = x + 1; i <= max; i++) {
			if (map[i]) {
				line.push(map[i][y])
			}
		}
		return line
	}
	let vl = verticalLine(x)
	const reg = new RegExp(`${state.currPlayer}{5}`, 'i')
	console.log(reg)
	vl = vl.map((item) => item || 0)
	console.log(vl)
	let isWin = vl.join('').search(reg)
	console.log(isWin)
	// todo vert hor lines
	// todo diagonal lines
	// const winnerLine = ['', /(1){5,}/, /(2){5,}/];

	return true
}

export const actions: ActionTree<GameState, RootState> = {
  generateMap,
  setValue,
  changePlayer,
  checkWin
}
