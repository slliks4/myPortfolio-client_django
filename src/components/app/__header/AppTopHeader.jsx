// Component Imports
import MenuBtn from "../../MenuBtn";

// Default Function
export default function AppTopHeader({ showSideMenu, setShowSideMenu }) {
  return (
    <header className="p-4 flex justify-between items-center text-4xl w-screen fixed z-10 bg-blur lg:hidden">
        <h1 className="pr-1 ">
            <span className="text-primary font-semibold">S</span>lliks<span className=''>4</span>
        </h1>
        <MenuBtn showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
    </header>
  )
}
