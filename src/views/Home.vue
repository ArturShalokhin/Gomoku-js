<template>
  <div class="home">
    <div class="home-container">
      <h1>Крестики нолики (5 в ряд)</h1>
      <div class="play-game">
        <router-link to="/game" class="link">
          <span>Играть</span>
        </router-link>
      </div>
      <div class="settings">
        <div class="size-field">
          <div class="input-container">
            <label>
              <p>Клеток по вертикали</p>
              <input :value="settings.x" type="number" @change="handleChangeX">
            </label>
            </div>
          <div class="input-container">
            <label>
              <p>Клеток по горизонтали</p>
              <input :value="settings.y" type="number" @change="handleChangeY">
            </label>
          </div>
        </div>
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

<style lang="scss">
  #app, body {
    margin: 0;
    user-select: none;
  }

  .home {
    height: 80vh;
    padding-top: 20vh;
    background: #efe4e4;
    overflow: hidden;
  }

  .home-container {
    margin: auto;
    width: 80%;
  }

  .link {
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  .input-container {
    overflow: hidden;

    label {
      display: inline-block;
    }
  }
</style>
