import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { WarningButton } from '../components/WarningButton'

function SigUp() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <Heading head={"Signup"} />
        <SubHeading subhead={"Create a new account"} />
        <div className="mt-6">
          <InputBox label={"First Name"} placeholder={"abc"} />
        </div>
        <div className="mt-6">
          <InputBox label={"Last Name"} placeholder={"dwf"} />
        </div>
        <div className="mt-6">
          <InputBox label={"Email"} placeholder={"abc@example.com"} />
        </div>
        <div className="mt-6">
          <InputBox label={"Password"} placeholder={"**********"} />
        </div>
        <div className="mt-6">
          <Button content={"SignUp"}/>
        </div>
        <div className="mt-6">
          <WarningButton text={"Already have an account"} link={"Sign-in "} />
        </div>
      </div>
    </div>
  )
}

export default SigUp