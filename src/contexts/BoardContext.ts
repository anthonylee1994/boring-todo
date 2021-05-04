import { BoardTypes } from "@/types/BoardTypes";
import { createContext } from "react";

const BoardContext = createContext<BoardTypes>(null as any);

export default BoardContext;
