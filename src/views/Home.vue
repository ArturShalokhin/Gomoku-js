<template>
  <div class="home">
  	<div class="play-game">
  		<router-link to="/game">
  			<span>play</span>
  		</router-link>
  	</div>
  	<div class="settings">
  		<div class="size-field">
        <!-- <input v-model.number.lazy="x" type="number" name="x"> -->
        <!-- <input v-model.number.lazy="y" type="number" name="y"> -->
  			<input :value="settings.x" type="number" name="x">
  			<input :value="settings.y" type="number" name="y">
  		</div>
  		<div class="">
        <span>Выбрано: {{ picked }}</span>
        <br>
  			<input id="one" v-model="settings.typePlayer" value="X" type="radio">
				<label for="one">x</label>
				<br>
				<input id="two" v-model="settings.typePlayer" value="O" type="radio">
				<label for="two">o</label>
  		</div>
  	</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'

import { state } from '../store/modules/settings/state'

@Component
export default class Home extends Vue {
  @State('settings') settings: state
}
</script>
