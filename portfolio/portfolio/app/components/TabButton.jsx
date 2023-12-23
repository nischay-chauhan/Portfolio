import React from 'react'

const TabButton = ({active , selectTab , children}) => {
    const buttonClases = active ? 'text-white border-b purple-500' : 'text-[#ADB7BE] border-b border-purple-600'
  return (
    <button onClick={selectTab}>
    <p className={`mr-3 font-semibold hover:text-white ${buttonClases}`}>
    {children}
    </p>
    
    </button>
  )
}

export default TabButton