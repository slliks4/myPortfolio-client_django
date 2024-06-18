// Library Import
import { useInfiniteQuery } from "../imports/Library";

// Default Function
export default function useQueryPagination({ query_key = "", query_func = null, params = "", page }) {
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [query_key, params],
    queryFn: ({ pageParam = page }) => query_func(`${params}&page=${pageParam}`),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages.length;
      if (currentPage * limit < lastPage.totalItems) {
        return currentPage + 1;
      } else {
        return undefined;
      }
    },
    enabled: (params) => {
      const currentParams = new URLSearchParams(params);
      const page = currentParams.get('page') || 1;
      const totalItems = data?.pages[0]?.totalItems || 0;
      return page <= totalItems;
    },
    staleTime: Infinity,
  });

  return { data, fetchNextPage, isFetchingNextPage, hasNextPage };
}
