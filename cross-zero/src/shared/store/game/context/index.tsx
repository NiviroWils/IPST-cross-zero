import { createContext, useContext } from 'react'
import {IGameContext} from "@/shared/store";

const DEFAULT_VALUES: IGameContext = {
  board: Array.from({length: 9}, (_, id) => ({
    id, player: null,
  })),
  setBoard: () => {},
  currentPlayer: 'X',
  setCurrentPlayer: () => {},
  winner: null,
  setWinner: () => {}
}

const GameContext = createContext<IGameContext>(DEFAULT_VALUES)

const useGameContext = (): IGameContext => useContext(GameContext)

export {
  DEFAULT_VALUES,
  GameContext,
  useGameContext
}
