// React Import
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

// Hooks Import
import useQueryPagination from '../../hooks/useQueryPagination'

// Component Import
import BuildProject from './BuildProject';

// Api Import
import getProjects from '../../api/GET/getProjects';

// Layouts Import
import DataLayout2Error from '../../layouts/__DataLayout2/DataLayout2Error';
import DataLayout2Loading from '../../layouts/__DataLayout2/DataLayout2Loading';

// Default Function
export default function Project({ params, query_key }) {
    const { data, isFetchNextPageError, isFetchingNextPage, fetchNextPage, error, status, hasNextPage } = useQueryPagination({ params, query_key, query_func:getProjects });

    const { ref, inView } = useInView();

    useEffect(()=>{
      if(inView){
        fetchNextPage();
      }
    }, [fetchNextPage, inView]);

    return (
        <div className='mt-2 w-full'>
            { ( status === 'pending' || isFetchingNextPage ) && <div className='w-full h-fit flex flex-col'><DataLayout2Loading image={true} title={true} /></div> }
            { ( status === 'error' || error || isFetchNextPageError ) && <DataLayout2Error errMessage={"Could not fetch " + query_key} /> }
            { data && <BuildProject data={data}/>}

            {/* Fetch next page inview */}
            { (!isFetchingNextPage && status !== 'pending' && hasNextPage) && (
              <div ref={ref}>{ isFetchingNextPage && <div className='w-full h-fit flex flex-col'><DataLayout2Loading image={true} title={true} /></div> }</div>
            )}
        </div>
    )
}
