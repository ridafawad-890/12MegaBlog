
import React, { useId } from 'react'

function Select({
    options, //pakistan,china,india forexample
    label, //for example select country
    className = "",
    ...props
}, ref) {

    const id = useId()

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''>
                {label}
            </label>}

            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {/* agr ham directly loop lga ly values pr or values na hu tu crash hujyega so we used ? if value exist so apply map */}

                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}

            </select>
        </div>
    )
}

export default React.forwardRef(Select)

//assignment className ky andr empty string hu