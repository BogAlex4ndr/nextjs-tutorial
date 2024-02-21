'use client'
import { deleteTask } from '@/utils/actions'
import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButon = () => {
    const { pending } = useFormStatus()
    return <button type='submit' className='btn btn-xs btn-error' disabled={pending}>{pending ? "deleting..." : "delete"}</button>
}

const DeleteForm = ({ id }: any) => {
    return (
        <form action={deleteTask}>
            <input type="hidden" name="id" value={id} />
            <SubmitButon />
        </form>
    )
}

export default DeleteForm