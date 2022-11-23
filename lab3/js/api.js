const BASE_URL = 'http://127.0.0.1:5000'

const baseRequest = async ({ urlPath = '', method = 'GET', body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if (body) {
            reqParams.body = JSON.stringify(body)
        }
        return await fetch(`${BASE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.log('Oops, error has occured');
    }
}

export const getCats = async () => {
    const rawRes = await baseRequest({ method: 'GET' });
    return rawRes.json();
}

export const postCat = async (body) => {
    const rawRes = await baseRequest({ urlPath: `/${body.title}/${body.weight}`, method: 'POST', body });
    return rawRes.json();
}

export const editCat = async (body) => {
    const rawRes = await baseRequest({ urlPath: `/${body.id}/${body.title}/${body.weight}`, method: 'PUT', body });
    return rawRes.json();
}

export const deleteCat = async (body) => {
    const rawRes = await baseRequest({ urlPath: `/${body.id}`, method: 'DELETE', body });
    return rawRes.json();
}