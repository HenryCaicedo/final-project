import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import AuthNavBar from './AuthNavBar';
import TextField from './TextField';
import { MainButton } from '../Theme/ThemeComponents';

export default function LoginScreen() {
    return (
        <div>
            <AuthNavBar login={true}/>
            <div className="flex items-center justify-center h-[80vh]">

                <div className="bg-white flex flex-col space-y-5 items-center justify-center text-white w-[40vh] font-bold rounded-[4vh] border-[3px] border-gray-300 shadow-lg p-10">
                    <div className="bg-white w-[15vh] h-[15vh] rounded-full absolute top-[24vh] border-[3px] border-gray-300 shadow-lg"></div>
                    <TextField placeholder={"Email"}/>
                    <TextField placeholder={"Contraseña"}/>
                    <Link to="/progress" className='w-full'>  
                        <MainButton>Entrar</MainButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}
