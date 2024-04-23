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
  const { _id, name, username, email, role } = result.user;

  if (result) {
    cookies().set("Authorization", `Bearer ${result.access_token}`);
    cookies().set("UserId", _id);
    cookies().set("Name", name);
    cookies().set("Username", username);
    cookies().set("Email", email);
    cookies().set("Role", role);

    if (role == "admin") {
      return redirect("/cms");
    } else {
      return redirect("/");
    }
  }
}

export async function logout() {
  cookies().get("Authorization") && cookies().delete("Authorization");
  cookies().get("UserId") && cookies().delete("UserId");
  cookies().get("Name") && cookies().delete("Name");
  cookies().get("Username") && cookies().delete("Username");
  cookies().get("Email") && cookies().delete("Email");
  cookies().get("Role") && cookies().delete("Role");
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
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/editpackage/" + data._id,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("Authorization").value,
      },
      body: JSON.stringify(data),
    }
  );
  if (res.ok) {
    revalidatePath("/cms/packages");
  } else {
    const result = await response.json();
    throw new Error(result.message);
  }
}

export async function payment(
  gross_amount,
  order_id,
  item_name,
  authorization
) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/create-transaction/${order_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
        body: JSON.stringify({ gross_amount, order_id, item_name }),
      }
    );

    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.message);
    }

    const responseData = await response.json();
    const { token } = responseData;

    // Sekarang Anda bisa menggunakan token seperti yang Anda lakukan sebelumnya

    const handleAfterPaymentResponse = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/handling-after-payment`,
      {
        method: "POST",
        headers: {
          Authorization: authorization,
        },
      }
    );

    if (!handleAfterPaymentResponse.ok) {
      const result = await handleAfterPaymentResponse.json();
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    throw new Error(error.message);
  }
}

export async function access_token() {
  return cookies().get("Authorization").value;
}
