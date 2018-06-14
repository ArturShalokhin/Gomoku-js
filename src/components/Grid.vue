<template>
	<div>
		<div class="row" v-for="(row, indexRow) in map">
			<div class="column" v-for="(column, index) in row" @click="setValue({ x: indexRow, y: index})">
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

	@Prop({default: []})
  map: Array
}
</script>

<style>
.row {
	width: 150px;
}

.column {
	width: 30px;
	height: 30px;
	background: #e1d5d5;
	float: left;
	border: 1px solid aliceblue;
}
</style>
