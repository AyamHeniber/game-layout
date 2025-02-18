import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import TopBar from './TopBar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col bg-amber-900">
      <Header />
      <TopBar/>
      <div className="flex flex-1 mt-[120px] md:mt-[130px]">
        <Sidebar />
        <main className="flex-1 ml-16">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
