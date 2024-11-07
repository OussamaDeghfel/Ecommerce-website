import { Button, Form, Input } from "antd";
import profilePic from "../../../../assets/profilePic.png";
import { useState } from "react";
const AccountInfo = () => {
  const [userInformation, setUserInformation] = useState({
    firstname: localStorage.getItem("firstname") as string,
    lastname: localStorage.getItem("lastname") as string,
    email: localStorage.getItem("email") as string,
  } );

  const [userAddress, setUserAddress] = useState({
    country: "Algeria",
    city: "M'Sila",
    stateLocation: "Cite 1",
    postalCode: "5000",
  });

  const [infoEdit, setInfoEdit] = useState(false);
  const [addressEdit, setAddressEdit] = useState(false);

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

    setUserAddress({
      ...userAddress,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col w-full h-full space-y-2">
      {/* Profile Picture  */}
      <div className="flex border-2 border-gray-300 rounded-md p-4 md:justify-start justify-center items-center">
        <img src={profilePic} alt="" className="w-20 h-20" />
        <div className="flex flex-col p-4">
          <h1 className="md:text-3xl text-xl font-bold">
            {userInformation.firstname} {userInformation.lastname}
          </h1>
          <p className="text-base font-mono text-gray-500">Seller && Buyer</p>
        </div>
      </div>

      {/* Personal information  */}
      <div className="grid grid-cols-1 md:place-items-between border-2 border-gray-300 rounded-md p-4 ">
        <h1 className="text-2xl font-bold pb-8 grid place-self-center md:place-self-start">Personal Information</h1>
        <div className="md:flex md:justify-between px-10 place-items-center md:place-items-start">
          <Form
            layout="vertical"
            className="grid md:grid-cols-2 gap-5"
          >
            <Form.Item label="First Name">
              {infoEdit ? (
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
              {infoEdit ? (
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
              {infoEdit ? (
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
          
            {infoEdit ? (
              <Button
                className="w-fit font-bold"
                onClick={() => setInfoEdit(!infoEdit)}
                size="large"
              >
                Save
              </Button>
            ) : (
              <Button
                className="w-fit font-bold"
                onClick={() => setInfoEdit(!infoEdit)}
                size="large"
              >
                Edit
              </Button>
            )}
         
        </div>
      </div>

      {/* Address information  */}
      <div className="grid grid-cols-1 md:place-items-between border-2 border-gray-300 rounded-md p-4">
        <h1 className="text-2xl font-bold pb-8 grid place-self-center md:place-self-start">Address</h1>
        <div className="md:flex md:justify-between px-10 place-items-center md:place-items-start">
          <Form layout="vertical" className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
            <Form.Item label="Country">
              {addressEdit ? (
                <Input
                  name="country"
                  value={userAddress.country}
                  onChange={handleChangeEditable}
                />
              ) : (
                <span className="text-gray-500">{userAddress.country}</span>
              )}
            </Form.Item>
            <Form.Item label="City">
              {addressEdit ? (
                <Input
                  name="city"
                  value={userAddress.city}
                  onChange={handleChangeEditable}
                />
              ) : (
                <span className="text-gray-500">{userAddress.city}</span>
              )}
            </Form.Item>
            <Form.Item label="State">
              {addressEdit ? (
                <Input
                  name="email"
                  value={userAddress.stateLocation}
                  onChange={handleChangeEditable}
                />
              ) : (
                <span className="text-gray-500">
                  {userAddress.stateLocation}
                </span>
              )}
            </Form.Item>
            <Form.Item label="Postal Code">
              {addressEdit ? (
                <Input
                  name="postalCode"
                  value={userAddress.postalCode}
                  onChange={handleChangeEditable}
                />
              ) : (
                <span className="text-gray-500">{userAddress.postalCode}</span>
              )}
            </Form.Item>
          </Form>

          {addressEdit ? (
            <Button
              className="w-fit font-bold"
              onClick={() => setAddressEdit(!addressEdit)}
              size="large"
            >
              Save
            </Button>
          ) : (
            <Button
              className="w-fit font-bold"
              onClick={() => setAddressEdit(!addressEdit)}
              size="large"
            >
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
