import { Module } from 'vuex'
// import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { state } from './state'
import { RootState } from '../../types'
import { IGameState } from './types'

const namespaced: boolean = true

export const game: Module<IGameState, RootState> = {
  namespaced,
  state,
  actions,
  mutations
    // getters,
}
