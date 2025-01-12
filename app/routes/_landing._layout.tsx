import { Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12 animate-fadeIn">
      <Outlet />
    </main>
  );
}
