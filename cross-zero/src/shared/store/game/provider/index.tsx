import {FC, type PropsWithChildren, useState} from 'react'

import {DEFAULT_VALUES, GameContext} from '../context'
import type {IBoard, IPlayer, IWinner} from "@/shared/interfaces";

const GameProvider: FC<PropsWithChildren> = ({children}) => {
	const {
		board: defaultBoard,
		currentPlayer: defaultCurrentPlayer,
		winner: defaultWinner
	} = DEFAULT_VALUES

	const [board, setBoard] = useState<IBoard>(defaultBoard);
	const [currentPlayer, setCurrentPlayer] = useState<IPlayer>(defaultCurrentPlayer);
	const [winner, setWinner] = useState<IWinner>(defaultWinner);

	const resetGame = () => {
		setBoard(defaultBoard);
		setCurrentPlayer('X');
		setWinner(null);
	};

	const context = {
		board, setBoard,
		currentPlayer, setCurrentPlayer,
		winner, setWinner,
		resetGame
	};

	return (
		<GameContext.Provider value={context}>
			{children}
		</GameContext.Provider>
	)
}

export {GameProvider}
