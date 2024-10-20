import { Alert, Button, Select, Switch, Table } from "antd";
import { useState } from "react";

const Security = () => {
  const [twoVerificationChecked, setTwoVerificationChecked] = useState(false);

  const [disabledButton, setDisbaledButton] = useState(false);

  const initialSessionsData = [
    {
      key: "1",
      username: "John Brown",
      browser: "Chrome",
      location: "USA",
      mostrecent: "10 minutes ago",
    },
    {
      key: "2",
      username: "Alice Smith",
      browser: "Firefox",
      location: "Canada",
      mostrecent: "5 minutes ago",
    },
    {
      key: "3",
      username: "Anna Johnson",
      browser: "Safari",
      location: "Australia",
      mostrecent: "15 minutes ago",
    },
    {
      key: "4",
      username: "Mike Wilson",
      browser: "Edge",
      location: "UK",
      mostrecent: "8 minutes ago",
    },
    {
      key: "5",
      username: "Emily Davis",
      browser: "Opera",
      location: "Germany",
      mostrecent: "12 minutes ago",
    },
    {
      key: "6",
      username: "David Martinez",
      browser: "Brave",
      location: "Mexico",
      mostrecent: "7 minutes ago",
    },
    {
      key: "7",
      username: "Sophia Rodriguez",
      browser: "Firefox",
      location: "Spain",
      mostrecent: "20 minutes ago",
    },
    {
      key: "8",
      username: "Oliver Garcia",
      browser: "Chrome",
      location: "Brazil",
      mostrecent: "3 minutes ago",
    },
    {
      key: "9",
      username: "Emma Hernandez",
      browser: "Safari",
      location: "France",
      mostrecent: "18 minutes ago",
    },
    {
      key: "10",
      username: "Daniel Lee",
      browser: "Edge",
      location: "Japan",
      mostrecent: "6 minutes ago",
    },
  ];
  
  const [dataSource, setDataSource] = useState(initialSessionsData);
  
  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Browser",
      dataIndex: "browser",
      key: "browser",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Most recent acitivity",
      dataIndex: "mostrecent",
      key: "mostrecent",
    },
  ];


  const handleLogoutAllSessions = () => {
    setDataSource([]);
    setDisbaledButton(true);
  };


  

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full space-y-10">
        <div>
          {twoVerificationChecked ? (
            <Alert
              message="Two-Step Verification Enabled"
              description="Your account is now more secure with two-step verification. Please keep your phone accessible for login confirmations."
              type="success"
              showIcon
            />
          ) : (
            <Alert
              message="Two-Step Verification Disabled"
              description="Your account is less secure without two-step verification. We recommend re-enabling it to protect your account."
              type="warning"
              showIcon
            />
          )}
        </div>

        <div className=" flex flex-col w-[100%]">
          <div className="flex border-2 border-gray-100 justify-between items-center p-5 rounded-t-lg w-full mx-auto">
            <div className="flex flex-col space-y-2">
              <h1 className="text-xl">Enforce two-step verification</h1>
              <span className="text-base text-gray-400">
                Require a security key or code in addition to password
              </span>
            </div>
            <Switch
              onClick={() => setTwoVerificationChecked(!twoVerificationChecked)}
            />
          </div>
          <div className="flex border-2 border-gray-100 justify-between items-center p-5 rounded-b-lg w-full mx-auto">
            <div className="flex flex-col space-y-2">
              <h1 className="text-xl">Logout everyone</h1>
              <span className="text-base text-gray-400">
                This will log you out from all devices
              </span>
            </div>
            <Button
              type="primary"
              className="font-medium"
              onClick={handleLogoutAllSessions}
              disabled={disabledButton}
            >
              Logout everyone
            </Button>
          </div>
        </div>

        <div className="flex flex-col w-[100%] space-y-5 p-5">
          <div>
            <h1 className="text-xl">Current sessions</h1>
            <p className="text-base text-gray-400">
              These devices are currently logged in.
            </p>
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2 w-fit">
              <Select defaultValue="All People" style={{ width: 120 }}></Select>
              <Select
                defaultValue="All browsers"
                style={{ width: 120 }}
              ></Select>
              <Select
                defaultValue="All Locations"
                style={{ width: 120 }}
              ></Select>
            </div>
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
