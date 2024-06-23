// Api Import
import getProjects from '../../api/GET/getProjects';

// Providers Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Components Import
import HomeSlideShow from './HomeSlideShow';

// Default Function
export default function HomeProjectLab() {
  return (
    <BoxThemeProvider
      className={'my-4'}
      children={ 
        <div className='w-full h-fit'>
          <HomeSlideShow
            title={'project lab'}
            heading={'explore more'}
            path={'/project/lab'}
            imgPath={'/project/lab'}
            query_key={'projectLab'}
            query_func={getProjects}
            params={{ limit: 1, isLab: 'true' }}
          />
        </div>
      }
    />
  )
}
