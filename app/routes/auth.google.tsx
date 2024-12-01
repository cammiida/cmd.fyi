import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export let loader = () => redirect("/login");

export let action: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("google", request);
};
