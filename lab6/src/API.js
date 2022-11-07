import axios from "axios";

async function baseRequest({ urlPath = '', method = 'GET' }){
    let props = {
        method: method,
        url: 'http://127.0.0.1:5000/' + urlPath,
    }
    return axios(props);
}

export async function getToys(sortBy = null, sortOrder = null){
    if(sortOrder && sortOrder !== 'Sorting order' && sortBy && sortBy !== 'Sort by'){
        return await baseRequest({urlPath: `/${sortBy}/${sortOrder}`})}
    else {return await baseRequest({})}
}