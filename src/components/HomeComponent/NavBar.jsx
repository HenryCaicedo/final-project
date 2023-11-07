import React from 'react';
import { X } from 'lucide-react';
import { appName, logo } from '../temp';

export default function NavBar() {
    return (
        <nav className="font-sans flex items-center justify-between pt-4 pb-2 px-6 shadow w-full">
            <div className="flex items-center">
                {logo}
                <span className="ml-2 text-3xl font-medium text-gray-700 hover:text-blue-dark">{appName}</span>
            </div>

            <div>
                <a href="#" className="text-lg no-underline text-gray-500 hover:text-blue-dark ml-2">About</a>
            </div>
        </nav>

    )
}
