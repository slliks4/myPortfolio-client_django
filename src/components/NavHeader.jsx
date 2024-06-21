import { NavLink } from "react-router-dom";
import BoxThemeProvider from "../providers/BoxThemeProvider";

// Default Function
export default function NavHeader({ params }) {
  const getActiveClass = (isActive) => isActive ? 'active-link' : '';

  return (
    <BoxThemeProvider children={
      <div className='w-full h-fit text-lg capitalize text-secondary font-bold top-nav'>
        { params?.map((param, index) => (
          <NavLink to={param.path} key={index} className={({ isActive }) => getActiveClass(isActive)}>{param.name} / </NavLink>
        )) }
      </div>
    } className={'my-4'} />
  )
}

