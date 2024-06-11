import { FormOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import BackButton from "../../components/BackButton";

const Task1Page = () => {
  return (
    <>
      <BackButton to="/" />
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
