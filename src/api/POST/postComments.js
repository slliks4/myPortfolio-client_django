// Services Import
import apiPost from "../../services/apiPost";

// Default Function
export default function postComments({ data={} }) {
    const endpoint = '/api/postComments';
    
    return apiPost({ endpoint, data });
}
