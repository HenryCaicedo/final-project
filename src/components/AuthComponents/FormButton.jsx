import React from 'react'

export default function FormButton({children}) {
  return (
    <button className="rounded-2xl bg-red-500 w-full p-2 border-b-[3px] border-red-600
    hover:bg-red-400
      active:border-red-400">
        {children}
    </button>
  )
}
