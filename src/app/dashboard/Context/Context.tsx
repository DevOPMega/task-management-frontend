import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

interface UserTaskObjType {
    createdAt: string,
    description: string,
    priority: string,
    status: string,
    title: string,
    uid: string,
    updatedAt: string,
    deadline: string,
    _v: number,
    _id: string
  }
  
  interface EditTaskObjType {
    id: string,
    description: string,
    priority: string,
    status: string,
    title: string,
    deadline: string,
  }
  
  interface ContextType {
    addTaskbarToggle: boolean;
    username: string,
    userTasks: UserTaskObjType[] | null,
    editTask: EditTaskObjType | null,
    setAddTaskbarToggle: Dispatch<SetStateAction<boolean>>;
    setUsername: Dispatch<SetStateAction<string>>;
    setUserTasks: Dispatch<SetStateAction<null>>;
    setEditTask: Dispatch<SetStateAction<null>>;
  }
  
  const contextObj = {
    addTaskbarToggle: false,
    username: "",
    userTasks: null,
    editTask: null,
    setAddTaskbarToggle: () => {},
    setUsername: () => {},
    setUserTasks: () => {},
    setEditTask: () => {}
  };
  
  export const DataContext = createContext<ContextType>(contextObj);
