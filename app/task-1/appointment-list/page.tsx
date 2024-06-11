"use client";
import { ArrowLeftOutlined ,DeleteOutlined} from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Table } from "antd";
import { clearAppointmentList } from "@/redux/slices/task1Slice";

const AppointmentListPage = () => {
  const dispatch = useAppDispatch()
  const appointmentList = useAppSelector((state) => state.persisted.task1.appointmentList);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Slot",
      dataIndex: "slot",
      key: "slot",
    },
  ];

  const clearList=()=>{
    dispatch(clearAppointmentList())
  }

  return (
    <>
      <div className="flex justify-between">
        <Link href="/task-1">
          <Button size="large" type="primary" icon={<ArrowLeftOutlined />} className="w-fit">
            Back
          </Button>
        </Link>
        <Button size="large" type="primary" icon={<DeleteOutlined />} className="w-fit" onClick={clearList}>
          Clear List
        </Button>
      </div>
      <Table dataSource={appointmentList} columns={columns} />
    </>
  );
};

export default AppointmentListPage;
