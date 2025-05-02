import React from 'react'
import { InputBox } from './InputBox'
import {Button} from './Button'

function Main() {
  return (
    <div className='bg-white my-5 p-15'>
        <div className='font-bold text-2xl'>Your Balnce Rs 10,000</div>
        <div className='font-bold text-lg mt-10'>User</div>
        <InputBox placeholder={'Search User...'} />
        <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
                <div className='rounded-full bg-gray-400 flex items-center justify-center h-10 w-10 font-semibold'>H</div>
                <div>Harkirat Singh</div>
            </div>
            <div>
                <Button content={"Send Money"} />
            </div>
        </div>
    </div>
  )
}

export default Main