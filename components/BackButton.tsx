import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

type Props = {
  to: string;
};

const BackButton = ({ to }: Props) => {
  return (
    <Link href={to}>
      <Button size="large" type="primary" icon={<ArrowLeftOutlined />} className="w-fit">
        Back
      </Button>
    </Link>
  );
};

export default BackButton;
