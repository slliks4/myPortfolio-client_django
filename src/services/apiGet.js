// Config Import
import { baseUrl } from "../config/env";

// Default Function
const apiGet = async ({ endpoint="", params="" }) => {
    const url = baseUrl + endpoint + params;
    const response = await fetch(url);

    if (!response.ok) {
        const resObject = await response.json();
        throw new Error(`Error: ${resObject.message}`);
    }

    return await response.json();
}

export default apiGet;