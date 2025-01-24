interface ICell {
	id: number
	player: IWinner
}

type IPlayer = 'X' | 'O'
type IWinner = IPlayer | null
type IBoard = ICell[]

export type {
	ICell,
	IPlayer,
	IWinner,
	IBoard
}