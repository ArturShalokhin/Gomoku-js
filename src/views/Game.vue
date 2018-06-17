<template>
  <div class="game-page">
	<router-link :to="linkHome" class="go-home">
		<i class="material-icons">home</i>
	</router-link>
	<button class="restart" @click="handleRestartGame">
		<i class="material-icons">autorenew</i>
	</button>
    <h1 v-if="game.isEndGame">Выиграл {{ game.currPlayer }}</h1>
    <h1 v-else>Ходит {{ game.currPlayer }}</h1>
    <Grid :map="game.map" :settings="settings"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

import { IGameState } from '@/store/modules/game/types'
import { ISettingsState } from '@/store/modules/settings/types'
import Grid from '../components/Grid.vue'

const namespace: string = 'game'

@Component({
  components: {
    Grid
  }
})
export default class Game extends Vue {
  linkHome = { name: 'home' }
  @State('game') game: IGameState
  @State('settings') settings: ISettingsState
  @Action('generateMap', { namespace }) generateMap: any
  @Action('restartGame', { namespace }) restartGame: any

  handleRestartGame () {
  	this.restartGame({ x: this.settings.x, y: this.settings.y })
  }

  created () {
    this.generateMap({ x: this.settings.x, y: this.settings.y })
  }
}
</script>

<style>
	.restart, .go-home {
		position: absolute;
	    top: 0;
	    text-align: center;
	    vertical-align: middle;
	    color: #fcfcfc;
	    background: #e1d5d5;
	    border: none;
	    outline: none;
	    cursor: pointer;
	    height: 40px;
	    width: 40px;
	}
	.restart {
		right: 1px;
	}
	.go-home {
		left: 0;
		line-height: 3;
	}
</style>
