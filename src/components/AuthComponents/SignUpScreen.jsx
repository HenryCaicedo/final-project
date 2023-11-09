import React from 'react';
import { Link } from 'react-router-dom';
import AuthNavBar from './AuthNavBar';
import TextField from './TextField';
import { MainButton } from '../Theme/ThemeComponents';z

export default function SignUp() {
    return (
        <div>
            <AuthNavBar login={false}/>
            <div className="flex items-center justify-center h-[80vh]">

                <div className="bg-white flex flex-col space-y-5 items-center justify-center text-white w-[40vh] font-bold rounded-[4vh] border-[3px] border-gray-300 shadow-lg p-10">
                    <div className="bg-white w-[15vh] h-[15vh] rounded-full absolute top-[16vh] border-[3px] border-gray-300 shadow-lg"></div>
                    <TextField placeholder={"Nombre"}/>
                    <TextField placeholder={"Email"}/>
                    <TextField placeholder={"Contraseña"}/>
                    <TextField placeholder={"Confirmar contraseña"}/>
                    <Link to="/progress" className='w-full'>  
                        <MainButton>Crear cuenta</MainButton>
                    </Link>
                </div>

            </div>
        </div>
    )
}
