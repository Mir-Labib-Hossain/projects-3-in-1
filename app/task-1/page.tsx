import { ArrowLeftOutlined, FormOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

const Task1Page = () => {
  return (
    <>
      <Link href="/">
        <Button size="large" type="primary" icon={<ArrowLeftOutlined />} className="w-fit">
          Back
        </Button>
      </Link>
      <Link href="/task-1/appointment-form" className="w-full">
        <Button size="large" type="primary" icon={<FormOutlined />} block>
          Appointment Form
        </Button>
      </Link>
      <Link href="/task-1/appointment-list" className="w-full">
        <Button size="large" type="primary" icon={<OrderedListOutlined />} block>
          Appointment List
        </Button>
      </Link>
    </>
  );
};

export default Task1Page;
