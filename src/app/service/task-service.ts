const url = process.env.API_URI_TASK || "";
// import { cookies } from "next/headers";

export async function getTask() {
  console.log("Fetching task from server side...");
  // const accessToken = cookies().get("access_token")?.value??"";
  // console.log("Access Token ", accessToken);
  try {
    const response = await fetch(url, {
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        // Cookie: `access_token=${accessToken}`
      },
      credentials: "include",
    });
    return response;
    // return response.json();
  } catch (e) {
    console.error("Task Service Error", e);
  }
}

