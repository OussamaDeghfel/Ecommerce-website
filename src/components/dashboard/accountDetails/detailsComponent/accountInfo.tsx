import { Button, Form, Input } from "antd";
import profilePic from "../../../../assets/profilePic.png";
import { useState } from "react";
import { userSignUP } from "../../../authorization/signup/signUp";

const AccountInfo = () => {
  const [userInformation, setUserInformation] = useState<userSignUP>({
    firstname: localStorage.getItem("firstname"),
    lastname: localStorage.getItem("lastname"),
    email: localStorage.getItem("email"),
  });

  const [editable, setEditable] = useState(false);

  const handleChangeEditable = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInformation((prevState) => {
      const updateUserInformation = {
        ...prevState,
        [name]: value,
      };

      localStorage.setItem(name, value);

      return updateUserInformation;
    });
  };

  return (
    <div className="flex flex-col w-full h-full space-y-2">
      <div className="flex border-2 border-gray-300 rounded-md p-4 justify-start items-center">
        <img src={profilePic} alt="" className="w-20 h-20" />
        <div className="flex flex-col p-4">
          <h1 className="text-3xl font-bold">
            {userInformation.firstname} {userInformation.lastname}
          </h1>
          <p className="text-base font-mono text-gray-500">Seller && Buyer</p>
        </div>
      </div>
      <div className="flex flex-col border-2 border-gray-300 rounded-md p-4">
        <h1 className="text-xl font-bold pb-8">Personal Inforamtion</h1>
        <div className="flex justify-between px-10">
          <Form layout="vertical" className="grid grid-cols-2 gap-5">
            <Form.Item label="First Name">
              {editable ? (
                <Input
                  name="firstname"
                  value={userInformation.firstname}
                  onChange={handleChangeEditable}
                />
              ) : (
                <span className="text-gray-500">
                  {userInformation.firstname}
                </span>
              )}
            </Form.Item>
            <Form.Item label="Last Name">
              {editable ? (
                <Input
                  name="lastname"
                  value={userInformation.lastname}
                  onChange={handleChangeEditable}
                />
              ) : (
                <span className="text-gray-500">
                  {userInformation.lastname}
                </span>
              )}
            </Form.Item>
            <Form.Item label="Email">
              {editable ? (
                <Input
                  name="email"
                  value={userInformation.email}
                  onChange={handleChangeEditable}
                />
              ) : (
                <span className="text-gray-500">{userInformation.email}</span>
              )}
            </Form.Item>
          </Form>

          {editable ? (
            <Button
              className="w-fit font-bold"
              onClick={() => setEditable(!editable)}
              size="large"
            >
              Save
            </Button>
          ) : (
            <Button
              className="w-fit font-bold"
              onClick={() => setEditable(!editable)}
              size="large"
            >
              Edit
            </Button>
          )}
        </div>
      </div>
      <div>address</div>
    </div>
  );
};

export default AccountInfo;
