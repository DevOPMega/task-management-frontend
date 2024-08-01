const url = process.env.NEXT_PUBLIC_API_URI_TASK || "";

export async function getTask() {
  console.log("url",url);
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const parseResponse = await response.json();
    console.log(response);
    return parseResponse;
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
    return response.json();
  } catch (e) {
    console.error(e);
  }
}
