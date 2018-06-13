<template>
  <div class="about">
    <h1>This is an game page</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

const namespace: string = 'game'

@Component
export default class Game extends Vue {
  @State('game') game: any
  @State('settings') settings: any
  @Action('generateMap', { namespace }) generateMap: any

  created () {
    this.generateMap({ x: this.settings.x, y: this.settings.y })
  }
  // @Action('changeX', { namespace }) changeX: any
  // @Action('changeY', { namespace }) changeY: any

  // get isTypePlayerEqualX (): boolean {
  //   return this.settings.typePlayer === 'X'
  // }
}
</script>
