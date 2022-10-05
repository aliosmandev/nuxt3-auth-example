export default defineEventHandler((event) => {
    deleteCookie(event, 'token', {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
    });

    return { code: 200, message: 'Logout success' };
});
