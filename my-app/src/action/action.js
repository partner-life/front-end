"use server";

import { redirect } from "next/navigation";

export async function register(newUser) {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.error);
  }

  if (response.ok) {
    return redirect("/login");
  }
}
