"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Dummy validation
  if (email === "admin@test.com" && password === "1234") {
    cookies().set("auth", "true", {
      httpOnly: true,
    });

    redirect("/dashboard");
  }

  throw new Error("Invalid credentials");
}
