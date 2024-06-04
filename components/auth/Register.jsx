"use client";

import { loginWithFacebook, loginWithGoogle } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Register() {
  const [disable, setDisable] = useState(true);
  const [Pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [matchPass, setMatchPass] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  async function handleRegister(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const number = formData.get("number");

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          number,
        }),
      });
      if (res.status === 201) {
        router.push("/");
      } else {
        setError("Registration Failed. Refresh and try again");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  useEffect(() => {
    setMatchPass(confirmPass === Pass);
  }, [confirmPass, Pass]);
  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">
          Create an account
        </h2>
        {error && (
          <h5 className="text-2xl uppercase text-red-400 font-medium mb-1">
            {error}
          </h5>
        )}
        <p className="text-gray-600 mb-6 text-sm">Register For new cosutumer</p>
        <form method="post" autoComplete="off" onSubmit={handleRegister}>
          <div className="space-y-2">
            <div>
              <label htmlFor="name" className="text-gray-600 mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="fulan fulana"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="youremail.@domain.com"
              />
            </div>
            <div>
              <label htmlFor="name" className="text-gray-600 mb-2 block">
                Mobile Number
              </label>
              <input
                type="text"
                name="number"
                id="number"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="01*********"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="*******"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="confirm"
                className={`${
                  matchPass ? `text-gray-600` : `text-red-600`
                } mb-2 block`}
              >
                {`Confirm password ${
                  matchPass ? "" : ` (Password did not match)`
                }`}
              </label>
              <input
                type="password"
                name="confirm"
                id="confirm"
                className={`block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400`}
                placeholder="*******"
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="aggrement"
                id="aggrement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                onChange={() => setDisable(!disable)}
              />
              <label
                htmlFor="aggrement"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                I have read and agree to the{" "}
                <a href="#" className="text-primary">
                  terms & conditions
                </a>
              </label>
            </div>
          </div>
          <div className="mt-4">
            <button
              disabled={disable}
              type="submit"
              className={`block w-full py-2 text-center text-white ${
                disable ? `bg-slate-500` : `bg-primary`
              } border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium`}
            >
              create account
            </button>
          </div>
        </form>

        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or signup with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div className="mt-4 flex gap-4">
          <button
            onClick={() => loginWithFacebook()}
            className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >
            facebook
          </button>
          <button
            onClick={() => loginWithGoogle()}
            className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
          >
            google
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Already have account?{" "}
          <a href="login.html" className="text-primary">
            Login now
          </a>
        </p>
      </div>
    </div>
  );
}
