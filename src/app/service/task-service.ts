const url = process.env.API_URI_TASK || "";
export async function getTask() {
    try {
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const parseResponse = await response.json();
        return parseResponse;
    } catch (e) {
        console.error("Task Service Error",e);
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
      body: JSON.stringify(task)
    });
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
      body: JSON.stringify({id, ...task})
    });
    return response.json();
  } catch (e) {
    console.error(e);
  }
}