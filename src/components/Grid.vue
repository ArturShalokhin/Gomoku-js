<template>
	<div id="game">
		<div v-for="(row, indexRow) in map"
		     :key="indexRow"
		     :style="{ width: settings.y * 33 + 'px' }"
		     class="row">
			<div v-for="(column, index) in row"
					:key="index"
					:class="{ 'win-line': isWinValue(column) }"
					class="column"
			 		@click="move({ x: indexRow, y: index})">
			 	<span v-if="isWinValue(column)">
			 		{{ column.slice(0, -1) }}
			 	</span>
				<span v-else>{{column}}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Action } from 'vuex-class'

import { ISettingsState } from '@/store/modules/settings/types'

const namespace: string = 'game'

@Component
export default class Grid extends Vue {
	@Action('move', { namespace }) move: any

	@Prop() map: string[][]
	@Prop() settings: ISettingsState

	isWinValue (val: string): boolean {
		return val === 'X!' || val === 'O!'
	}
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
	line-height: 2;
	border: 1px solid aliceblue;
}

.win-line {
	background: #8ef08e;
}
</style>
