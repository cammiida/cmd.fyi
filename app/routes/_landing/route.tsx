import { Outlet } from "@remix-run/react";
import Header from "~/routes/_landing/header";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white">
      <Header />
      <Outlet />
    </div>
  );
}
