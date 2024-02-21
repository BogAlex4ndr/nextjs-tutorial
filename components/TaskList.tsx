import prisma from '@/utils/db'
import Link from 'next/link'
import React from 'react'
import DeleteForm from './DeleteForm'
import { getAllTasks } from '@/utils/actions'

const TaskList = async () => {

    const allTasks = await getAllTasks()

    if (allTasks.length === 0) {
        return <h2 className='mt-8 text-lg'>No tasks</h2>
    }
    return (
        <ul className='mt-8'>{allTasks.map(task => (
            <li key={task.id} className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'>
                <h1 className={`text-lg capitalize ${task.completed ? "line-through" : null}`}>
                    {task.content}
                </h1>
                <div className='flex gap-6 items-center'>
                    <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>Edit</Link>
                    <DeleteForm id={task.id} />
                </div>
            </li>))}
        </ul>
    )
}

export default TaskList