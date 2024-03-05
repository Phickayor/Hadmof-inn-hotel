import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="relative min-h-screen px-5 md:px-20">
      <div className="flex [&>*]:self-center md:py-10 py-6 justify-between gap-10">
        <h1 className="font-semibold md:text-2xl text-xl">Hotel Site</h1>
      </div>
      <form className="bg-white mx-auto w-full md:w-8/12 p-4 md:p-10 py-6 md:py-10 rounded-lg my-10 md:my-5">
        <h3 className="font-semibold inline-block md:text-2xl text-xl border-b-2 border-blue-500 py-1">
          Login
        </h3>
        <div className="flex flex-col gap-5 md:pt-10 pt-5">
          <div className="flex flex-col">
            <label>
              Email<span className="text-red-500">&nbsp;*</span>
            </label>
            <input
              type="email"
              required
              className="w-full border-b-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label>
              Password<span className="text-red-500">&nbsp;*</span>
            </label>
            <input
              type="password"
              required
              className="w-full border-b-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="self-center bg-blue-500 cursor-pointer text-white rounded-sm py-2 px-8">
            Login
          </button>
        </div>
        <p className="pt-6">
          Don&apos;t have an account?
          <Link href="/auth/register" className="font-semibold text-blue-500">
            &nbsp;Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
