"use server";
import { signIn } from "@/auth";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// const secretKey = "secret";
// const key = new TextEncoder().encode(secretKey);

// export async function encrypt(payload) {
//   return await new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("10 sec from now")
//     .sign(key);
// }

// export async function decrypt(input) {
//   const { payload } = await jwtVerify(input, key, {
//     algorithms: ["HS256"],
//   });
//   return payload;
// }

export async function credentialsLogin(formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    // if (response.error) {
    //   console.log("error index", response.error);
    //   throw new Error(response.error);
    // } else {
    // const expires = new Date(Date.now() + 100000 * 100000);
    console.log(response.error);
    // const session = await encrypt({ ...response, expires });

    // cookies().set("session", session, { expires, httpOnly: true });
    return response;
    // }
  } catch (error) {
    // throw new Error(error);
    console.log("consloe index", error.message);
  }
}

export async function loginWithGoogle() {
  await signIn("google", {
    redirectTo: "http://localhost:3000/",
  });
}
export async function loginWithFacebook() {
  await signIn("facebook", {
    redirectTo: "http://localhost:3000/",
  });
}

export async function logout() {
  // cookies().set("session", "", { expires: new Date(0) });
  await signOut({ callbackUrl: "http://localhost:3000/login" });
}

// export async function getSession() {
//   const session = cookies().get("session")?.value;
//   if (!session) return null;
//   return await decrypt(session);
// }

// export async function updateSession(request) {
//   const session = request.cookies.get("session")?.value;
//   if (!session) return;

//   const parsed = await decrypt(session);
//   parsed.expires = new Date(Date.now() + 100000 * 100000);
//   const res = NextResponse.next();
//   res.cookies.set({
//     name: "session",
//     value: await encrypt(parsed),
//     httpOnly: true,
//     expires: parsed.expires,
//   });
//   return res;
// }
