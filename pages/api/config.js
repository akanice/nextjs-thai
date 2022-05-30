let AUTH_ROOT_URL = 'https://bot.vietplus.eu:8443/auth/realms/DIP/protocol/openid-connect';

module.exports = {
    SEND_MESSAGE: `https://graph.facebook.com/v11.0/${__FB_PAGE_ID}/messages?access_token=${__FB_ACCESS_TOKEN}`,
    SSO: `${AUTH_ROOT_URL}/auth?response_type=code&client_id=${__SSO_CLIENT_ID}&redirect_uri=:redirect_uri`,
    OPENID: {
        TOKEN: `${AUTH_ROOT_URL}/token`,
        LOGOUT: `${AUTH_ROOT_URL}/logout`,
        USER_INFO: `${AUTH_ROOT_URL}/userinfo`,
        ACCOUNT_LIST: 'https://api.capaos.com/v1/account/list',
        BOND_LIST: 'https://api.capaos.com/v1/item/list-by-account'
    }
};
// SSO: `https://iam.capaos.com/auth/realms/DIP/protocol/openid-connect/auth?response_type=code&client_id=${__SSO_CLIENT_ID}&redirect_uri=:redirect_uri`,
