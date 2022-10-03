export default defineNuxtRouteMiddleware((context) => {
    const { loggedIn } = useAuth();
    if (loggedIn.value) return navigateTo('/');
});
