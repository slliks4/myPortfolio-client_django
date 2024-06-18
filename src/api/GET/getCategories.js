// Services Import
import apiGet from "../../services/apiGet";

// Default Function
export default function getCategories() {
    const endpoint = '/api/getCategories/';
    
    return apiGet({ endpoint });
}
