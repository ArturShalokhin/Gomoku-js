import { Module } from 'vuex'
// import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { state } from './state'
import { RootState } from '../../types'
import { ISettingsState } from './types'

const namespaced: boolean = true

export const settings: Module<ISettingsState, RootState> = {
    namespaced,
    state,
    actions,
    mutations
    // getters,
}
