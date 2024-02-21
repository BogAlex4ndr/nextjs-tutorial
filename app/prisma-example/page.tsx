import React from 'react'
import prisma from '@/utils/db'

const prismaHandlers = async () => {
    console.log("prisma example")
    // await prisma.tasks.create({
    //     data: {
    //         content: "hello Olleh"
    //     }
    // })
    const allTasks = await prisma.tasks.findMany({
        orderBy: {
            createtAt: "desc"
        }
    })
    return allTasks;
}

const PrismaExample = async () => {
    const tasks = await prismaHandlers()

    return (
        <div><h1 className='mb-6'>PrismaExample</h1>
            {tasks.map((task) => (<div key={task.id}>
                {task.content}
            </div>))}
        </div>

    )
}

export default PrismaExample