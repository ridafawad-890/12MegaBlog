import React, { Children } from 'react'

function Button() {
    //these are default values are value milti tu overwrite kregy warna isi tarah kregy
    Children, //children is nothing but the button text
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    {...props} //user ne jitni bhi properties di thi wo hamne spread krli mtlb lyli

  return (
    <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textColor} ${className} {...props}`}>
        {children}
    </button>
  )
}

export default Button
