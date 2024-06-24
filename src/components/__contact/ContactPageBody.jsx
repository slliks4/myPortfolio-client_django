// React Router Import
import { Link } from 'react-router-dom';

// Utils Import
import socialLinks from '../../utils/socialLinks';

// Providers Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Components Import
import FeedBack from '../../components/__contact/FeedBack'
import Email from '../../components/__contact/Email';
import Tel from '../../components/__contact/Tel';
import Address from '../../components/__contact/Address';

// Default Function
export default function ContactPageBody({ profile }) {
    const links = socialLinks();

    return (
        <BoxThemeProvider 
            className={'break-words'}
            children={
                <div className='w-full h-fit flex flex-col contact-page py-6'>
                    <FeedBack />
                    <div className='flex flex-col mt-6'>
                        <h3>contact info</h3>
                        <div className='contact-info flex flex-col'>
                            <Email email={profile.data.email} />
                            <Tel tel={profile.data.tel} />
                            <Address address={profile.data.address} />
                        </div>
                        <h3>Social info</h3>
                        <div className='flex '>
                            { links.map((link,index)=>(
                                <Link key={index} to={link.path} className='text-2xl p-4 rounded-md bg-secondary text-white shadow-md mr-2'> { link.icon } </Link>
                            )) }
                        </div>
                    </div>
                </div>
            }
        />
    )
}
