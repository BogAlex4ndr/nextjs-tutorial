import EditForm from '@/components/EditForm'
import { getTask } from '@/utils/actions'


import Link from 'next/link'
import React from 'react'

const SingleTaskPage = async ({ params }: any) => {
    const { id } = params
    const task = await getTask(id)
    return (
        <div className='flex flex-col'>
            <div className='mb-16'>
                <Link className='btn btn-warning' href={'/tasks'}>Back</Link>
            </div>
            <div className='flex gap-8 items-center'>
                <EditForm task={task} />
            </div>
        </div>
    )
}

export default SingleTaskPage