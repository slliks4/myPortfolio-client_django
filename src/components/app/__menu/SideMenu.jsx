// React Router Dom
import { NavLink } from "react-router-dom";

// Library Imports
import { motion } from '../../../imports/Library';

// Icons Import
import{
  AboutNavIcon, HomeNavIcon, BlogsNavIcon, ProjectsNavIcon, ContactNavIcon
} from "../../../imports/Icons";

// Hooks Import
import useAppContext from '../../../hooks/useAppContext';

// Default Funtion
export default function SideMenu() {
  const { dispatch } = useAppContext();
  const menuLinks = [
    { name:'Home', icon: <HomeNavIcon />, path:'/' },
    { name: 'About', icon: <AboutNavIcon />, path:'/about/profile' },
    { name: 'projects', icon: <ProjectsNavIcon />, path:'/project/portfolio' },
    { name: 'blog', icon: <BlogsNavIcon />, path:'/blog' },
    { name: 'Let\'s talk', icon: <ContactNavIcon />, path: '/contact' },
  ];

  const handleClick = () => {
    dispatch({type:'SET_SHOW_SIDE_MENU', payload:false});
  };

  return (
    <motion.div 
      className="fixed overflow-hidden w-screen h-screen z-30 flex"
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity:1, x:0 }}
      transition={{ duration:0.2 }}
    >
      <div 
        className="w-[calc(100%-90%)] bg-gray-950 opacity-75" 
        onClick={()=> handleClick()}
      />
      <div className="bg-gray-900 p-4 relative w-[calc(100%-10%)] shadow-2xl h-screen overflow-y-scroll no-scrollbar flex flex-col">
        { menuLinks.map((menuLink, index)=>(
          <NavLink 
            to={menuLink.path} 
            key={index}
            onClick={()=>handleClick()}
            className={({ isActive }) => 
              `my-4 capitalize p-2 text-lg flex items-center ${isActive ? 'border-b-4 border-primary rounded-bl-md rounded-br-md' : 'border-b border-secondary'}`
            }
          >
            <span className="mr-3">
              { menuLink.icon }
            </span>
            <h3>{ menuLink.name }</h3>
          </NavLink>
        )) }
      </div>
    </motion.div>
  )
}
