import React, { use } from 'react';
import dateIcon from '../../assets/dateIcon.png'

const Carts = ({ticketPromise}) => {
    const ticketsData = use (ticketPromise);
    // console.log (ticketsData);
    // ticketsData.map (ticket => console.log (ticket.lenth));
    return (
        <div className='w-3/4  pt-5'>
            <h1 className='ml-3 text-2xl mb-3'>Customer Tickets</h1>

            <div className='grid grid-cols-2'>
                {
                    ticketsData.map (ticket => 
                        <div className='bg-white m-3 p-5 rounded-xl '>
                            <div className='flex justify-between items-center'>
                                <p className='font-bold'>Login Issues - Can't Access Account</p>
                                <button className='btn bg-[lightgreen] py-3 rounded-2xl'>Open</button>
                            </div>
                            <p className='my-10'>
                                Customer is unable to log in to their account. They've tried resetting their password multiple times but still...
                            </p>
                            <div className='flex justify-between'>
                                <span>ID # 1001</span>
                                <span>HIGH PRIORITY</span>
                                <span>John Smith</span>
                                <span className='flex'>
                                    <img src = {dateIcon} alt="" /> 
                                    <span>1/15/2024</span>
                                </span>                    
                            </div>
                        </div>  
                    )
                }
            </div>

                                  
        </div>
        
    );
};

export default Carts;