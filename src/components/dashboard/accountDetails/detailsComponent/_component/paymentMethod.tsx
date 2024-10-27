import { Button, Card, DatePicker, Form, Input } from "antd";
import React from "react";

const PaymentMethod = () => {
  return (
    // <div className="w-full h-full justify-center items-center">
    <Card title="Add Payment Method" type="inner">
      <Form layout="vertical">
        <Form.Item name="cardName" label="Card Name">
          <Input />
        </Form.Item>

        <Form.Item name="cardNumber" label="Card Number">
          <Input />
        </Form.Item>
        <div className="flex w-full h-full space-x-5">
          <Form.Item name="expDate" label="Expiration Date">
            <DatePicker />
          </Form.Item>
          <Form.Item name="cardVerification" label="CVC">
            <Input type="number" />
          </Form.Item>
        </div>
        <div className="flex w-full h-full space-x-5 justify-end">
        <Button type="default">Cancel</Button>
        <Button type="primary">Add</Button>
        </div>
      </Form>
    </Card>
    // </div>
  );
};

export default PaymentMethod;
