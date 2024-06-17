// Library Import
import { useMutation, useQueryClient } from "../imports/Library";

export default function useQueryMutation({ mutation_func=null, query_key="" }) {
    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation({
        mutationFn: mutation_func,
        onSuccess: ()=> { 
            queryClient.invalidateQueries([`${query_key}`]);
        }
    });

    return { mutateAsync }
}
