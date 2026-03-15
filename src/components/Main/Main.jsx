import React, { Suspense } from 'react';
import Carts from '../Carts/Carts';
import TaskStatus from '../TaskStatus/TaskStatus';

const fetchTickets = async () => {
    const res = await fetch ("/tickets.json")
    return res.json ()
}

const Main = ({handleAddTask, tasks, handleCompleteTask}) => {
    const ticketPromise = fetchTickets ();
    return (
        <div className='flex-none md:flex max-w-7xl mx-auto my-10 py-10 bg-gray-300'>
            
            <Suspense fallback = {<p>Tickets loading ........</p>}>

                <Carts ticketPromise = {ticketPromise}
                        handleAddTask = {handleAddTask}>
                </Carts>

            </Suspense>
            
            <TaskStatus

                tasks = {tasks}
                handleCompleteTask = {handleCompleteTask}>

            </TaskStatus>
        </div>
    );
};

export default Main;