import { DialogHook } from "@/hooks/useDialog";
import { createContext } from "react";

const DialogContext = createContext<DialogHook>(null as any);

export default DialogContext;
