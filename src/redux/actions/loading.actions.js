import { loadingConstants } from '../constants/index';

export const loadingActions = {
    toggleLoad,
    error
};

function toggleLoad(message) {
    return { type: loadingConstants.SUCCESS, message };
}

function error(message) {
    return { type: "LOGIN_ERROR", message };
}