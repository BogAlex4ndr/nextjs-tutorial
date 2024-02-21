
import { createTask } from '@/utils/actions'
import React from 'react'


const TaskForm = () => {
    return (
        <form action={createTask}>
            <div className='join w-full'>
                <input
                    type="text"
                    className=' input input-bordered join-item w-full'
                    name="content"
                    placeholder='type here'
                    required />
                <button className='btn btn-primary join-item'>Create task</button>
            </div>
        </form>
    )
}

export default TaskForm