// React Import
import React from 'react';

// React Router Dom import
import { Outlet } from 'react-router-dom';

// Hooks Import
import useQueryGet from '../../hooks/useQueryGet';

// Api Import
import getCategories from '../../api/GET/getCategories';

// Components Import
import AppLoading from '../../components/app/update/AppLoading';
import AppError from '../../components/app/error/AppError';
import NavHeader from '../../components/NavHeader';

// Default Function
export default function ProjectLayout() {
  const query_key = 'categories';
  const { data:categories, isLoading, error } = useQueryGet({ query_func:getCategories, query_key:query_key });
  
  return (
    <>
      { isLoading && <AppLoading /> }
      { error && <AppError errMessage={ error.message } /> }
      { categories && (
        <>
          <NavHeader params={[
            { path:'/project/portfolio', name:'portfolio' },
            { path:'/project/lab', name:'lab' }
          ]} />
          <Outlet context={{ categories }} />
        </>
      )}
    </>
  )
}
