// Library Import
import { useInfiniteQuery } from "../imports/Library";

// Default Function
export default function useQueryPagination({ query_key = "", query_func = null, params = {} }) {
  const { data, status, error, fetchNextPage, hasNextPage, isFetchingNextPage, isFetchNextPageError } = useInfiniteQuery({
    queryKey: [query_key, params],
    queryFn: ({ pageParam }) => { return query_func({ ...params, pageParam }) },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: Infinity,
  });

  return { data, status, error, fetchNextPage, hasNextPage, isFetchingNextPage, isFetchNextPageError }
}
