import ServerProtectedComponentAdmin from "@/components/ServerProtectedComponentAdmin";

export default function CMSLayout({ children }) {
  return (
    <>
      <ServerProtectedComponentAdmin>{children}</ServerProtectedComponentAdmin>;
    </>
  );
}
