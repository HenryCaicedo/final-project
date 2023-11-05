import React from 'react';
import { X } from 'lucide-react';

export default function NavBar() {
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between pt-4 pb-2 px-6 shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <a href="#" className="text-2xl hover:text-blue-dark"><X color='gray' size={48}/></a>
            </div>
            <div>
                <a href="#" className="text-lg no-underline text-gray-500 hover:text-blue-dark ml-2">Log in</a>
            </div>
        </nav>
    )
}
