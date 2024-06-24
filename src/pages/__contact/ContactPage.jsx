// Style Import
import './scss/ContactPage.scss';

// Hooks Import
import useQueryGet from '../../hooks/useQueryGet';

// Api Import
import getProfile from '../../api/GET/getProfile';

// Components Import
import AppLoading from '../../components/app/update/AppLoading';
import AppError from '../../components/app/error/AppError';
import ContactPageBody from '../../components/__contact/ContactPageBody';

// Default Function
export default function ContactPage() {
    const query_key = "profile";
    const params = { username: 'slliks4' };

    const { data:profile, isLoading, error } = useQueryGet({
        query_key, query_func:getProfile, params
    });

    return (
        <>
            { isLoading && <AppLoading /> }
            { error && <AppError errMessage='failed to load profile' />  }
            { profile && <ContactPageBody profile={profile} /> }
        </>

    )
}
