import TaskFormCustom from '@/components/TaksFormCustom.jsx'
import TaskList from '@/components/TaskList'
import React from 'react'
export const dynamic = "force-dynamic"

const Tasks = () => {
  return (
    <div className='max-w-lg'>
      <TaskFormCustom />
      <TaskList />
    </div>
  )
}

export default Tasks