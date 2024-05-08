import createAuth0Client from '@auth0/auth0-spa-js';

let auth0Client = null;

async function initializeAuth0() {
    auth0Client = await createAuth0Client({
        domain: 'YOUR_AUTH0_DOMAIN',
        client_id: 'YOUR_AUTH0_CLIENT_ID',
        redirect_uri: window.location.origin,
        cacheLocation: 'localstorage'
    });
    return auth0Client;
}

async function login() {
    await auth0Client.loginWithRedirect();
}

async function handleCallback() {
    await auth0Client.handleRedirectCallback();
    window.history.replaceState({}, document.title, window.location.pathname);
}

function isAuthenticated() {
    return auth0Client.isAuthenticated();
}

function getUser() {
    return auth0Client.getUser();
}

export { initializeAuth0, login, handleCallback, isAuthenticated, getUser };
