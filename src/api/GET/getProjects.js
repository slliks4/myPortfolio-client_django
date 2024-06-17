// Services Import
import apiGet from "../../services/apiGet";

// Default Function
export default function getProjects({ limit=null, skip=null, isLab=null, category=null }) {
    // Endpoint
    const endpoint = "/api/getProjects?";

    // Conditionally included parameter
    const params = [
        limit ? `limit=${limit}` : '',
        skip ? `skip=${skip}` : '',
        isLab ? `is_lab=${isLab}` : '',
        category ? `category=${category}` : ''
    ].filter(Boolean).join('&'); // removes any empty strings from the array and  concatenates the array elements with &

    return apiGet({ endpoint, params });
}
