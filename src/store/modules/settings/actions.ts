import { ActionTree } from 'vuex'

import { ISettingsState } from './types'
import { RootState } from '../../types'
import * as types from './mutation-types'

export const changeX = ({ commit }: { commit: any }, payload: string): void => {
	commit(types.CHANGE_X, parseInt(payload))
}

export const changeY = ({ commit }: { commit: any }, payload: string): void => {
	commit(types.CHANGE_Y, parseInt(payload))
}

export const actions: ActionTree<ISettingsState, RootState> = {
  changeX,
  changeY
}
