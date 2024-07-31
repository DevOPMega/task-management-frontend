"use client";
import { useContext } from "react";
import { DataContext } from "../layout";

function TaskGrid() {
  const { userTasks, editTask, setAddTaskbarToggle, setEditTask } =
    useContext(DataContext);

  const handleTaskEditClick = (taskObj: any) => {
    setAddTaskbarToggle(true);
    console.log(taskObj);
    setEditTask(() => ({ ...taskObj }));
  };
  return (
    <div className=" grid grid-cols-4 gap-4 py-4 px-4 bg-white ">
      <div>
        <h3 className="text-gray-600">To do</h3>
        <div className="mt-4 flex flex-col space-y-2">
          {userTasks?.map(
            (task, i) =>
              task.status === "To Do" && (
                <div
                  key={i}
                  className="bg-violet-200 px-2 py-2 flex flex-col space-y-2 rounded-md cursor-pointer"
                  onClick={() => {
                    handleTaskEditClick({
                      id: task._id,
                      title: task.title,
                      status: task.status,
                      priority: task.priority,
                      description: task.description,
                      deadline: task.deadline,
                    });
                  }}
                >
                  <h4 className="text-gray-600 text-base">{task.title}</h4>
                  <p className="text-gray-500 text-sm">{task.description}</p>
                  <div
                    className={`text-white text-sm py-1 w-16 text-center lowercase rounded-md
                        ${task.priority === "Low" && "bg-green-500"}
                        ${task.priority === "Medium" && "bg-orange-500"}
                        ${task.priority === "Urgent" && "bg-red-500"}
                    `}
                  >
                    {task.priority}
                  </div>
                  <p className="text-gray-500 text-sm">{`${new Date(
                    task.deadline
                  ).toLocaleDateString()}`}</p>
                </div>
              )
          )}
        </div>
      </div>
      <div>
        <h3 className="text-gray-600">In progress</h3>
        <div className="mt-4 flex flex-col space-y-2">
          {userTasks?.map(
            (task, i) =>
              task.status === "In Progress" && (
                <div
                  key={i}
                  className="bg-violet-200 px-2 py-2 flex flex-col space-y-2 rounded-md cursor-pointer"
                  onClick={() => {
                    handleTaskEditClick({
                      id: task._id,
                      title: task.title,
                      status: task.status,
                      priority: task.priority,
                      description: task.description,
                      deadline: task.deadline,
                    });
                  }}
                >
                  <h4 className="text-gray-600 text-base">{task.title}</h4>
                  <p className="text-gray-500 text-sm">{task.description}</p>
                  <div
                    className={`text-white text-sm py-1 w-16 text-center lowercase rounded-md
                        ${task.priority === "Low" && "bg-green-500"}
                        ${task.priority === "Medium" && "bg-orange-500"}
                        ${task.priority === "Urgent" && "bg-red-500"}
                    `}
                  >
                    {task.priority}
                  </div>
                  <p className="text-gray-500 text-sm">{`${new Date(
                    task.deadline
                  ).toLocaleDateString()}`}</p>
                </div>
              )
          )}
        </div>
      </div>
      <div>
        <h3 className="text-gray-600">Under review</h3>
        <div className="mt-4 flex flex-col space-y-2">
          {userTasks?.map(
            (task, i) =>
              task.status === "Under Review" && (
                <div
                  key={i}
                  className="bg-violet-200 px-2 py-2 flex flex-col space-y-2 rounded-md cursor-pointer"
                  onClick={() => {
                    handleTaskEditClick({
                      id: task._id,
                      title: task.title,
                      status: task.status,
                      priority: task.priority,
                      description: task.description,
                      deadline: task.deadline,
                    });
                  }}
                >
                  <h4 className="text-gray-600 text-base">{task.title}</h4>
                  <p className="text-gray-500 text-sm">{task.description}</p>
                  <div
                    className={`text-white text-sm py-1 w-16 text-center lowercase rounded-md
                        ${task.priority === "Low" && "bg-green-500"}
                        ${task.priority === "Medium" && "bg-orange-500"}
                        ${task.priority === "Urgent" && "bg-red-500"}
                    `}
                  >
                    {task.priority}
                  </div>
                  <p className="text-gray-500 text-sm">{`${new Date(
                    task.deadline
                  ).toLocaleDateString()}`}</p>
                </div>
              )
          )}
        </div>
      </div>
      <div>
        <h3 className="text-gray-600">Finished</h3>
        <div className="mt-4 flex flex-col space-y-2">
          {userTasks?.map(
            (task, i) =>
              task.status === "Completed" && (
                <div
                  key={i}
                  className="bg-violet-200 px-2 py-2 flex flex-col space-y-2 rounded-md cursor-pointer"
                  onClick={() => {
                    handleTaskEditClick({
                      id: task._id,
                      title: task.title,
                      status: task.status,
                      priority: task.priority,
                      description: task.description,
                      deadline: task.deadline,
                    });
                  }}
                >
                  <h4 className="text-gray-600 text-base">{task.title}</h4>
                  <p className="text-gray-500 text-sm">{task.description}</p>
                  <div
                    className={`text-white text-sm py-1 w-16 text-center lowercase rounded-md
                        ${task.priority === "Low" && "bg-green-500"}
                        ${task.priority === "Medium" && "bg-orange-500"}
                        ${task.priority === "Urgent" && "bg-red-500"}
                    `}
                  >
                    {task.priority}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskGrid;
