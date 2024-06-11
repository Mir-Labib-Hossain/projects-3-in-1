import ReduxProvider from "@/redux/provider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Task1Layout = ({ children }: Props) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default Task1Layout;
