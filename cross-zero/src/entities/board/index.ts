import { useGameContext } from "@/shared/store";
import { useEffect } from "react";
import { IWinner } from "@/shared/interfaces";

const useBoardUseCase = () => {
	const { board, setWinner } = useGameContext();

	/**
	 * Проверка победителя
	 */
	const checkWinner = (): IWinner => {
		const winningCombinations = [
			// Я решила вынести индексы ячеек с победными комбинациями в отдельный массив, самый простой (хотя, думаю, не единственный способ решения)
			[0, 1, 2], // Верхняя строка
			[3, 4, 5], // Средняя строка
			[6, 7, 8], // Нижняя строка
			[0, 3, 6], // Первый столбец
			[1, 4, 7], // Второй столбец
			[2, 5, 8], // Третий столбец
			[0, 4, 8], // Диагональ сверху вниз
			[2, 4, 6], // Диагональ снизу вверх
		];

		for (const combination of winningCombinations) {
			const [a, b, c] = combination;
			if (
				board[a].player &&
				board[a].player === board[b].player &&
				board[a].player === board[c].player
			) {
				return board[a].player; // Возвращаем победителя ('X' или 'O')
			}
		}

		return null; // Победителя нет
	};

	//Нужно проверять победителя при каждом изменении доски
	useEffect(() => {
		setWinner(checkWinner());
	}, [board]);
};

export { useBoardUseCase };
