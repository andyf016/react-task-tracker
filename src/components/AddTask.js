import React from 'react'

const AddTask = () => {
    return (
        <form classname='add-form'>
            <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task'/>
            </div>
        </form>
    )
}

export default AddTask
