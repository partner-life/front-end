import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function ServerProtectedComponentAdmin({ children }) {
  const tokenCookie = cookies().get("Authorization");
  const role = cookies().get("Role").value;

  if (!tokenCookie || role !== "admin") {
    return redirect("/login");
  }

  return children;
}
