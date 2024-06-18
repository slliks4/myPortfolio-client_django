// React Import
import { useCallback, useEffect, useState } from 'react'

// Hooks Import
import useQueryPagination from '../../hooks/useQueryPagination';

// Layouts Import
import DataLayout1 from '../../layouts/__DataLayout1/DataLayout1';
import DataLayout1Error from '../../layouts/__DataLayout1/DataLayout1Error';
import DataLayout1Loading from '../../layouts/__DataLayout1/DataLayout1Loading';

// Default Function
export default function HomeSlideShow({ query_func, query_key, params, title, heading, path, imgPath }) {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const { data, isFetchingNextPage, hasNextPage, status, error, isFetchNextPageError, fetchNextPage } = useQueryPagination({ query_key:query_key, query_func:query_func, params:params });

  const handleLoadNext = useCallback(() => {
    if (data && currentIndex < data.pages.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }else if (hasNextPage) {
      fetchNextPage();
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
    // console.log('Call back func being called');
  }, [data, currentIndex, hasNextPage, fetchNextPage]); // Memoize handleLoadNext with its dependencies

  useEffect(() => {
    if(!data){ return }
    // Checks if the legnth of the data === 1
    if( data && !hasNextPage && data.pages[currentIndex].totalData === 1 ){
      // console.log('abort slideshow');
      return;
    }
    const interval = setInterval(() => {
        handleLoadNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [data, currentIndex, handleLoadNext, hasNextPage]);

  return (
    <div className='w-full'>
      { ( status === 'pending' || isFetchingNextPage ) && <DataLayout1Loading /> }
      { ( error || isFetchNextPageError ) && <DataLayout1Error error={error.message} /> }
      { data && !isFetchingNextPage && (
        <DataLayout1 title={title} heading={heading} image={data.pages[currentIndex].data[0].image} isFetched={true} path={path} imgPath={`${imgPath}/${data.pages[currentIndex].data[0].id}`} />
      )}
    </div>
  )
}
