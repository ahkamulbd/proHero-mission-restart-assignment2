import React from 'react';

const TaskStatus = () => {
    return (
        <div className='w-1/4 ml-5 pt-5'>
            <h2 className='text-2xl mb-3'>Task Status</h2>
            <div className='mt-5'>
                <p>Select a ticket to add to Task Status</p>
                <div className='mt-5'>
                    <h3 className='text-xl font-bold'>Resolved Task</h3>
                    <p>No resolved tasks yet.</p>
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;