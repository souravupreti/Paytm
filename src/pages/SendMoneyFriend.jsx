import React from 'react'
import { SendMoney } from '../components/SendMoney'

function SendMoneyFriend() {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
      <SendMoney />
      </div>
        
    </div>
  )
}

export default SendMoneyFriend