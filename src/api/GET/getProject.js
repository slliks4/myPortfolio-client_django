// Services Import
import apiGet from "../../services/apiGet";

// Default Function
export default function getProject({ project_id }) {
    const endpoint = '/api/getProject/';
    const params = `${project_id}/`;

    return apiGet({ endpoint, params });
}
