"use client";
import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import AddTask from "./components/AddTask";
import { getTask } from "../service/task-service";
import { DataContext } from "./Context/Context";

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
      const { username, userTasks } = await getTask();
      if (username || userTasks) {
        console.log("Username: ",username);
        setUsername(username.name);
        setUserTasks(userTasks);
      }
    };
    getUserTask();
  }, [addTaskbarToggle]);

  return (
    <DataContext.Provider
      value={{
        addTaskbarToggle,
        username,
        userTasks,
        editTask,
        setAddTaskbarToggle,
        setUsername,
        setUserTasks,
        setEditTask,
      }}
    >
      <div className="flex flex-row justify-start">
        <Sidebar />
        <div className="relative h-screen py-4 px-12 bg-violet-200 flex-1">
          {children}
          <AddTask />
        </div>
      </div>
    </DataContext.Provider>
  );
}
