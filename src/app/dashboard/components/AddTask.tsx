"use client";

import { useContext, useEffect, useState } from "react";
import { Context } from "../layout";
import {
  CalendarSVG,
  CloseSVG,
  DescriptionSVG,
  ExpandSVG,
  FavouriteSVG,
  PrioritySVG,
  ShareSVG,
  StatusSVG,
} from "./SVG";
import { addTask, updateTask } from "@/app/service/task-service";

function AddTask() {
  const { addTaskbarToggle, editTask, setAddTaskbarToggle, setEditTask } =
    useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Low");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setStatus(editTask.status);
      setPriority(editTask.priority);
    }
  }, [editTask]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddTaskbarToggle(false);
    // collect data
    const formData = new FormData(e.currentTarget);
    const task = {
      title: formData.get("title"),
      description: formData.get("description"),
      status: formData.get("status"),
      priority: formData.get("priority"),
      deadline: formData.get("deadline"),
    };
    if (editTask) {
      setEditTask(() => null);
      setTitle("");
      setDescription("");
      setPriority("Low");
      setStatus("To Do");

      const response = await updateTask(editTask.id, task);
    } else {
      const response = await addTask(task);
      console.log(response);
    }
  };

  return (
    <div
      className={`absolute ${
        addTaskbarToggle ? "block" : "hidden"
      } min-h-screen top-0 right-0 px-8 py-6 bg-white z-50 sm:w-2/3 md:w-1/2`}
    >
      <div className="flex justify-between">
        <div className="flex space-x-8">
          <div
            className="cursor-pointer"
            onClick={() => setAddTaskbarToggle(false)}
          >
            <CloseSVG />
          </div>
          <ExpandSVG />
        </div>
        <div className="flex space-x-8">
          <div className="flex items-center gap-2">
            <span className=" text-gray-500">Share</span>
            <ShareSVG />
          </div>
          <div className="flex items-center gap-2">
            <span className=" text-gray-500">Favourite</span>
            <FavouriteSVG />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-10 flex flex-col space-y-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          type="text"
          className="text-3xl font-semibold outline-none "
          placeholder="Title"
          name="title"
        />
        <div className="flex items-center space-x-20">
          <div className="flex items-center space-x-2">
            <StatusSVG />
            <span className="w-20 text-gray-600">Status</span>
          </div>
          <div>
            <select
              id="underline_select"
              className="w-44 block py-2.5 px-0 text-gray-500 bg-transparent  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 peer"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="To Do">To do</option>
              <option value="In Progress">In progress</option>
              <option value="Under Review">Under review</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-20">
          <div className="flex items-center space-x-2">
            <PrioritySVG />
            <span className="w-20 text-gray-600">Priority</span>
          </div>
          <div>
            <select
              id="underline_select"
              className="w-44 block py-2.5 px-0 text-gray-500 bg-transparent  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 peer"
              name="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-20">
          <div className="flex items-center space-x-2">
            <CalendarSVG />
            <span className="w-20 text-gray-600">Deadline</span>
          </div>
          <div>
            <input
              type="date"
              className="w-44 block py-2.5 px-0 text-gray-500 bg-transparent  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 peer"
              name="deadline"
            />
          </div>
        </div>
        <div className="flex items-start space-x-20">
          <div className="flex items-center space-x-2">
            <DescriptionSVG />
            <span className="w-20 text-gray-600">Description</span>
          </div>
          <div className="w-full">
            <textarea
              id="message"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-blue-500"
              placeholder="Write yout task"
              name="description"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          // onClick={() => setAddTaskbarToggle(false)}
          className="flex justify-center space-x-1  py-2 mt-6 rounded-md bg-gradient-to-t from-violet-600 to bg-violet-500 text-white cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
