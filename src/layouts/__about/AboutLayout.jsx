// React Router Dom Import
import { Outlet } from 'react-router-dom';

// Api Import
import getProfile from '../../api/GET/getProfile';

// Hooks Import
import useQueryGet from '../../hooks/useQueryGet';

// Components Import
import BreadCrumps from '../../components/BreadCrumps';
import AppLoading from '../../components/update/AppLoading';
import AppError from '../../components/error/AppError';

export default function AboutLayout() {
    const query_key = "profile";
    const params = {
        username: 'slliks4'
    }

    // Fetch Profile by username
    const { data:profile, isLoading, error } = useQueryGet({ query_key:query_key, query_func:getProfile, params:params });
    
    return (
        <>
            { isLoading && <AppLoading /> }
            { error && <AppError errMessage={error.message} /> }
            { profile && (
                <>
                    <BreadCrumps />
                    <Outlet context={{profile}} />
                </>
            )}
        </>
    )
}
