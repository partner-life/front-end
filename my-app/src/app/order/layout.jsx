
import ServerProtectedComponent from "@/components/ServerProtectedComponent";

export default function OrderLayout({ children }) {
  return <ServerProtectedComponent>{children}</ServerProtectedComponent>;
}
