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

  const handleClick = () => {
    dispatch({type:'SET_SHOW_SIDE_MENU', payload:false});
  };

  return (
    <div className="fixed overflow-hidden w-screen h-screen z-30  flex">
      <div 
        className="w-[calc(100%-90%)] bg-gray-950 opacity-75" 
        onClick={()=> ()=> handleClick()}
      />
      <div className="bg-gray-900 p-4 relative w-[calc(100%-10%)] shadow-2xl h-screen overflow-y-scroll no-scrollbar">
        <button 
          onClick={()=> handleClick()}
        >
          <CloseIcon />
        </button>
        <br />
        <NavLink to={'/'} onClick={()=> handleClick()}>Home</NavLink>
        <br /><br />
        <NavLink to={'/about/profile'} onClick={()=> handleClick()}>about</NavLink>
        <br /><br />
        <NavLink to={'/project'} onClick={()=> handleClick()}>project</NavLink>
      </div>
    </div>
  )
}
