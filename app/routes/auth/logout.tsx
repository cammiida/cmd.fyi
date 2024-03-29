import type { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export let action: LoaderFunction = ({ request }) => {
  return authenticator.logout(request, { redirectTo: "/" });
};
