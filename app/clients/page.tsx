'use client'
import React, { useState } from 'react'

const Clients = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
<button className='btn btn-secondary' onClick={() => setCount(count + 1)}>increase</button>
    </div>
  )
}

export default Clients