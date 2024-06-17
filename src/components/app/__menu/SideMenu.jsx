// React Router Dom
import { NavLink } from "react-router-dom";

// Icons Import
import{
  CloseIcon
} from "../../../imports/Icons";


// Default Funtion
export default function SideMenu({ setShowSideMenu }) {
  return (
    <div className="fixed overflow-hidden w-screen h-screen z-30  flex">
      <div 
        className="w-[calc(100%-90%)] bg-gray-950 opacity-75" 
        onClick={()=> setShowSideMenu(false)}
      />
      <div className="bg-gray-900 relative w-[calc(100%-10%)] shadow-2xl h-screen overflow-y-scroll no-scrollbar">
        <button 
          onClick={()=> setShowSideMenu(false)}
        >
          <CloseIcon />
        </button>
        <br />
        <NavLink to={'/'} onClick={()=> setShowSideMenu(false)}>Home</NavLink>
        <br /><br />
        <NavLink to={'/about'} onClick={()=> setShowSideMenu(false)}>about</NavLink>
      </div>
    </div>
  )
}
