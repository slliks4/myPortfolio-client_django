// Services Import
import apiGet from "../../services/apiGet";

// Default Function
export default function getBlogs({ params }) {
    // Endpoint
    const endpoint = "/api/getBlogs?";

    // Conditionally included parameter
    // const params = [
    //     limit ? `limit=${limit}` : '',
    //     skip ? `skip=${skip}` : '',
    //     isLab ? `is_lab=${isLab}` : '',
    //     category ? `category=${category}` : ''
    // ].filter(Boolean).join('&'); // removes any empty strings from the array and  concatenates the array elements with &

    return apiGet({ endpoint });
}