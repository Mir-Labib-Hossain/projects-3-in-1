"use client"
import { ArrowLeftOutlined, FormOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

import { useAppSelector } from "@/redux/hooks";
import { Table } from "antd";

const AppointmentListPage = () => {
    const appointmentList=useAppSelector(state=>state.persisted.task1.appointmentList)
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

  return<>
  <Link href="/task-1">
        <Button size="large" type="primary" icon={<ArrowLeftOutlined />} className="w-fit">
          Back
        </Button>
      </Link>
   <Table dataSource={appointmentList} columns={columns} />
  </>
   ;
};

export default AppointmentListPage;
