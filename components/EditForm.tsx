import { editTask } from '@/utils/actions';
import React from 'react'

const EditForm = ({ task }: any) => {
    const { id, completed, content } = task;
    return (
        <form className='max-w-sm p-12 border border-base-300 rounded-lg bg-slate-600' action={editTask}>
            <input type="hidden" name="id" value={id} />
            <input type="text" name="content" required defaultValue={content} className='input input-bordered w-full' />
            <div className="form-control my-4">
                <label htmlFor='completed' className='lable cursor-pointer flex justify-between'>
                    <span className='label-text'>completed</span>
                    <input
                        type="checkbox"
                        defaultChecked={completed}
                        name="completed" id="completed"
                        className='checkbox checkbox-primary checkbox-xs' />
                </label>
            </div>
            <button type="submit" className='btn btn-secondary btn-sm btn-block'>edit</button>
        </form>
    )
}

export default EditForm