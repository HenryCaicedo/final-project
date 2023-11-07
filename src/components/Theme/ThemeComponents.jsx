import React from 'react'


export function MainButton({ children, width='w-full', textSize='text-lg'}) {
  return (
    <button className={`rounded-3xl font-semibold p-2 bg-[#ff4d41] border-b-[4px] border-red-600
    hover:bg-red-400 active:border-red-400 ${textSize} ${width}`}>
      {children}
    </button>
  );
}



export function SecondaryButton({children, width='w-full', textSize='text-lg'}) {
  return (
    <button className={`rounded-3xl  font-semibold bg-[#f4f4f4] p-2 border-[1px] border-b-[4px] border-[#717171] text-[#717171]
    hover:bg-gray-200
      active:bg-gray-300 ${textSize} ${width}`}>
        {children}
    </button>
  )
}

