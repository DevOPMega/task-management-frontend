const url = process.env.NEXT_PUBLIC_API_URI_TASK || "";

export async function getTask() {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.status !== 200) {
      console.log("Error in fetch task ", response.json());
      return;
    }
    return response.json();
  } catch (e) {
    console.error("Task Service Error", e);
  }
}

export async function addTask(task: any) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(task),
    });
    if (response.status !== 201) {
      console.log("Error in Add task ", response.json());
      return;
    }
    return response.json();
  } catch (e) {
    console.error(e);
  }
}

export async function updateTask(id: string, task: any) {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id, ...task }),
    });
    if (response.status !== 201) {
      console.log("Error in update task ", response.json());
      return;
    }
    return response.json();
  } catch (e) {
    console.error(e);
  }
}
