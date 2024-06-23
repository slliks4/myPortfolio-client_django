// Providers Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Api Import
import getBlogs from '../../api/GET/getBlogs';

// Components Import
import HomeSlideShow from './HomeSlideShow';

// Default Function
export default function HomeBlog() {
  return (
    <BoxThemeProvider
      className={'my-4'}
      children={ 
        <HomeSlideShow
          title={'blogs'}
          heading={'explore more'}
          path={'/blogs'}
          imgPath={'/blogs'}
          query_key={'blogs'}
          query_func={getBlogs} 
          params={{ limit: 1 }} 
        /> 
      }
    />
  )
}
