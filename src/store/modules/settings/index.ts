import { Module } from 'vuex'
// import { getters } from './getters'
// import { actions } from './actions'
// import { mutations } from './mutations'
import { state, Settings } from './state'
import { RootState } from '../../types'

const namespaced: boolean = true

const settings: Module<Settings, RootState> = {
    namespaced,
    state
    // getters,
    // actions,
    // mutations
}

export default settings
