// Library Import
import { useQuery } from "../imports/Library";

// Default Function
export default function useQueryGet({ query_key = "", query_func = null, params = "" }) {
  const { data, isLoading, error } = useQuery({
    queryKey: [query_key, params],
    enabled: !!query_func,
    staleTime: Infinity,
    queryFn: () => query_func({ params })
  });

  return { data, isLoading, error };
}
