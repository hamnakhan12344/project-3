import React from 'react'

function CompareButton() {
  return (
    <button className='p-1 px-3 items-center  rounded-full border text-white compare-btn-gradient text-xs lg:text-base flex gap-2'>
        Compare <span className='text-xs lg:text-lg'>+</span>
    </button>
  )
}

export default CompareButton