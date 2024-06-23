// Api Import
import getProjects from '../../api/GET/getProjects';

// Providers Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Components Import
import HomeSlideShow from './HomeSlideShow';

// Default Function
export default function HomeProjectPortfolio() {
  return (
    <BoxThemeProvider
      children={
        <div className='w-full h-fit'>
          <HomeSlideShow
            title={'project portfolio'}
            heading={'explore more'}
            path={'/project/portfolio'}
            imgPath={'/project/portfolio'}
            query_key={'projectPortfolio'}
            query_func={getProjects}
            params={{ limit: 1, isLab:'false' }}
          /> 
        </div>
      }
    />
  )
}
