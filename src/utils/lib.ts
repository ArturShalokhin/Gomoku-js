/**
 * Вертикальная линия хода
 *
 * @return object
 */
export const getVerticalLine = (map, stepCoords): any => {
	const { x, y } = stepCoords
	const countCell: number = 4
	const line = []
	const coords = []
	const max: number = x + countCell
	const min: number = x - countCell

	for (let i = min; i <= max; i++) {
		if (map[i]) {
			line.push(map[i][y])
			coords.push({ x: i, y })
		}
	}

	return { line, coords }
}

/**
 * Горизонтальная линия хода
 *
 * @return object
 */
export const getHorizontalLine = (map, stepCoords): any => {
	const { x, y } = stepCoords
	const countCell: number = 4
	const line = []
	const coords = []
	const max = y + countCell
	const min = y - countCell

	for (let i = min; i <= max; i++) {
		if (map[i]) {
			line.push(map[x][i])
			coords.push({ x, y: i })
		}
	}

	return { line, coords }
}

/**
 * Диагональная слева на право линия хода
 *
 * @return object
 */
export const getDiagonalLeftLine = (map, stepCoords): any => {
	let { x, y } = stepCoords
	const countCell: number = 4
	const line = []
	const coords = []
	const maxX = x + countCell
	let minX = x - countCell
	let minY = y - countCell

	do {
		if (map[minX]) {
			line.push(map[minX][minY])
			coords.push({ x: minX, y: minY })
		}
		minX++
		minY++
	} while (minX <= maxX)

	return { line, coords }
}

/**
 * Диагональная справа на лево линия хода
 *
 * @return object
 */
export const getDiagonalRightLine = (map, stepCoords): any => {
	let { x, y } = stepCoords
	const countCell: number = 4
	const line = []
	const coords = []
	const maxX = x + countCell
	let minX = x - countCell
	let maxY = y + countCell

	do {
		if (map[minX]) {
			line.push(map[minX][maxY])
			coords.push({ x: minX, y: maxY })
		}
		minX++
		maxY--
	} while (minX <= maxX)

	return { line, coords }
}

/**
 * Проверяет линию на вин, если вин то возвращает победные координаты
 *
 * @return boolean|array
 */
export const checkIdenticalValues = (lineAndCoords: Array<string|null>, currPlayer: string): boolean => {
	const reg = new RegExp(`${currPlayer}{5}`, 'i')
	const lineString = lineAndCoords.line.map((item) => item || 0).join('')
	const indexSearch = lineString.search(reg) >= 0
	if (indexSearch) {
		const startSlice: number = indexSearch - 1
		const endSlice: number = indexSearch + 5
		return lineAndCoords.coords.slice(startSlice, endSlice)
	}
	return false
}

export const checkWin = (map: Array<Array<string|null>>, coords: any, currPlayer: string): Array<any>|boolean => {
	const verticalLine = getVerticalLine(map, coords)
	const horizontalLine = getHorizontalLine(map, coords)
	const diagonalLeftLine = getDiagonalLeftLine(map, coords)
	const diagonalRightLine = getDiagonalRightLine(map, coords)

	const checkVerticalLine = checkIdenticalValues(verticalLine, currPlayer)
	const checkHorizontalLine = checkIdenticalValues(horizontalLine, currPlayer)
	const checkDiagonalLeftLine = checkIdenticalValues(diagonalLeftLine, currPlayer)
	const checkDiagonalRightLine = checkIdenticalValues(diagonalRightLine, currPlayer)

	if (checkVerticalLine) {
		return checkVerticalLine
	}

	if (checkHorizontalLine) {
		return checkHorizontalLine
	}

	if (checkDiagonalLeftLine) {
		return checkDiagonalLeftLine
	}

	if (checkDiagonalRightLine) {
		return checkDiagonalRightLine
	}

	return false
}
