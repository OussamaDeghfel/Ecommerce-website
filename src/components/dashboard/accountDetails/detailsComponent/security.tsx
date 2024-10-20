import { Button, Switch } from 'antd'
import React from 'react'

const Security = () => {
  return (
    <div className='flex flex-col w-full h-full space-y-2'>
      <div>

        
      <div className='flex border-2 border-gray-100 justify-between items-center p-5 rounded-t-lg w-[90%] mx-auto'>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-2xl'>Enforce two-step verification</h1>
          <span className='text-base text-gray-400'>Require a security key or code in addition to password</span>
        </div>
        <Switch defaultChecked />
      </div>

      <div className='flex border-2 border-gray-100 justify-between items-center p-5 rounded-b-lg w-[90%] mx-auto'>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-2xl'>Logout everyone</h1>
          <span className='text-base text-gray-400'>This will log you out from all devices</span>
        </div>
        <Button type='primary' className='font-bold'>Logout everyone</Button>
      </div>
      </div>
    </div>
  )
}

export default Security