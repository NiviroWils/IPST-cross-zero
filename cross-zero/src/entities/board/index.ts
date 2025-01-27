import { useGameContext } from "@/shared/store";
import { useEffect } from "react";
import { IWinner } from "@/shared/interfaces";

const useBoardUseCase = () => {
	const { board, setWinner } = useGameContext();

	/**
	 * Проверка победителя
	 */
	const checkWinner = (): IWinner => {
		// Я решила вынести индексы ячеек с победными комбинациями в массив, самый простой (хотя, думаю, не единственный) способ решения
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (const combination of winningCombinations) {
			const [a, b, c] = combination;
			if (
				board[a].player &&
				board[a].player === board[b].player &&
				board[a].player === board[c].player
			) {
				return board[a].player;
			}
		}

		return null;
	};

	/**
	 * Проверка на ничью
	 */
	const checkDraw = (): boolean => {
		return board.every(cell => cell.player !== null);
	};

	useEffect(() => {
		const winner = checkWinner();
		if (winner) {
			setWinner(winner);
		} else if (checkDraw()) {
			console.log("Игра окончена! Ничья");
		} else {
			setWinner(null);
		}
	}, [board, setWinner]);

};

export { useBoardUseCase };
