global.__host = process.env.NODE_ENV === 'production' ? 'https://bankbot.lehuy.vn' : 'https://7275-2402-800-61b1-c8b-65fb-b658-8cb1-2794.ngrok.io';

global.USER_ROLES = { admin: 'Admin', mod: 'Quản lý', editor: 'Viết bài' };
global.USER_ROLE_COLORS = {
    admin: 'danger',
    mod: 'warning',
    editor: 'info'
};
