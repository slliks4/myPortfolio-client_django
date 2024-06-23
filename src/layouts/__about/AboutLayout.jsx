// React Router Dom Import
import { Outlet } from 'react-router-dom';

// Api Import
import getProfile from '../../api/GET/getProfile';

// Hooks Import
import useQueryGet from '../../hooks/useQueryGet';

// Components Import
import AppLoading from '../../components/app/update/AppLoading';
import AppError from '../../components/app/error/AppError';
import NavHeader from '../../components/NavHeader';

// Style Import
import '../../pages/__about/scss/About.scss';

// Default Function
export default function AboutLayout() {
    const query_key = "profile";
    const params = { username: 'slliks4' };

    // Fetch Profile by username
    const { data:profile, isLoading, error } = useQueryGet({ 
        query_key:query_key, 
        query_func:getProfile, 
        params:params 
    });
    
    return (
        <>
            { isLoading && <AppLoading /> }
            { error && <AppError errMessage={error.message} /> }
            { profile && (
                <>
                    <NavHeader params={[
                        { path:'/about/profile', name:'profile' },
                        { path:'/about/credentials', name:'credentials' }
                    ]} />
                    <Outlet context={{profile}} />
                </>
            )}
        </>
    )
}
