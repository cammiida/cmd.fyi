import { Link, useLoaderData } from "@remix-run/react";
import Login from "~/components/login";
import type { User } from "~/services/auth.server";
import Logout from "./logout";

const Navbar = () => {
  const { user }: { user?: User } = useLoaderData();

  const contentItems = (
    <>
      <li className="text-center align-middle flex justify-center">
        <Link to="/">Home</Link>
      </li>
    </>
  );
  const authenticatedItems = (
    <>
      <li>
        <Logout />
      </li>
      <li>
        {user?.photo ? (
          <img alt="profile" className="rounded-full h-12" src={user.photo} />
        ) : (
          user?.username
        )}
      </li>
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
      <ul className="mr-auto flex gap-3 items-center">{contentItems}</ul>
      <ul className="ml-auto flex gap-3 items-center">
        {user && authenticatedItems}
        {!user && unauthenticatedItems}
      </ul>
    </div>
  );
};

export default Navbar;
