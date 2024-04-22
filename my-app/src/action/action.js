"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
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
    throw new Error(result.message);
  }

  if (response.ok) {
    return redirect("/login");
  }
}

export async function login(loginInput) {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInput),
  });

  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }

  const result = await response.json();

  if (result) {
    cookies().set("Authorization", `Bearer ${result.access_token}`);
    return redirect("/packages");
  }
}

export async function logout() {
  cookies().get("Authorization") && cookies().delete("Authorization");
  return redirect("/login");
}

export async function getAllPackages() {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/package");

  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }

  return response.json();
}

export async function deletePackage(_id) {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/deletepackage/" + _id, {
    method: "DELETE",
    headers: {
      Authorization: cookies().get("Authorization").value,
    },
  });
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  } else {
    revalidatePath("/cms/packages");
  }
}

export async function getAllOrders() {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/allOrders");

  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }

  return response.json();
}

export async function addPackage(product) {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/createpackage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: cookies().get("Authorization").value,
    },
    body: JSON.stringify(product),
  });
  const result = await res.json();
  if (res.ok) {
    revalidatePath("/cms/packages");
  }
  console.log("🚀 ~ addPackage ~ result:", result);
}

export async function editPackage(data) {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/editpackage/" + data._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: cookies().get("Authorization").value,
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    revalidatePath("/cms/packages");
  } else {
    const result = await response.json();
    throw new Error(result.message);
  }
}
