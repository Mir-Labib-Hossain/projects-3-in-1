import { CheckCircleOutlined } from "@ant-design/icons";

import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/task-1" className="w-full">
        <Button size="large" type="primary" icon={<CheckCircleOutlined />} block>
          Task - 01 : Form Validation
        </Button>
      </Link>
      <Link href="/task-2" className="w-full">
        <Button size="large" type="primary" icon={<CheckCircleOutlined />} block>
          Task - 02 : 15% Vat & Sum
        </Button>
      </Link>
      <Link href="/task-3" className="w-full">
        <Button size="large" type="primary" icon={<CheckCircleOutlined />} block>
          Task - 03 : Movie Search
        </Button>
      </Link>
      <p className="text-gray-600 italic">Note: Optimized for laptops and desktops screens. Not responsive on mobile devices.</p>
    </>
  );
}
