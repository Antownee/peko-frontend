import { authHeader } from '../helpers';
const config = {
    apiUrl: 'http://localhost:4895'
}

export const orderService = {
    addOrder,
    getAllOrders,
    confirmOrder,
    uploadDocuments,
    addTeaAssets,
    addEmailAssets,
    populateAdminDashboard
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


function getAllOrders(user) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    if (user.role === "Admin") {
        return fetch(`${config.apiUrl}/admin/order/all`, requestOptions)
            .then(handleResponse)
            .then(msg => { return msg })
    } else {

        return fetch(`${config.apiUrl}/users/order-request/all`, requestOptions)
            .then(handleResponse)
            .then(msg => { return msg })
    }
}


function confirmOrder(order) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    };

    return fetch(`${config.apiUrl}/admin/order/confirm`, requestOptions)
        .then(handleResponse)
        .then((msg) => { return msg })
}

function uploadDocuments(documents, orderid) {
    const formData = new FormData();
    formData.append('orderID', orderid);
    for (var x = 0; x < documents.length; x++) {
        formData.append('file', documents[x].document, orderid + "_" + documents[x].id)
    }

    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader() },
        body: formData
    };

    return fetch(`${config.apiUrl}/admin/order/documents`, requestOptions)
        .then(handleResponse)
}

function addTeaAssets(tea) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(tea)
    };

    return fetch(`${config.apiUrl}/admin/asset/tea`, requestOptions)
        .then(handleResponse)
        .then(msg => { return msg })
}

function addEmailAssets(email) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(email)
    };

    return fetch(`${config.apiUrl}/admin/asset/email`, requestOptions)
        .then(handleResponse)
        .then(msg => { return msg })
}

function populateAdminDashboard(user){
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/admin/asset/dashboard`, requestOptions)
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