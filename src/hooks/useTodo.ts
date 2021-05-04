import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BoardTypes } from "@/types/BoardTypes";
import { useIntl } from "react-intl";

export interface TodoHook {
  boards: BoardTypes[];
  addBoard: () => void;
  deleteBoard: (uuid: string) => void;
  moveUp: (uuid: string) => void;
  moveDown: (uuid: string) => void;
  updateBoard: (item: BoardTypes) => void;
}

const useTodo = (): TodoHook => {
  const { formatMessage } = useIntl();

  const [boards, setBoards] = useState<BoardTypes[]>(
    (JSON.parse(localStorage.getItem("boards") as any) as any) || [],
  );

  const addBoard = (): void => {
    setBoards([
      ...boards,
      {
        uuid: uuidv4(),
        title: formatMessage({ id: "new.board" }),
        tasks: [],
      },
    ]);
  };

  const updateBoard = (item: BoardTypes) => {
    const index = boards.findIndex((board) => board.uuid === item.uuid);
    setBoards([...boards.slice(0, index), item, ...boards.slice(index + 1)]);
  };

  const moveUp = (uuid: string) => {
    const index = boards.findIndex((board) => board.uuid === uuid);

    if (index === 0) {
      return;
    }

    setBoards([
      ...boards.slice(0, index - 1),
      boards[index],
      boards[index - 1],
      ...boards.slice(index + 1),
    ]);
  };

  const moveDown = (uuid: string) => {
    const index = boards.findIndex((board) => board.uuid === uuid);

    if (index === boards.length - 1) {
      return;
    }

    setBoards([
      ...boards.slice(0, index),
      boards[index + 1],
      boards[index],
      ...boards.slice(index + 2),
    ]);
  };

  const deleteBoard = (uuid: string): void => {
    setBoards(boards.filter((board) => board.uuid !== uuid));
  };

  useEffect((): void => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  return {
    moveUp,
    moveDown,
    boards,
    addBoard,
    deleteBoard,
    updateBoard,
  };
};

export default useTodo;
