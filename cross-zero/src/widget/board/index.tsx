import styles from "./styles.module.scss";
import {FC, HTMLAttributes} from "react";
import {makeClassname} from "@/shared/utils";
import {CellComponent} from "@/shared/components";
import {useGameContext} from "@/shared/store";
import {useCellUseCase} from "@/entities/cell";
import {useBoardUseCase} from "@/entities/board";

type IBoardWidgetProps = HTMLAttributes<HTMLDivElement>;

const BoardWidget: FC<IBoardWidgetProps> = ({className, ...props}) => {
	const {board} = useGameContext()
	const { handleCellClick } = useCellUseCase()
	useBoardUseCase()

	return (
		<div className={makeClassname(styles.gameBoard, className)} {...props}>
			{board.map(cell => (
				<CellComponent onClick={handleCellClick} cell={cell} key={cell.id}/>
			))}
		</div>
	);
};

export default BoardWidget