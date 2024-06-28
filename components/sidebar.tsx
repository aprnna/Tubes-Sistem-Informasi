import React, { useState } from 'react';
import {MenuIcon, OrdersIcon, BackIcon, ManageMenu,OngoingOrders, StorageIcon} from '@/components/icons';


const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = [
    // { icon: <Logo/>, text: 'Home' },
    { icon: <MenuIcon/>, text: 'Menu' },
    { icon: <OrdersIcon/>, text: 'Pesanan' },
    { icon: <OngoingOrders/>, text: 'Pesanan Berlangsung' },
    { icon: <ManageMenu/>, text: 'Manajemen Menu' },
    { icon: <StorageIcon/>, text: 'Bahan Baku' },
  ];

  return (
    <div className={`flex flex-col h-screen p-3 bg-white ${isExpanded ? 'w-64' : 'w-24'} transition-all duration-300 shadow-2xl`}>
      <button
        className={`mb-5 text-amber-950 hover:bg-orange-100 hover:text-amber-900 transition-all duration-300 p-3.5 rounded-xl flex flex-col ${isExpanded? 'items-start' :'mx-auto'}`}
        onClick={toggleSidebar}
      >
        {isExpanded ?  <BackIcon className='rotate-180'/> : <BackIcon/>}
        {/* {isExpanded ? 'Collapse' : 'Expand'} */}
      </button>
      <div className="flex flex-col space-y-4">
        {menuItems.map((item, index) => (
          <div key={index} className={`flex flex-col ${isExpanded? 'items-start px-3':'items-center'} text-amber-950 cursor-pointer hover:bg-orange-100 hover:text-amber-900 transition-all duration-300 p-3 rounded-xl`}>
            <div className='flex'>
                <span className="text-2xl flex items-center ">{item.icon}</span>
                {isExpanded && <span className="ml-6 items-center justify-center flex text-start font-medium">{item.text}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
