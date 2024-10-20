import { Checkbox, Input } from "antd";
import React from "react";

const Payment = () => {
  return (
    <div>
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
            <Input
              placeholder="example@gmail.com"
              className="w-fit mx-6"
            />
          </div>
        </div>
      </div>

      <div>Card details</div>
      <div>Billing history</div>
    </div>
  );
};

export default Payment;
