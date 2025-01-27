import { useGameContext } from "@/shared/store";
import { ICell } from "@/shared/interfaces";

const useCellUseCase = () => {
	const { board, setBoard, currentPlayer, setCurrentPlayer, winner } =
		useGameContext();

	/**
	 * Обработка клика по ячейке
	 */
	const handleCellClick = (cell: ICell): void => {
		// Проверяем, если игра уже завершена
		if (winner) {
			console.log("Игра окончена! Победитель: " + winner);
			return;
		}

		// Проверяем на ничью (если доска заполнена и нет победителя)
		if (board.every(cell => cell.player !== null) && !winner) {
			console.log("Игра окончена! Ничья");
			return;
		}

		//Проверка клекти на занятость
		if (cell.player !== null) {
			console.log("Клетка уже занята!");
			return;
		}

		// Обновляем состояние доски
		const newBoard = board.map((c) =>
			c.id === cell.id ? { ...c, player: currentPlayer } : c
		);
		setBoard(newBoard);

		// Переключаем текущего игрока
		setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
	};

	return {
		handleCellClick,
	};
};

export { useCellUseCase };
