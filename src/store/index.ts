import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { settings } from './modules/settings/index'
import { game } from './modules/game/index'
import { RootState } from './types'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    settings,
    game
  }
}

export default new Vuex.Store(store)
