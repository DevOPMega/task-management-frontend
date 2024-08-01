import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

// User's Task Object 
interface UserTaskObjType {
  _id: string;
  _v: number;
  uid: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  deadline: string;
  updatedAt: string;
  createdAt: string;
}

// Edit Task Object
interface EditTaskObjType {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  deadline: string;
}

// Context Type
interface ContextType {
  addTaskbarToggle: boolean;
  user: string;
  userTasks: UserTaskObjType[] | null;
  editTask: EditTaskObjType | null;
  setAddTaskbarToggle: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<string>>;
  setUserTasks: Dispatch<SetStateAction<null>>;
  setEditTask: Dispatch<SetStateAction<null>>;
}

// Context Initial Object
const contextObj = {
  addTaskbarToggle: false,
  user: "",
  userTasks: null,
  editTask: null,
  setAddTaskbarToggle: () => {},
  setUser: () => {},
  setUserTasks: () => {},
  setEditTask: () => {},
};

export const DataContext = createContext<ContextType>(contextObj);
