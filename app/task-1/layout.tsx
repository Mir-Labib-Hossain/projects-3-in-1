import ReduxProvider from "@/redux/provider";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Task1Layout = ({ children }: Props) => {
  
  return (
    <ReduxProvider>
      <div className="h-screen w-screen flex justify-center items-center bg-white">
        <div className="flex flex-col gap-5 w-[1000px] shadow-md p-5">
          
          {children}
        </div>
      </div>
    </ReduxProvider>
  );
};

export default Task1Layout;
