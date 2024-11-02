import {
  Button,
  Checkbox,
  Input,
  Modal,
  Table,
  Form,
  DatePicker,
  Select,
  Tag
} from "antd";
import visaCard from "../../../../assets/visaCard.png";
import masterCard from "../../../../assets/masterCard.png";
import { BiPlusCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import {
  addNewPayment,
  choosedAsDefaultCardPayment,
  editPaymentCard,
  removePaymentMethod,
} from "../../../redux/paymentSlice";
import dayjs from "dayjs";
import { FaCheckCircle } from "react-icons/fa";

const Payment = () => {
  const [addNewCard, setAddNewCard] = useState(false);
  const [editPaymentMethod, setEditPaymentMethod] = useState(false);
  const [selectCardType, setSelectCardType] = useState("");
  const [selectedCardToModify, setSelectedCardToModify] = useState<number>();

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
      render: (status:string) => {
        if(status === "Paid") {
          return <Tag color="green">{status}</Tag>
        } else {
          return <Tag color="blue">{status}</Tag>
        }
      }
    },
  ];

  const data = [
    {
      key: "1",
      invoice: "Invoice 1",
      amount: "$100",
      status: "Paid",
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

  useEffect(() => {
    const choosedCard = paymentMethods.find(
      (card) => card.cardId == selectedCardToModify
    );

    if (choosedCard) {
      form.setFieldsValue({
        cardName: choosedCard.cardName,
        cardNumber: choosedCard.cardNumber,
        expDate: dayjs(choosedCard.expiryDate),
        cardVerification: choosedCard.cvv,
      });
    }
  }, [paymentMethods, selectedCardToModify, form]);

  return (
    <>
      <div className="space-y-5">

        {/* Contact Email  */}
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 w-full h-full border-2 border-gray-300 rounded-md p-6">
          {/* <div className=" border-2 border-black flex justify-between w-full h-full"> */}
          <div className="flex flex-col">
            <h1 className="text-2xl">Contact Email</h1>
            <p className="text-sm text-gray-400">
              Where should invoices be sent?
            </p>
          </div>
          <div className="flex flex-col space-y-5 ">
            <div className="flex flex-col">
              <Checkbox defaultChecked={true} >Send to my account email</Checkbox>
              <span className="text-sm text-gray-400 px-6">
                {localStorage.getItem("email")}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <Checkbox>Send to an alternative email</Checkbox>
              <Input placeholder="example@gmail.com" className="w-fit mx-6" />
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* Card details payment  */}
        <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 w-full h-full border-2 border-gray-300 rounded-md p-6">
          <div className="flex flex-col">
            <h1 className="text-2xl ">Card details</h1>
            <p className="text-sm text-gray-400">
              Select default payment method
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {paymentMethods.map((item) => (
              <div
                className={`flex h-full w-full border-2 border-cyan-200 rounded-md p-4 ${
                  item.ChoosedAsDefault ? "bg-cyan-100" : ""
                }`}
                key={item.cardId}
              >
                <div className="w-10 ">
                  <img
                    src={item.cardImg === "visacard" ? visaCard : masterCard}
                    alt="visa card image"
                  />
                </div>
                <div className="flex w-full flex-col ml-5 space-y-1">
                  <h1 className="text-xl">{item.cardName}</h1>
                  <p className="text-sm text-gray-400">
                    Expire on {dayjs(item.expiryDate).format("MM/YYYY")}
                  </p>
                  <div className="flex justify-start items-center space-x-5">
                    <Button
                      onClick={() => {
                        setEditPaymentMethod(true);
                        setSelectedCardToModify(item.cardId);
                        // dispatch(choosedPaymentMethod(item.cardId));
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      variant="dashed"
                      color="danger"
                      onClick={() => dispatch(removePaymentMethod(item.cardId))}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <FaCheckCircle
                    size={25}
                    className="cursor-pointer"
                    style={{
                      color: item.ChoosedAsDefault ? "blue" : "gray",
                    }}
                    onClick={() =>
                      dispatch(choosedAsDefaultCardPayment(item.cardId))
                    }
                  />
                </div>
              </div>
            ))}

            <div className="grid grid-cols-1 md:flex p-5 ">
              <Button
                onClick={() => {
                  setAddNewCard(true), form.resetFields();
                }}
                className="font-bold"
              >
                <BiPlusCircle size={20} /> Add new card
              </Button>
            </div>
          </div>
        </div>

        {/* Billing history  */}
        <div className="grid grid-cols-1 space-y-4 w-full h-full border-2 border-gray-300 rounded-md p-6">
        <div className="flex flex-col space-y-5">
          <h1 className="text-xl ">Billing History</h1>
          <Table columns={columns} dataSource={data} className="overflow-x-scroll w-full" />
        </div>
        </div>
      </div>

      {/* ADD new payment method  */}

      <Modal
        title="Add Payment Method"
        closable={false}
        open={addNewCard}
        onOk={() => setAddNewCard(false)}
        footer={[
          <Button key="back" onClick={() => setAddNewCard(false)}>
            Cancel
          </Button>,
          <Button
            type="primary"
            onClick={() => {
              dispatch(
                addNewPayment({
                  cardId: Math.floor(Math.random() * 20) + 1,
                  cardName: form.getFieldValue("cardName"),
                  expiryDate: form.getFieldValue("expDate").toString(),
                  cardNumber: form.getFieldValue("cardNumber"),
                  cvv: form.getFieldValue("cardVerification"),
                  cardImg: selectCardType,
                })
              );
              setAddNewCard(false);
            }}
          >
            Add
          </Button>,
        ]}
        className="overflow-hidden w-[100px] h-fit"
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            name="cardName"
            label="Card Name"
            rules={[
              {
                required: true,
                message: "Please enter your card name!",
              },
            ]}
          >
            <Input placeholder="Enter card name" />
          </Form.Item>
          <div className="flex w-full h-full space-x-2 justify-center items-center">
            <Form.Item
              name="cardNumber"
              label="Card Number"
              className="w-full"
              rules={[
                {
                  required: true,
                  message: "Please enter your card number!",
                },
                {
                  len: 16,
                  message: "Card number must be exactly 16 digits!",
                },
                {
                  pattern: /^[0-9]*$/,
                  message: "Card number must be numeric!",
                },
              ]}
            >
              <Input maxLength={16} placeholder="Enter 16-digit card number" />
            </Form.Item>
            <Select
              onChange={(value) => setSelectCardType(value)}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full h-full items-center ">
            <Form.Item
              name="expDate"
              label="Expiration Date"
              rules={[
                {
                  required: true,
                  message: "Please enter your expiration date!",
                },
              ]}
            >
              <DatePicker className="flex w-[30vh]" />
            </Form.Item>
            <Form.Item
              name="cardVerification"
              label="CVC"
              rules={[
                {
                  required: true,
                  message: "Please enter your CVC!",
                },
                {
                  pattern: /^[0-9]*$/,
                  message: "CVC must be numeric!",
                },
              ]}
            >
              <Input className="flex w-56" maxLength={3} placeholder="Enter CVC" />
            </Form.Item>
          </div>
        </Form>
      </Modal>

      {/* For Edit the Payment Card   */}
      <Modal
        title="Edit Payment Card"
        closable={false}
        open={editPaymentMethod}
        onOk={() => setEditPaymentMethod(false)}
        footer={[
          <Button key="back" onClick={() => setEditPaymentMethod(false)}>
            Cancel
          </Button>,
          <Button
            type="primary"
            onClick={() => {
              dispatch(
                editPaymentCard({
                  cardId: selectedCardToModify,
                  cardName: form.getFieldValue("cardName"),
                  expiryDate: form.getFieldValue("expDate").toString(),
                  cardNumber: form.getFieldValue("cardNumber"),
                  cvv: form.getFieldValue("cardVerification"),
                  cardImg: selectCardType,
                })
              );
              setEditPaymentMethod(false);
            }}
          >
            Edit
          </Button>,
        ]}
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            name="cardName"
            label="Card Name"
            rules={[
              {
                required: true,
                message: "Please enter your card name!",
              },
            ]}
          >
            <Input placeholder="Enter card name" />
          </Form.Item>
          <div className="flex w-full h-full space-x-2 justify-center items-center">
            <Form.Item
              name="cardNumber"
              label="Card Number"
              className="w-full"
              rules={[
                {
                  required: true,
                  message: "Please enter your card number!",
                },
                {
                  len: 16,
                  message: "Card number must be exactly 16 digits!",
                },
                {
                  pattern: /^[0-9]*$/,
                  message: "Card number must be numeric!",
                },
              ]}
            >
              <Input maxLength={16} placeholder="Enter 16-digit card number" />
            </Form.Item>
            <Select
              onChange={(value) => setSelectCardType(value)}
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
            <Form.Item
              name="expDate"
              label="Expiration Date"
              rules={[
                {
                  required: true,
                  message: "Please enter your expiration date!",
                },
              ]}
            >
              <DatePicker className="flex w-[30vh]" />
            </Form.Item>
            <Form.Item
              name="cardVerification"
              label="CVC"
              rules={[
                {
                  required: true,
                  message: "Please enter your CVC!",
                },
              ]}
            >
              <Input type="number" className="flex w-56" />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default Payment;
