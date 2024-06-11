"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { saveAppointmentList } from "@/redux/slices/task1Slice";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Alert, Button, DatePicker, Form, Input, InputNumber, Modal, Select, message } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import BackButton from "../../../components/BackButton";

const { Item } = Form;

interface IAppointment {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  age: number;
  date: string;
  slot: string;
}

const AppointmentFormPage = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const appointmentList = useAppSelector((state) => state.persisted.task1.appointmentList);

  const [appointmentForm, setAppointmentForm] = useState<IAppointment | null>(null);
  const [isOpenSlotModal, setIsOpenSlotModal] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  const showSlotModal = () => {
    setIsOpenSlotModal(true);
  };

  const closeSlotModal = () => {
    setIsOpenSlotModal(false);
  };

  const onFinish = (values: IAppointment) => {
    showSlotModal();

    const formattedDate = dayjs(values.date).format("DD/MM/YYYY");
    setAppointmentForm({
      ...values,
      date: formattedDate,
      slot: "", // temporary empty
    });

    const existingSlots = appointmentList.filter(({ date }) => date === formattedDate).map((item) => item.slot) || [];
    const availableSlots = defaultSlots.filter((slot) => !existingSlots.includes(slot));
    setAvailableSlots(availableSlots);
  };

  const createAppointment = () => {
    appointmentForm && dispatch(saveAppointmentList(appointmentForm));
    setIsOpenSlotModal(false);
    message.success("Successfully appointment created.");
    form.resetFields();
  };

  return (
    <>
      <BackButton to="/task-1" />
      <Form {...formItemLayout} variant="filled" {...formItemLayout} form={form} name="register" onFinish={onFinish}>
        <Item label="First Name" name="firstName" rules={[{ required: true, message: "Please input your first name!" }]}>
          <Input />
        </Item>

        <Item label="Last Name" name="lastName" rules={[{ required: true, message: "Please input your last name!" }]}>
          <Input />
        </Item>

        <Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid e-mail!",
            },
            {
              required: true,
              message: "Please input your e-mail!",
            },
          ]}
        >
          <Input />
        </Item>

        <Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: "Please input your phone number!" }]}>
          <Input />
        </Item>

        <Item label="Address" name="address" rules={[{ required: true, message: "Please input your address!" }]}>
          <Input.TextArea />
        </Item>

        <Item label="Age" name="age" rules={[{ required: true, message: "Please input your age!" }]}>
          <InputNumber style={{ width: "100%" }} />
        </Item>

        <Item label="Slot Date" name="date" rules={[{ required: true, message: "Please input a date to check available slot!" }]}>
          <DatePicker style={{ width: "100%" }} />
        </Item>
        <Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            Check Slot
          </Button>
        </Item>
      </Form>
      <Modal title="Edit" centered open={isOpenSlotModal} footer={null} onCancel={closeSlotModal}>
        <Item label="Slot">
          <Select placeholder="Select a slot" value={appointmentForm?.slot || null} onChange={(value) => setAppointmentForm((prev) => (prev ? { ...prev, slot: value } : prev))} options={availableSlots.map((slot) => ({ label: slot, value: slot }))} />
        </Item>
        {availableSlots.length > 0 ? (
          <Button type="primary" onClick={createAppointment} disabled={!appointmentForm?.slot} block icon={<PlusOutlined />}>
            Create Appointment
          </Button>
        ) : (
          <Alert message="No Slots available. Please Select another date." type="warning" showIcon />
        )}
      </Modal>
    </>
  );
};

export default AppointmentFormPage;

const defaultSlots = ["4:00 - 5:00", "5:00 - 6:00", "6:00 - 7:00"];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
