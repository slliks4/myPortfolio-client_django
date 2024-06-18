// Services Import
import apiGet from "../../services/apiGet";

// Default Function
const getProfile = async ({ username }) => {
    const endpoint = "/api/getProfile/";
    const params = [
        username ? `${username}` : ''
    ].filter(Boolean).join('&'); 
    
    return apiGet({ endpoint, params });
};

export default getProfile;