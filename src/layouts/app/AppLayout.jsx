// React Imports
import { useEffect, useState } from "react";

// React router dom imports
import { Outlet } from "react-router-dom";

// Component Imports
import AppTopHeader from "../../components/app/__header/AppTopHeader";
import AppFooter from '../../components/app/__footer/AppFooter';
import AppSideHeader from "../../components/app/__header/AppSideHeader";
import ScrollTopBtn from "../../components/ScrollTopBtn";
import SideMenu from '../../components/app/__menu/SideMenu';

// Default function
export default function AppLayout() {
  const [ showSideMenu, setShowSideMenu ] = useState(false);
  
  useEffect(() => {
    if (showSideMenu) {
      document.body.classList.add('side-menu');
    } else {
      document.body.classList.remove('side-menu');
    }
    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove('side-menu');
    };
  }, [showSideMenu]);

  return (
    <div className="relative w-screen overflow-y-scroll no-scrollbar overflow-x-hidden App">
      { showSideMenu && <SideMenu setShowSideMenu={setShowSideMenu} /> }
      { !showSideMenu && <AppTopHeader showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} /> }
      <AppSideHeader />
      <section className="w-screen min-h-svh max-h-fit pt-20 pb-6 px-3 flex flex-col lg:w-[calc(100vw-20vw)] lg:ml-[calc(100vw-80vw)]">
        <Outlet />
      </section>
      <ScrollTopBtn />
      <AppFooter />
    </div>
  )
}
