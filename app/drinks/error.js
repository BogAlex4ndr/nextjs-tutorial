'use client'

const error = (error) => {
    console.log(error)
  return (
    <div className=' text-red-500'>{error.error.message}</div>
  )
}

export default error