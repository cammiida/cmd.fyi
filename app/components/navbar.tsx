import { Link, useRouteLoaderData } from "@remix-run/react";
import Login from "~/components/login";
import { loader } from "~/root";
import type { User } from "~/services/auth.server";
import Logout from "./logout";

const Navbar = () => {
  const { user } = useRouteLoaderData("root") as { user?: User };

  const contentItems = (
    <>
      <li className="text-center align-middle flex justify-center">
        <Link to="/">Home</Link>
      </li>
      <li className="text-center align-middle flex justify-center">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="text-center align-middle flex justify-center">
        <Link to="/til">Today I Learned</Link>
      </li>
    </>
  );
  const authenticatedItems = (
    <>
      <li>
        <Logout />
      </li>
      {user?.photo && (
        <li>
          <img alt="profile" className="rounded-full h-12" src={user.photo} />
        </li>
      )}
      {!user?.photo && user?.username && <li>{user?.username}</li>}
    </>
  );
  const unauthenticatedItems = (
    <>
      <li>
        <Login />
      </li>
    </>
  );

  return (
    <div className="h-16 bg-white w-full flex fixed top-0 right-0 p-3">
      <ul className="mr-auto flex gap-4 items-center">{contentItems}</ul>
      <ul className="ml-auto flex gap-4 items-center">
        {user && authenticatedItems}
        {!user && unauthenticatedItems}
      </ul>
    </div>
  );
};

export default Navbar;
