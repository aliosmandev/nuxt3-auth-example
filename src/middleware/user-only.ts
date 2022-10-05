export default defineNuxtRouteMiddleware(async (context) => {
    const { loggedIn } = useAuth();
    if (!loggedIn.value) return await navigateTo('/auth/login');
});
