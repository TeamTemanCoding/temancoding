import React, { useState } from 'react';
import { User, CreditCard, List } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Divider } from '@heroui/react';

const SidebarUser = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden relative">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`
    fixed md:relative z-40 h-full w-64 bg-gray-900 text-white flex flex-col p-4 shadow-lg
    transform transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
    md:translate-x-0 md:block
  `}
      >
        <div className="my-2">
          <Image src="/images/logo.svg" alt="logo" width={110} height={110} />
        </div>
        <Divider className="bg-white w-full my-5" />
        <nav className="flex flex-col justify-between h-full space-y-4 *:text-[14px]">
          <div>
            <Link
              href="#profile"
              className="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded"
            >
              <User size={24} />
              <span>Profile</span>
            </Link>
            <Link
              href="#transaction"
              className="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded"
            >
              <CreditCard size={24} />
              <span>Transaction</span>
            </Link>
          </div>
          <Button color='danger' radius='sm'>Logout</Button>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col h-full">
        <header className="bg-gray-800 text-white flex items-center justify-between p-4 shadow-md">
          <div className="flex items-center space-x-4 ml-4">
            <button onClick={toggleSidebar} className="md:hidden">
              <List size={28} />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SidebarUser;
