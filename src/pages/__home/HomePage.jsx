// Style Import
import './scss/HomePage.scss';

// Images Import
import { credentialPic } from '../../imports/Images';

// Providers Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Components Import
import HomeProfile from '../../components/__home/HomeProfile';
import HomeShowCase from '../../components/__home/HomeShowCase';
import DataLayout1 from '../../layouts/__DataLayout1/DataLayout1';
import Contact from '../../components/Contact';
import HomeSlideShow from '../../components/__home/HomeSlideShow';

// Api Import
import getProjects from '../../api/GET/getProjects';
import getBlogs from '../../api/GET/getBlogs';

// Default Function
export default function HomePage() {
    return (
        <div className='flex flex-col'>
            <BoxThemeProvider children={ <HomeProfile /> } className={'mt-4'} />
            <BoxThemeProvider children={
                <div>
                    <small>
                        <p className='uppercase text-lg font-bold text-primary'>latest portfolio and lab</p>
                    </small>
                </div>
            } className={'my-4 text-center w-full'}/>
            <BoxThemeProvider children={ 
                <HomeSlideShow 
                    title={'project portfolio'}
                    heading={'explore more'}
                    path={'/project'}
                    imgPath={'/project/portfolio'}
                    query_key={'projectPortfolio'}
                    query_func={getProjects}
                    params={{
                        limit: 1,
                        isLab: 'false'
                    }}
                /> 
            }/>
            <BoxThemeProvider children={ 
                <HomeSlideShow 
                    title={'project lab'}
                    heading={'explore more'}
                    path={'/project'}
                    imgPath={'/project/lab'}
                    query_key={'projectLab'}
                    query_func={getProjects}
                    params={{
                        limit: 1,
                        isLab: 'true'
                    }}
                /> 
            } className={'mt-4'}/>
            <BoxThemeProvider children={
                <>
                    <HomeShowCase number={5} text='years experience' />
                    <HomeShowCase number={11} text='client worldwide' />
                    <HomeShowCase number={14} text='total projects' />
                </>
            } className='w-full flex flex-col my-4'/>
            <BoxThemeProvider children={ 
                <HomeSlideShow 
                    title={'blogs'}
                    heading={'explore more'}
                    path={'/blogs'}
                    imgPath={'/blogs'}
                    query_key={'blogs'}
                    query_func={getBlogs}
                    params={{
                        limit: 1,
                    }}
                /> 
            } />
            <BoxThemeProvider children={ 
                <div className='w-full h-fit data-layout1'>
                    <DataLayout1 title={'credentials'} heading={'more about me'} image={credentialPic} />
                </div>
            } className={'mt-4'} />
            <Contact />
        </div>
    )
}
