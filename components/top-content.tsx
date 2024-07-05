'use client'

import React, { useState } from 'react';

const TopContent = () : JSX.Element =>{
    return(
        <div className='flex bg-amber-950 text-red-100 justify-between items-center py-2 px-8 ' >
            <div className='flex gap-5 items-center'>
                <button className='bg-orange-900 p-2 rounded-lg hover:bg-orange-600 transition-all duration-300'>
                    <img alt="" src="./arrow-left.svg"/>
                </button>
                <h1 className='text-lg'>Menu</h1>
            </div>
            <div className='flex gap-4 items-center'>
                <img alt="profile.png" className='max-h-12' src="./profile.png" />
                <div className='text-lg'>
                    <p className='text-red-300 font-bold'>Cashier</p>
                    <p>Rahmat Gunawan</p>
                </div>
            </div>
        </div>
    )

}

export default TopContent;