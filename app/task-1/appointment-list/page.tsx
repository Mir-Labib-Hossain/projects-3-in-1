"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearAppointmentList } from "@/redux/slices/task1Slice";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import Link from "next/link";
import BackButton from "../../../components/BackButton";

const AppointmentListPage = () => {
  const dispatch = useAppDispatch();
  const appointmentList = useAppSelector((state) => state.persisted.task1.appointmentList);

  const clearList = () => {
    dispatch(clearAppointmentList());
  };

  return (
    <>
      <div className="flex justify-between">
        <BackButton to="/task-1" />
        {appointmentList.length > 0 ? (
          <Button size="large" type="primary" icon={<DeleteOutlined />} className="w-fit" onClick={clearList}>
            Clear List
          </Button>
        ) : (
          <Link href="/task-1/appointment-form">
            <Button size="large" type="primary" icon={<PlusOutlined />} className="w-fit">
              Create Appointment
            </Button>
          </Link>
        )}
      </div>
      <Table dataSource={appointmentList} columns={columns} rowKey={(record) => record.date + "" + record.slot} />
    </>
  );
};

export default AppointmentListPage;

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
