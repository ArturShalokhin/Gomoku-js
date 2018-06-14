<template>
  <div class="about">
    <h1>This is a game page</h1>
    <Grid :map="game.map"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

import Grid from '../components/Grid.vue'

const namespace: string = 'game'

@Component({
  components: {
    Grid
  }
})
export default class Game extends Vue {
  @State('game') game: any
  @State('settings') settings: any
  @Action('generateMap', { namespace }) generateMap: any

  created () {
    this.generateMap({ x: this.settings.x, y: this.settings.y })
  }
}
</script>
