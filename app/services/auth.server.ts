import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { googleStrategy } from "./google-strategy";

export type User = {
  username: string;
  email: string;
  photo?: string;
};

export const authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(googleStrategy, "google");
