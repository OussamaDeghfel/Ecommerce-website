import { Button, Form } from "antd";
import profilePic from "../../../../assets/profilePic.png";
import { useState } from "react";

const AccountInfo = () => {
  const [userInformation, setUserInformation] = useState({
    firstName: localStorage.getItem("firstname"),
    lastName: localStorage.getItem("lastname"),
    email: localStorage.getItem("email"),
    phoneNumber: localStorage.getItem("phonenumber"),
  });

  const [editable, setEditable] = useState(false);

  return (
    <div className="flex flex-col w-full h-full space-y-2">
      <div className="flex border-2 border-gray-300 rounded-md p-4 justify-start items-center">
        <img src={profilePic} alt="" className="w-20 h-20" />
        <div className="flex flex-col p-4">
          <h1 className="text-3xl font-bold">User Name</h1>
          <p className="text-base font-mono text-gray-500">Seller && Buyer</p>
        </div>
      </div>
      <div className="flex flex-col border-2 border-gray-300 rounded-md p-4">
        <h1 className="text-xl font-bold pb-8">Personal Inforamtion</h1>
        <div className="flex justify-between px-10">
          <Form layout="vertical" className="grid grid-cols-1 p-4">
            <Form.Item label="First Name">
              {" "}
              <span className="text-gray-500">
                {userInformation.firstName}
              </span>{" "}
            </Form.Item>
            <Form.Item label="Last Name">
              {" "}
              <span className="text-gray-500">
                {userInformation.lastName}
              </span>{" "}
            </Form.Item>
            <Form.Item label="Email">
              {" "}
              <span className="text-gray-500">
                {userInformation.email}
              </span>{" "}
            </Form.Item>
          </Form>

          <Button
            className="w-fit font-bold"
            onClick={() => setEditable(!editable)}
          >
            Edit
          </Button>
        </div>
      </div>
      <div>address</div>
    </div>
  );
};

export default AccountInfo;
