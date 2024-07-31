"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginUserService } from "@/app/service/auth-service";
import parseHeaderToCookie from "@/utils/parseHeaderToCookie";
import { z } from "zod";

const schemaLogin = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be 8 or more character",
    })
    .max(100, {
      message: "Password must be 100 or less character",
    }),
});



export async function loginAction(prevState: any, formData: FormData) {
  console.log("Hello From Login User Action");

  const validateFields = schemaLogin.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      ...prevState,
      zodErrors: validateFields.error.flatten().fieldErrors,
    };
  }

  const response = await loginUserService(validateFields.data);

  // set cookies
  if (response?.status === 200) {
    const cookie = response.headers.get("set-cookie")?.toString();
    if (cookie) {
      const cookieObject = parseHeaderToCookie(cookie);
      cookies().set(cookieObject);
    }
  }

  redirect("/dashboard")
}
