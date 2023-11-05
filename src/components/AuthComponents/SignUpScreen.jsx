import React from 'react'
import FormButton from './FormButton'
import TextField from './TextField'
import NavBar from './NavBar'

export default function SignUp() {
    return (
        <div>
            <NavBar/>
            <div className="flex items-center justify-center h-[80vh]">

                <div className="bg-white flex flex-col space-y-5 items-center justify-center text-white w-[40vh] font-bold rounded-[4vh] border-[3px] border-gray-300 shadow-lg p-10">
                    <div className="bg-white w-[15vh] h-[15vh] rounded-full absolute top-[16vh] border-[3px] border-gray-300 shadow-lg"></div>
                    <TextField placeholder={"Name"}/>
                    <TextField placeholder={"Email"}/>
                    <TextField placeholder={"Password"}/>
                    <TextField placeholder={"Confirm password"}/>
                    <FormButton>Sign up</FormButton>
                </div>

            </div>
        </div>
    )
}
