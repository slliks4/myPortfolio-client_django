// Services Import
import apiGet from "../../services/apiGet";

// Default Function
export default function getBlogs({ pageParam, category, limit}) {
    // Endpoint
    const endpoint = "/api/getBlogs/?";

    // Conditionally included parameter and removes any empty strings from the array and  concatenates the array elements with &
    const params = [
        limit ? `limit=${limit}` : '',
        pageParam ? `page=${pageParam}` : '',
        category ? `category=${category}` : ''
    ].filter(Boolean).join('&'); 

    return apiGet({ endpoint, params });
}