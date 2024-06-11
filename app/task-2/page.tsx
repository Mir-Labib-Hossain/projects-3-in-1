import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Statistic, Table } from "antd";
import Link from "next/link";

const Task2Page = () => {
  const addVat = (price: number) => {
    return (15 / 100) * price + price;
  };

  const list = [
    { name: "Jhinga", price: 42 },
    { name: "Chichinga", price: 75 },
    { name: "Fulkopi", price: 56 },
    { name: "Aloo", price: 40 },
    { name: "Toamaatar", price: 120 },
    { name: "Mulo", price: 93 },
    { name: "Karola", price: 98 },
    { name: "Lau", price: 90 },
    { name: "Kumro", price: 35 },
    { name: "Sausha", price: 68 },
    { name: "Pyajj", price: 200 },
  ];

  const listWithVat = list.map(({ name, price }) => ({
    name,
    price,
    priceWithVat: addVat(price),
  }));

  const filteredList = listWithVat.filter(({ priceWithVat }) => priceWithVat > 50);

  const totalPrice = filteredList.reduce((total, { price }) => total + price, 0);
  const totalPriceWithVat = filteredList.reduce((total, { priceWithVat}) => total + priceWithVat, 0);
 
  return (
    <>
      <Link href="/">
        <Button size="large" type="primary" icon={<ArrowLeftOutlined />} className="w-fit">
          Back
        </Button>
      </Link>
      <Table dataSource={filteredList} columns={columns} rowKey="name" pagination={false} />
      <div className="grid grid-cols-3 gap-4">
        <Statistic title="Total Filtered Items" value={filteredList.length} />
        <Statistic title="Total Price" value={totalPrice} />
        <Statistic title="Total Price With 15% Vat" value={totalPriceWithVat} />
      </div>
    </>
  );
};

export default Task2Page;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Price With Vat",
    dataIndex: "priceWithVat",
    key: "priceWithVat",
  },
];
