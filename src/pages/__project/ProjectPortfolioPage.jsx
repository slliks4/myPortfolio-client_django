// Components Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Api Import
import getProjects from '../../api/GET/getProjects';

// Hook Import
import useQueryPagination from '../../hooks/useQueryPagination';
import { useEffect, useState } from 'react';

// Default Function
export default function ProjectPortfolioPage() {
  const query_key = 'projectPortfolio';
  const params = [

  ];
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const { data, error, status, fetchNextPage, isFetchingNextPage, hasNextPage } = useQueryPagination({ query_func:getProjects, query_key:query_key, params:params })
  const handleNextPage = () => {
    if (data && currentPageIndex < data.pages.length - 1) {
      // Increment the current page index if there are more cached pages
      setCurrentPageIndex(currentPageIndex + 1);
    } else if (hasNextPage) {
      // Fetch the next page if available
      fetchNextPage();
      setCurrentPageIndex(currentPageIndex + 1);
    } else {
      // Reset to the first page if all pages have been fetched
      setCurrentPageIndex(0);
    }
  };
  // Update the current page index when new data is fetched
  useEffect(() => {
    if (data && currentPageIndex >= data.pages.length) {
      setCurrentPageIndex(0);
    }
  }, [data, currentPageIndex]);
  return (
    <BoxThemeProvider children={
      <div>
      {status === "pending" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <div>{error.message}</div>
      ) : (
        <div>
          {data && data.pages[currentPageIndex] && data.pages[currentPageIndex].data.map((project) => (
            <div key={project.id}>{project.title}</div>
          ))}
          { isFetchingNextPage && <h1>loading</h1> }
          <button onClick={handleNextPage} disabled={status === "loading"}>
            {hasNextPage || currentPageIndex < data.pages.length - 1 ? "Next" : "Restart"}
          </button>
        </div>
      )}
    </div>
    } className={'flex flex-col'} />
  )
}
