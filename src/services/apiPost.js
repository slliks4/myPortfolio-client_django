// Config Imports
import { baseUrl } from '../config/env';

// Default Function
export default async function apiPost({ endpoint="", data={} }) {
    const url = baseUrl+endpoint;

    const response = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    });

    if (!response.ok){
        const resObject = await response.json();
        throw new Error (`Error : ${resObject.message}`);
    }

    return await response.json();
}
