import { Button, Checkbox, Input, Table } from "antd";
import visaCard from "../../../../assets/visaCard.png";
import masterCard from "../../../../assets/masterCard.png";
import { BiPlusCircle } from "react-icons/bi";
import { useState } from "react";

const Payment = () => {

  const [chooseDefaultCard, setChooseDefaultCard] = useState(0);

  const columns = [
    {
      title: 'Invoice',
      dataIndex: 'invoice',
      key: 'invoice',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    }
  ];

  const data = [
    {
      key: '1',
      invoice: 'Invoice 1',
      amount: '$100',
      status: 'Pending',
      date: '2024-10-10',
    },
    {
      key: '2',
      invoice: 'Invoice 2',
      amount: '$200',
      status: 'Paid',
      date: '2024-06-18',
    },
    {
      key: '3',
      invoice: 'Invoice 3',
      amount: '$300',
      status: 'Pending',
      date: '2023-10-12',
    },
    {
      key: '4',
      invoice: 'Invoice 4',
      amount: '$400',
      status: 'Paid',
      date: '2024-07-24',
    },
    {
      key: '5',
      invoice: 'Invoice 5',
      amount: '$500',
      status: 'Pending',
      date: '2024-09-29',
    },
    {
      key: '6',
      invoice: 'Invoice 6',
      amount: '$600',
      status: 'Paid',
      date: '2024-10-01',
    },
    {
      key: '7',
      invoice: 'Invoice 7',
      amount: '$700',
      status: 'Pending',
      date: '2024-05-16',
    },
    {
      key: '8',
      invoice: 'Invoice 8',
      amount: '$800',
      status: 'Paid',
      date: '2024-08-17',
    },
    {
      key: '9',
      invoice: 'Invoice 9',
      amount: '$900',
      status: 'Pending',
      date: '2024-02-24',
    },
  ];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 w-full h-full border-2 border-gray-300 rounded-md p-6">
        <div className="flex flex-col">
          <h1 className="text-xl ">Contact Email</h1>
          <p className="text-sm text-gray-400">
            Where should invoices be sent?
          </p>
        </div>
        <div className="flex flex-col space-y-5 ">
          <div className="flex flex-col">
            <Checkbox className="">Send to my account email</Checkbox>
            <span className="text-sm text-gray-400 px-6">
              oussama@gmail.com
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <Checkbox>Send to an alternative email</Checkbox>
            <Input placeholder="example@gmail.com" className="w-fit mx-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-full h-full border-2 border-gray-300 rounded-md p-6">
        <div className="flex flex-col">
          <h1 className="text-xl ">Card details</h1>
          <p className="text-sm text-gray-400">Select default payment method</p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div className={`flex h-full w-full border-2 border-cyan-200 rounded-md p-4 
          ${chooseDefaultCard === 1 ? "bg-cyan-50" : ""}`} 
          >
            <div className="w-10">
              <img src={visaCard} alt="visa card image" />
            </div>
            <div className="flex flex-col ml-5 space-y-1">
              <h1 className="text-xl">Paysera Visa Card</h1>
              <p className="text-sm text-gray-400">Expire on 22/09</p>
              <div className="flex justify-start items-center space-x-5">
                <Button className="text-base font-light" onClick={() => setChooseDefaultCard(1)}>set as default</Button>
                <Button>Edit</Button>
              </div>
            </div>
          </div>

          <div className={`flex h-full w-full border-2 border-cyan-200 rounded-md p-4 
          ${chooseDefaultCard === 2 ? "bg-cyan-50" : ""}`} 
          >
            <div className="w-10">
              <img src={masterCard} alt="visa card image" />
            </div>
            <div className="flex flex-col ml-5 space-y-1">
              <h1 className="text-xl">Master Card</h1>
              <p className="text-sm text-gray-400">Expire on 03/12</p>
              <div className="flex justify-start items-center space-x-5">
                <Button className="text-base font-light" onClick={() => setChooseDefaultCard(2)}>set as default</Button>
                <Button>Edit</Button>
              </div>
            </div>
          </div>

          <div className="flex">
            <Button>
              <BiPlusCircle /> Add new card
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-5">
      <h1 className="text-xl ">Billing History</h1>
      <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Payment;
