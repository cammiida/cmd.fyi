import type { PropsWithChildren } from "react";

function Card({ children }: PropsWithChildren<unknown>) {
  return <div className="bg-white shadow-md py-5 px-10">{children}</div>;
}

export default Card;
