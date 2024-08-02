const url = process.env.NEXT_PUBLIC_API_URI_TASK || "";
export async function getTask() {
  console.log("fetching...", url);
  try {
    const response: any = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.status !== 200) {
      return { status: false, error: response.json() };
    }
    return {
      status: true,
      data: response.json()
    };
  } catch (e) {
    console.error("Task Service Error", e);
    return {
      status: false,
      error: "Error in Fetching task",
    };
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
      return { status: false, error: response.json()};
    }
    return { status: true, data: response.json()};
  } catch (e) {
    console.error("Task Service Error", e);
    return {
      status: false,
      error: "Error in Adding task",
    };
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
      return { status: false, error: response.json()};
    }
    return { status: true, data: response.json()};
  } catch (e) {
    console.error("Task Service Error", e);
    return {
      status: false,
      error: "Error in Updating task",
    };
  }
}
