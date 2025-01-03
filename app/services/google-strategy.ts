import { GoogleStrategy } from "remix-auth-google";

export const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    callbackURL: `${
      process.env.APP_HOST_NAME ?? "http://localhost:3000"
    }/auth/google/callback`,
    scope: ["openid", "profile", "email"],
  },
  async ({ profile }) => {
    if (
      profile._json.email === "camillamdalan@gmail.com" &&
      profile._json.email_verified
    ) {
      return {
        email: profile._json.email,
        username: profile.displayName,
        photo: profile._json.picture,
      };
    }

    throw new Error("User not registered.");
  }
);
