<template>
	<div id="game">
		<div v-for="(row, indexRow) in map" v-bind:key="indexRow" class="row">
			<div v-for="(column, index) in row"
					v-bind:key="index"
					class="column"
			 		@click="setValue({ x: indexRow, y: index})">
				<span>{{column}} </span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Action } from 'vuex-class'

const namespace: string = 'game'

@Component
export default class Grid extends Vue {
	@Action('setValue', { namespace }) setValue: any

	@Prop()
	map: string[][]
}
</script>

<style>
#game {
	display: inline-block;
	margin: auto;
	overflow: hidden;
	user-select: none;
}
.row {
	width: 485px;
}

.column {
	width: 30px;
	height: 30px;
	background: #e1d5d5;
	float: left;
	border: 1px solid aliceblue;
}
</style>
