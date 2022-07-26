import { API_ROUTES } from "./constants";

/**
 * @name storeTokenInLocalStorage
 * @param {*} token 
 */
export const storeTokenInLocalStorage = (token) => {
    localStorage.setItem('token', token);
}


export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
}

export const getAuthenticatedUser = async () => {
    const defaulUserObject = { authenticated: false, user: null };

    try {
        const token = getTokenFromLocalStorage()
        if (!token) {
            return defaulUserObject;
        }

        const response = await $fetch(API_ROUTES.GET_USER, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const { authenticated = true  } = response
        return authenticated ? response.data : false
    }
    catch (error) {
        console.log('error', error)
        return defaulUserObject;
    }
}