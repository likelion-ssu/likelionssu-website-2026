import React, { useState } from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sidebar/SideBar';
import Footer from '../components/footer/Footer';

export default function PartPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className='bg-line min-h-screen relative'>
      <Header onMenuClick={toggleSidebar} />
      
      <div className='h-[20rem]'>PartPage</div>
      <div className='h-[20rem]'>PartPage</div>
      <div className='h-[20rem]'>PartPage</div>
      <Footer/>

      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
