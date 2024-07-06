'use client'

import React, { useState } from 'react';
import { MenuIcon, OrdersIcon, BackIcon, ManageMenu, OngoingOrders, StorageIcon, Laporan } from '@/components/icons';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = [
    { icon: <MenuIcon />, text: 'Menu' },
    { icon: <OrdersIcon />, text: 'Pesanan' },
    { icon: <OngoingOrders />, text: 'Pesanan Berlangsung' },
    { icon: <ManageMenu />, text: 'Manajemen Menu' },
    { icon: <StorageIcon />, text: 'Bahan Baku' },
    { icon: <Laporan />, text: 'Laporan' }
  ];

  return (
    <div className={`flex flex-col h-screen p-3 bg-white ${isExpanded ? 'w-72' : 'w-24'} transition-all duration-300 drop-shadow-md relative z-50`}>
      <button
        className={`mb-5 text-amber-950 hover:bg-red-100 hover:text-amber-900 transition-all duration-300 p-3.5 rounded-xl flex flex-col ${isExpanded ? 'items-start' : 'mx-auto'}`}
        onClick={toggleSidebar}
      >
        {isExpanded ? <BackIcon className='rotate-180' /> : <BackIcon />}
      </button>
      <div className="flex flex-col space-y-4 relative">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${isExpanded ? 'items-start px-3' : 'items-center'} text-amber-950 cursor-pointer hover:bg-red-100 hover:text-amber-900 transition-all duration-300 p-3 py-4 rounded-xl relative`}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className='flex'>
              <span className="text-2xl flex items-center">{item.icon}</span>
              {isExpanded && (
                <span className="ml-6 items-center justify-center flex text-start font-medium">
                  {item.text}
                </span>
              )}
            </div>
            {!isExpanded && (
              <div className={`absolute left-full top-1/2 transform -translate-y-1/2 bg-amber-900 text-white shadow-md p-2 px-4 rounded ml-2 z-50 transition-all duration-300 ${hoveredItem === index ? 'opacity-100' : 'opacity-0'}`}>
                {item.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
