import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { settings } from './modules/settings/index'
import { RootState } from './types'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    settings
  }
}

export default new Vuex.Store(store)
