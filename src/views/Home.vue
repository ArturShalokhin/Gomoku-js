<template>
  <div class="home">
  	<div class="play-game">
  		<router-link to="/game">
  			<span>play</span>
  		</router-link>
  	</div>
  	<div class="settings">
  		<div class="size-field">
  			<input v-model.number.lazy="x" type="number" name="x">
  			<input v-model.number.lazy="y" type="number" name="y">
  		</div>
  		<div class="">
        <span>Выбрано: {{ picked }}</span>
        <br>
  			<input id="one" v-model="picked" value="X" type="radio">
				<label for="one">x</label>
				<br>
				<input id="two" v-model="picked" value="O" type="radio">
				<label for="two">o</label>
  		</div>
  	</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
	picked: string
  x: number
  y: number

	constructor () {
		super()
		this.picked = 'X'
    this.x = 50
    this.y = 50
	}
}
</script>
