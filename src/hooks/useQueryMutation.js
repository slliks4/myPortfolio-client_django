// Library Import
import { useMutation, useQueryClient } from "../imports/Library";

export default function useQueryMutation({ mutation_func=null, query_key=null }) {
    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation({
        mutationFn: mutation_func,
        onSuccess: ()=> { 
            if (query_key) {
                queryClient.invalidateQueries([query_key]);
            }
        }
    });

    return { mutateAsync }
}
