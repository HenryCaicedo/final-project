import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { SecondaryButton } from '../Theme/ThemeComponents';
import { Link } from 'react-router-dom';

export default function AuthNavBar({login=true}) {

    var button = <Link to='/login'><SecondaryButton>Log in</SecondaryButton></Link>;
    var title = 'Crear cuenta';

    if (login===true){
        button = <Link to='/signup'><SecondaryButton>Crear cuenta</SecondaryButton></Link>;
        title = 'Iniciar sesión';
    }


    return (
        <nav className="font-sans flex items-center justify-between pt-4 pb-2 px-6 border-[3px] border-gray-300 w-full">
            <div className="text-center">
                <a href="/" className="text-2xl hover:text-blue-dark"><ChevronLeft color='gray' size={48}/></a>
            </div>
            <div className="text-center">
                <span className="text-2xl text-gray-600 font-semibold">{title}</span>
            </div>
            <div className="text-right">
                {button}
            </div>
        </nav>
    )
}
