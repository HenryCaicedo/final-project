import React from 'react'

export default function TextField({placeholder="textfield"}) {
  return (
        <input type="text" placeholder={placeholder} className='w-full rounded-2xl p-2 bg-gray-200 text-black font-semibold'/>
  )
}
