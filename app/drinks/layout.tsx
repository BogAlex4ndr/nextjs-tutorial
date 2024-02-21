import React from 'react'

const DrinksLayout = ({ children }: any) => {
    return (
        <div className=' max-w-full'>
            <div className="mockup-code mb8">
                <pre data-prefix="$">
                    <code>Code</code>
                </pre>
            </div>
            {children}
        </div>
    )
}

export default DrinksLayout