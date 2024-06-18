// Library Imports
import { useQuery } from "../imports/Library";

// Services Imports
import apiGet from "../services/apiGet";

// Default Funtion
const useValidateServer = () => {
    const { isLoading, error } = useQuery({
        queryFn: () => apiGet({ endpoint:"/api" }),
        queryKey: ['validateServer'],
        refetchInterval: 300000
    });

    return { isLoading, error };
};

export default useValidateServer;