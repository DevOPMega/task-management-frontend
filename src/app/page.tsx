import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center 
      bg-gradient-to-t from-indigo-600 to-indigo-300 md:flex-row">
      <div className="flex flex-col space-y-4 justify-center">
        <h1 className="font-bold text-2xl text-gray-100 md:text-4xl">
          Start Managing Your Multi Task At One Place
        </h1>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/login"
            className="py-2 w-40 text-center text-xl font-semibold rounded-md 
            bg-blue-600 text-white"
          >
            Login
          </Link>
          <Link 
            href="/signin"
            className="py-2 w-40 text-center text-xl font-semibold rounded-md 
            bg-blue-600 text-white"
          >
            Signin
          </Link>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
