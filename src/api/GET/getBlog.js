// Services Import
import apiGet from "../../services/apiGet";

// Default Function
export default function getBlog({ blog_id }) {
    const endpoint = '/api/getBlog/';
    const params = `${ blog_id }/`;

    return apiGet({ endpoint, params });
}
