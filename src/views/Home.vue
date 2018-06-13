<template>
  <div class="home">
    <div class="play-game">
      <router-link to="/game">
        <span>play</span>
      </router-link>
    </div>
    <div class="settings">
      <div class="size-field">
        <input :value="settings.x" type="number" @change="handleChangeX">
        <input :value="settings.y" type="number" @change="handleChangeY">
      </div>
      <div class="">
        <span>Выбрано: {{ settings.typePlayer }}</span>
        <br>
        <input id="one" :checked="isTypePlayerEqualX" type="radio" @change="changeTypePlayer('X')">
        <label for="one">x</label>
        <br>
        <input id="two" :checked="!isTypePlayerEqualX" type="radio" @change="changeTypePlayer('O')">
        <label for="two">o</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

const namespace: string = 'settings'

@Component
export default class Home extends Vue {
  @State('settings') settings: any
  @Action('changeTypePlayer', { namespace }) changeTypePlayer: any
  @Action('changeX', { namespace }) changeX: any
  @Action('changeY', { namespace }) changeY: any

  handleChangeX (e: any): string {
    return this.changeX(e.target.value)
  }

  handleChangeY (e: any): string {
    return this.changeY(e.target.value)
  }

  get isTypePlayerEqualX (): boolean {
    return this.settings.typePlayer === 'X'
  }
}
</script>
