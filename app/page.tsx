import { SearchOutlined } from "@ant-design/icons";

import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
    </>
  );
}
