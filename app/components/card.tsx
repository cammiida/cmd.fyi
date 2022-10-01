import type { PropsWithChildren } from "react";
import React from "react";

type CardProps = {};

const Card: React.FC<PropsWithChildren<CardProps>> = ({ children }) => {
  return <div className="bg-white shadow-md py-5 px-10">{children}</div>;
};

export default Card;
