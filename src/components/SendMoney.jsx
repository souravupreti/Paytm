import { Button } from './Button'
import { InputBox } from './InputBox'

export function SendMoney() {
  return (
    <div>
      <div className='text-xl font-bold text-center'>
        Send Money
      </div>
      <div className='flex gap-2 item-center mt-10'>
        <div className='rounded-full h-10 w-10 bg-green-600 text-white flex items-center justify-center text-semibold'>A</div>
        <div className='flex items-center justify-center font-bold'>Friend's Name</div>
      </div>
      <div className='mt-5'>
        <InputBox label={'Amount (in Rs)'} placeholder={"Enter amount"}/>
      </div>
      <Button content={"Initiate Transfer"} />
    </div>
  )
}
