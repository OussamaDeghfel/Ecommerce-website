import {
  Button,
  Checkbox,
  Input,
  Modal,
  Table,
  Form,
  DatePicker,
  Select,
} from "antd";
import visaCard from "../../../../assets/visaCard.png";
import masterCard from "../../../../assets/masterCard.png";
import { BiPlusCircle } from "react-icons/bi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { addNewPayment } from "../../../redux/paymentSlice";
import dayjs from "dayjs";

const Payment = () => {
  const [addNewCard, setAddNewCard] = useState(false);

  const { paymentMethods } = useSelector((state: RootState) => state.payment);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const columns = [
    {
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const data = [
    {
      key: "1",
      invoice: "Invoice 1",
      amount: "$100",
      status: "Pending",
      date: "2024-10-10",
    },
    {
      key: "2",
      invoice: "Invoice 2",
      amount: "$200",
      status: "Paid",
      date: "2024-06-18",
    },
    {
      key: "3",
      invoice: "Invoice 3",
      amount: "$300",
      status: "Pending",
      date: "2023-10-12",
    },
    {
      key: "4",
      invoice: "Invoice 4",
      amount: "$400",
      status: "Paid",
      date: "2024-07-24",
    },
    {
      key: "5",
      invoice: "Invoice 5",
      amount: "$500",
      status: "Pending",
      date: "2024-09-29",
    },
    {
      key: "6",
      invoice: "Invoice 6",
      amount: "$600",
      status: "Paid",
      date: "2024-10-01",
    },
    {
      key: "7",
      invoice: "Invoice 7",
      amount: "$700",
      status: "Pending",
      date: "2024-05-16",
    },
    {
      key: "8",
      invoice: "Invoice 8",
      amount: "$800",
      status: "Paid",
      date: "2024-08-17",
    },
    {
      key: "9",
      invoice: "Invoice 9",
      amount: "$900",
      status: "Pending",
      date: "2024-02-24",
    },
  ];

  // const handleValue = () => {
  //   console.log(form.getFieldValue("cardName"));
  //   console.log("card id ", Math.floor(Math.random() * 20) + 1),
  //     console.log("cardName: ", form.getFieldValue("cardName")),
  //     console.log("expiryDate: ", dayjs(form.getFieldValue("expDate")).format("MM/YYYY")),
  //     console.log("cardNumber: ", form.getFieldValue("cardNumber")),
  //     console.log("cvv: ", form.getFieldValue("cardVerification"))
  // };

  return (
    <>
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
            <p className="text-sm text-gray-400">
              Select default payment method
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {paymentMethods.map((item) => (
              <div
                className="flex h-full w-full border-2 border-cyan-200 rounded-md p-4 
         "
                key={item.cardId}
              >
                <div className="w-10">
                  <img src={visaCard} alt="visa card image" />
                </div>
                <div className="flex flex-col ml-5 space-y-1">
                  <h1 className="text-xl">{item.cardName}</h1>
                  <p className="text-sm text-gray-400">
                    Expire on {item.expiryDate}
                  </p>
                  <div className="flex justify-start items-center space-x-5">
                    <Button
                      className="text-base font-light"
                      // onClick={() => setChooseDefaultCard(1)}
                    >
                      set as default
                    </Button>
                    <Button>Edit</Button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex p-5">
              <Button onClick={() => setAddNewCard(true)} className="font-bold">
                <BiPlusCircle size={20} /> Add new card
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <h1 className="text-xl ">Billing History</h1>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>

      <Modal
        title="Add Payment Method"
        closable={false}
        open={addNewCard}
        onOk={() => setAddNewCard(false)}
        footer={[
          <Button key="back" onClick={() => setAddNewCard(false)}>
            Cancel
          </Button>,
          <Button type="primary" onClick={() => dispatch(
            addNewPayment({
              cardId: Math.floor(Math.random() * 20) + 1,
              cardName: form.getFieldValue("cardName"),
              expiryDate: dayjs(form.getFieldValue("expDate")).format("MM/YYYY"),
              cardNumber: form.getFieldValue("cardNumber"),
              cvv: form.getFieldValue("cardVerification"),
              // cardImg: form.getFieldValue(""),
            })
          )}>
            Add
          </Button>,
        ]}
      >
        <Form layout="vertical" form={form}>
          <Form.Item name="cardName" label="Card Name">
            <Input />
          </Form.Item>
          <div className="flex w-full h-full space-x-2 justify-center items-center">
            <Form.Item name="cardNumber" label="Card Number" className="w-full">
              <Input />
            </Form.Item>
            <Select
              placeholder="Select Card Type"
              options={[
                {
                  value: "mastercard",
                  label: <img src={masterCard} alt="master card image" />,
                },
                {
                  value: "visacard",
                  label: <img src={visaCard} alt="master card image" />,
                },
              ]}
              className="w-20 h-8 -bottom-0.5"
            />
          </div>
          <div className="flex w-full h-full justify-between space-x-2 items-center ">
            <Form.Item name="expDate" label="Expiration Date">
              <DatePicker className="flex w-[30vh]" />
            </Form.Item>
            <Form.Item name="cardVerification" label="CVC">
              <Input type="number" className="flex w-56" />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default Payment;
