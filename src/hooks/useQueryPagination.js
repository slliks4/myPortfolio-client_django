// Library Import
import { useInfiniteQuery } from "../imports/Library";

// Default Function
export default function useQueryPagination({ query_key="", query_func=null, params={} } = {}) {
    // TODO: Set up query Pagination for paginated query
    useInfiniteQuery({
        queryKey: [query_key, params],
        enabled: !!query_func,
        staleTime: Infinity,
        queryFn: () => query_func({ ...params })
    });
    
    return (
      <div>QueryPagination</div>
    )
}
