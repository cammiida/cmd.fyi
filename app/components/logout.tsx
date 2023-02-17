import { Form } from "@remix-run/react";

export default function Login() {
  return (
    <Form action="/auth/logout" method="post">
      <button>Logout</button>
    </Form>
  );
}
