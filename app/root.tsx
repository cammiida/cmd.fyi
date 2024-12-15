import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LoaderFunction } from "react-router-dom";
import { authenticator } from "./services/auth.server";
import styles from "./styles/app.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => [
  { charSet: "utf-8" },
  { title: "cmd.fyi" },
  { viewport: "width=device-width,initial-scale=1" },
];

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);

  return { user };
};

export default function App() {
  return (
    <html lang="en" className="bg-raspberry-sorbet">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
