import { Button, Checkbox, Input } from "antd";
import visaCard from "../../../../assets/visaCard.png";
import masterCard from "../../../../assets/masterCard.png";
import { BiPlusCircle } from "react-icons/bi";
import { useState } from "react";

const Payment = () => {

  const [chooseDefaultCard, setChooseDefaultCard] = useState(0);

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

      <div>Billing history</div>
    </div>
  );
};

export default Payment;
