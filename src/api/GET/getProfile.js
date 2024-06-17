// Services Import
import apiGet from "../../services/apiGet";

// Default Function
const getProfile = async ({ params }) => {
    const endpoint = "/api/getProfile";
    return apiGet({ endpoint, params });
};

export default getProfile;