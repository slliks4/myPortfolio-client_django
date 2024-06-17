// React Router Dom
import { NavLink } from "react-router-dom";

// Icons Import
import{
  CloseIcon
} from "../../../imports/Icons";

// Context Import
import useAppContext from '../../../hooks/useAppContext';

// Default Funtion
export default function SideMenu() {
  const { dispatch } = useAppContext();

  return (
    <div className="fixed overflow-hidden w-screen h-screen z-30  flex">
      <div 
        className="w-[calc(100%-90%)] bg-gray-950 opacity-75" 
        onClick={()=> dispatch({type:'SET_SHOW_SIDE_MENU', payload:false})}
      />
      <div className="bg-gray-900 relative w-[calc(100%-10%)] shadow-2xl h-screen overflow-y-scroll no-scrollbar">
        <button 
          onClick={()=> dispatch({type:'SET_SHOW_SIDE_MENU', payload:false})}
        >
          <CloseIcon />
        </button>
        <br />
        <NavLink to={'/'} onClick={()=> dispatch({type:'SET_SHOW_SIDE_MENU', payload:false})}>Home</NavLink>
        <br /><br />
        <NavLink to={'/about'} onClick={()=> dispatch({type:'SET_SHOW_SIDE_MENU', payload:false})}>about</NavLink>
      </div>
    </div>
  )
}
