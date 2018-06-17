import { ICoords } from '@/types/index'

interface ILine {
	line: Array<string|number>;
	coords: Array<ICoords>;
}

/**
 * Вертикальная линия хода
 *
 * @return ILine
 */
export const getVerticalLine = (map: string[][], stepCoords: ICoords): ILine => {
	const { x, y } = stepCoords
	const line = []
	const coords = []
	const countCell: number = 4
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
 * @return ILine
 */
export const getHorizontalLine = (map: string[][], stepCoords: ICoords): ILine => {
	const { x, y } = stepCoords
	const line = []
	const coords = []
	const countCell: number = 4
	const max: number = y + countCell
	const min: number = y - countCell

	for (let i = min; i <= max; i++) {
		if (map[x]) {
			line.push(map[x][i])
			coords.push({ x, y: i })
		}
	}

	return { line, coords }
}

/**
 * Диагональная слева на право линия хода
 *
 * @return ILine
 */
export const getDiagonalLeftLine = (map: string[][], stepCoords: ICoords): ILine => {
	let { x, y } = stepCoords
	const line = []
	const coords = []
	const countCell: number = 4
	const maxX: number = x + countCell
	let minX: number = x - countCell
	let minY: number = y - countCell

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
 * @return ILine
 */
export const getDiagonalRightLine = (map: string[][], stepCoords: ICoords): ILine => {
	let { x, y } = stepCoords
	const line = []
	const coords = []
	const countCell: number = 4
	const maxX: number = x + countCell
	let minX: number = x - countCell
	let maxY: number = y + countCell

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
 * @return boolean|ICoords[]
 */
export const checkIdenticalValues = (lineAndCoords: ILine, currPlayer: string): boolean|ICoords[] => {
	const reg = new RegExp(`${currPlayer}{5}`, 'i')
	const lineString: string = lineAndCoords.line.map((item) => item || 0).join('')
	const indexSearch: number = lineString.search(reg)
	const isSearch: boolean = indexSearch >= 0
	if (isSearch) {
		const startSlice: number = indexSearch
		const endSlice: number = indexSearch + 5
		return lineAndCoords.coords.slice(startSlice, endSlice)
	}
	return false
}

/**
 * Проверка хода на победу
 *
 * @return boolean|ICoords[]
 */
export const checkWin = (map: string[][], coords: ICoords, currPlayer: string): boolean|ICoords[] => {
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

export const generateMap = (x: number, y: number): string[][] => {
	return Array(x).fill(null).map(() => Array(y).fill(null))
}
