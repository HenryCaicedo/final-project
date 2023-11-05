import React from 'react';
import NavBar from './NavBar';
import TextField from './TextField';
import FormButton from './FormButton';

export default function LoginScreen() {
    return (
        <div>
            <NavBar/>
            <div className="flex items-center justify-center h-[80vh]">

                <div className="bg-white flex flex-col space-y-5 items-center justify-center text-white w-[40vh] font-bold rounded-[4vh] border-[3px] border-gray-300 shadow-lg p-10">
                    <div className="bg-white w-[15vh] h-[15vh] rounded-full absolute top-[24vh] border-[3px] border-gray-300 shadow-lg"></div>
                    <TextField placeholder={"Email"}/>
                    <TextField placeholder={"Password"}/>
                    <FormButton>Login</FormButton>
                </div>

            </div>
        </div>
    )
}
