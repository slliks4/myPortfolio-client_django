// Services Import
import apiGet from "../../services/apiGet";

// Default Function
export default function getProjects({ pageParam, category, limit, isLab }) {
    // Endpoint
    const endpoint = "/api/getProjects/?";

    // Conditionally included parameter and removes any empty strings from the array and  concatenates the array elements with &
    const params = [
        limit ? `limit=${limit}` : '',
        pageParam ? `page=${pageParam}` : '',
        isLab ? `is_lab=${isLab}` : '',
        category ? `category=${category}` : ''
    ].filter(Boolean).join('&'); 

    return apiGet({ endpoint, params });
}
