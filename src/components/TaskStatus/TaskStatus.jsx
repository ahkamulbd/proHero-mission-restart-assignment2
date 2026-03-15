import React from 'react';

const TaskStatus = ({tasks, handleCompleteTask}) => {

    return (

        <div className='w-1/4 ml-5 pt-5'>

            <h2 className='text-2xl font-bold mb-3'>Task Status</h2>

            {
                tasks.length === 0 ?

                <p>Select a ticket to add to Task Status</p>

                :

                tasks.map(task =>

                    <div key={task.id} className='bg-white p-4 ml-0 mr-5 my-5 rounded'>

                        <p className='font-semibold my-5'>{task.title}</p>

                        <button
                            className='bg-green-600 text-white px-4 py-2 mt-2 rounded'
                            onClick={() => handleCompleteTask(task.id)}
                        >
                            Complete
                        </button>

                    </div>

                )
            }

            <div className='mt-5'>
                <h3 className='text-xl font-bold'>Resolved Task</h3>
                <p>No resolved tasks yet.</p>
            </div>

        </div>
    );
};

export default TaskStatus;