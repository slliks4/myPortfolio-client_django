// React Import
import React from 'react';

// React Router Dom import
import { NavLink, Outlet } from 'react-router-dom';

// Components Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

export default function ProjectLayout() {
  return (
    <>
        <BoxThemeProvider children={
            <div className=''>
                <NavLink to={''}>Portfolio</NavLink> ||
                <NavLink to={'lab'}> Lab </NavLink>
            </div>
        } className={'w-full my-4'}/>
        <Outlet />
    </>
  )
}
