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

export async function fetchPackages() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/package?page=1&limit=4"
  );

  const packages = await response.json();

  return packages;
}

export async function fetchPackageById(id) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/package/${id}`
  );

  const packages = await response.json();
  return packages;
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
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/deletepackage/" + _id,
    {
      method: "DELETE",
      headers: {
        Authorization: cookies().get("Authorization").value,
      },
    }
  );
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  } else {
    revalidatePath("/cms/packages");
  }
}

export async function orderPackage(id, orderInput) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/addOrders/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("Authorization").value,
      },
      body: JSON.stringify(orderInput),
    }
  );
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  } else {
    redirect(`/order`);
  }
}

export async function fetchOrderHistory() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/historyOrder`,
    {
      chace: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("Authorization").value,
      },
    }
  );

  const order = await response.json();
  return order;
}

export async function updateOrder(orderId, orderInput) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/updateOrders/${orderId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("Authorization").value,
      },
      body: JSON.stringify(orderInput),
    }
  );
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }
}
