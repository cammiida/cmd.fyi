import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export const loader = () => redirect("/login");

export const action: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("google", request);
};
