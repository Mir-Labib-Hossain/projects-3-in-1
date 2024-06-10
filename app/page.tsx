import { SearchOutlined } from "@ant-design/icons";

import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white">
      <div className="flex flex-col justify-center items-center gap-5 w-96 bg-slate-400 p-5 rounded-md">
        <Link href="/task-1" className="w-full">
          <Button size="large" type="primary" icon={<SearchOutlined />} block>
            Task - 01 : Form Validation
          </Button>
        </Link>
        <Link href="/task-2" className="w-full">
          <Button size="large" type="primary" icon={<SearchOutlined />} block>
            Task - 01 : 15% Vat & Sum
          </Button>
        </Link>
        <Link href="/task-3" className="w-full">
          <Button size="large" type="primary" icon={<SearchOutlined />} block>
            Task - 01 : Movie
          </Button>
        </Link>
      </div>
    </div>
  );
}
