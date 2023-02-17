import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import Card from "~/components/card";
import Layout from "~/components/layout";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await authenticator.isAuthenticated(request);

  return json({ user });
};

export default function Index() {
  return (
    <Layout>
      <div className="my-10">
        <Card>
          <h1 className="text-3xl font-bold underline">cmd.fyi</h1>
          <p>
            This is a personal homepage for testing out new ideas and tech.
            <br />
            Following is a list of ideas I would like to add to the site or
            technologies I want to test out:
          </p>
          <ul className="list-none">
            <li>
              <input type="checkbox" /> Set up a nice CI/CD pipeline with Docker
              and hosted in AWS.
            </li>
            <li>
              <input type="checkbox" /> Create a TIL page with login (admin
              page) and a db. Go simple with Firebase first?
            </li>
            <li>
              <input type="checkbox" /> Create a library of books I have read or
              want to read and my thoughts about them.
            </li>
          </ul>
        </Card>
      </div>
    </Layout>
  );
}
