import { ReactNode } from "react";
import BoardWidget from "@/widget/board";
import styles from './styles.module.scss';
import { useGameContext } from "@/shared/store";
import TaskDescription from "@/widget/task";

const MainPage = (): ReactNode => {
	const { winner, board, resetGame } = useGameContext();

	const isDraw = board.every(cell => cell.player !== null) && !winner;

	return (
		<main className={styles.page}>

			{!!winner && <h1 className="text-4xl">Игрок {winner} победил!</h1>}

			{isDraw && <h1 className="text-4xl">Игра окончена! Ничья</h1>}

			<button onClick={resetGame} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
				Новая игра
			</button>

			<BoardWidget/>

			{/* Описание задания */}
			<TaskDescription/>
		</main>
	);
};

export default MainPage;
