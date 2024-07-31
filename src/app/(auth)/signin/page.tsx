"use client"
import { useFormStatus, useFormState } from "react-dom";
import Link from "next/link";
import { regsiterAction } from "./action";

const initialState = {
  message: ""
}

export default function SigninPage() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(regsiterAction, initialState);
  console.log(state);
  return (
    <div className="w-10/12 px-8 py-10 bg-white rounded-lg border-2 border-gray-400 sm:w-[456px]">
      <h1 className="font-semibold text-center text-gray-700 text-4xl">
        Welcome to <span className="text-violet-800">Workflo</span>!
      </h1>
      <form action={formAction} className="mt-8 flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">

        <input
          type="text"
          className="w-full p-2 bg-gray-200 rounded-md text-gray-600 text-base outline-none"
          placeholder="Full name"
          name="name"
          required
        />
        <p className="text-red-400">{state.zodErrors?.name?.[0]}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <input
            type="email"
            className="w-full p-2 bg-gray-200 rounded-md text-gray-600 text-base outline-none"
            placeholder="Your email"
            name="email"
            required
          />
          <p className="text-red-400">{state.zodErrors?.email?.[0]}</p>
        </div>
        <div className="flex flex-col space-y-2">
        
          <input
            type="password"
            className="w-full p-2 bg-gray-200 rounded-md text-gray-600 text-base outline-none"
            placeholder="Password"
            name="password"
            required
          />
          <p className="text-red-400">{state.zodErrors?.password?.[0]}</p>
          </div>
        <button className="w-full p-2 bg-violet-500 rounded-md text-base text-white outline-none">
          Signin
        </button>
      </form>
      <p className="mt-4 text-center text-gray-400">
        Already have an account? {' '}
        <Link 
            href="/login"
            className="text-blue-600"    
        >
            Log in
        </Link> 
      </p>
    </div>
  );
}
