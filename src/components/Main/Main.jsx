import React, { Suspense } from 'react';
import Carts from '../Carts/Carts';
import TaskStatus from '../TaskStatus/TaskStatus';

const fetchTickets = async () => {
    const res = await fetch ("/tickets.json")
    return res.json ()
}

const Main = () => {
    const ticketPromise = fetchTickets ();
    return (
        <div className='flex max-w-7xl mx-auto my-10 py-10 bg-gray-300'>
            
            <Suspense fallback = {<p>Tickets loading ........</p>}>
                <Carts ticketPromise = {ticketPromise}></Carts>
            </Suspense>
            <TaskStatus></TaskStatus>
        </div>
    );
};

export default Main;