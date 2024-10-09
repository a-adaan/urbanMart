"use server";
import { signIn } from "@/auth";

export async function credentialsLogin(formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    return response;
  } catch (err) {
    return null;
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
  await signOut({ callbackUrl: "http://localhost:3000/login" });
}
