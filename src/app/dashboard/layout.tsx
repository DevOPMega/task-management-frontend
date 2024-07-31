"use client";
import { useState, useEffect, createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import Sidebar from "./components/Sidebar";
import AddTask from "./components/AddTask";
import { getTask } from "../service/task-service";

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

export const Context = createContext<ContextType>(contextObj);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [addTaskbarToggle, setAddTaskbarToggle] = useState(false);
  const [username, setUsername] = useState("");
  const [userTasks, setUserTasks] = useState(null);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const getUserTask = async () => {
      // get the user task
      const {username, userTasks } = await getTask();
      console.log(username, userTasks)
      setUsername(username.name);
      setUserTasks(userTasks)
    }
    getUserTask();
  }, [addTaskbarToggle]);

  return (
    <Context.Provider
      value={{
        addTaskbarToggle,
        username,
        userTasks,
        editTask,
        setAddTaskbarToggle,
        setUsername,
        setUserTasks,
        setEditTask
      }}
    >
      <div className="flex flex-row justify-start">
        <Sidebar />
        <div className="relative h-screen py-4 px-12 bg-violet-200 flex-1">
          {children}
          <AddTask />
        </div>
      </div>
    </Context.Provider>
  );
}
