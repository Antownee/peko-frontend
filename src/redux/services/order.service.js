import { authHeader } from '../helpers';
const config = {
    apiUrl: 'http://localhost:4895'
}

export const orderService = {
    addOrder,
    getAllByUser,
    getAll
};


function addOrder(order) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    };

    return fetch(`${config.apiUrl}/users/order-request`, requestOptions)
        .then(handleResponse)
        .then(msg => { return msg })
}


function getAllByUser(user) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/order-request/all`, requestOptions)
        .then(handleResponse)
        .then(msg => { return msg })
}

function getAll() {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader() }
    };

    return fetch(`${config.apiUrl}/admin/order/all`, requestOptions)
        .then(handleResponse)
        .then(msg => { return msg })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}