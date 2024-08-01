
const parseHeaderToCookie = (cookie: string) => {
    const pairs = cookie.split(";");
    const cookies: any = {};
    for(let i = 0; i < pairs.length; i++) {
        let nameValue = pairs[i].split("=");
        cookies[nameValue[0].trim()] = nameValue[1];
    }   
    console.log(cookies);
    const cookieObject: any = {};
    cookieObject.name = "access_token";
    cookieObject.value = cookies["access_token"];
    cookieObject.httpOnly = true;
    cookieObject.maxAge = Number(cookies["Max-Age"]);
    cookieObject.expires = cookies["Expires"];
    cookieObject.sameSite = cookies["SameSite"];
    cookieObject.secure = true;

    return cookieObject;
}

export default parseHeaderToCookie;