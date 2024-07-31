interface registerUserProps {
    name: string,
    email: string,
    password: string
}

interface loginUserProps {
    email: string,
    password: string
}

export async function registerUserService(userdata: registerUserProps){
    const url = process.env.API_URI_REGISTER || "";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userdata),
            cache: "no-cache"
        });
        return response;
    } catch (error) {
        console.error("Login User Error:", error);
    }

}

export async function loginUserService(userdata: loginUserProps){
    const url = process.env.API_URI_LOGIN || "";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userdata),
            cache: "no-cache"
        });
        return response;
    } catch (error) {
        console.error("Login User Error:", error);
    }

}