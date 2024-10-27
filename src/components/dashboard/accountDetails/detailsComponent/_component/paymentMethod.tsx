import { DatePicker, Form, Input } from "antd";
import React from "react";

const PaymentMethod = () => {
  return (
    <div className="w-full h-full justify-center items-center rounded-md shadow-lg">
      <Form layout="vertical">
        <h1>Add Payment Method</h1>
        <Form.Item name="cardName" label="Card Name">
          <Input />
        </Form.Item>

        <Form.Item name="cardNumber" label="Card Number">
          <Input />
        </Form.Item>
        <div className="flex w-full">
          <Form.Item name="expDate" label="Expiration Date">
            <DatePicker />
          </Form.Item>
          <Form.Item name="cardVerification" label="CVC">
            <Input type="number" />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default PaymentMethod;
