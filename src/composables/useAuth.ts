import type { UserWithoutPassword } from '~/types/IUser';

export default function () {
    const user = useState<UserWithoutPassword | null>('user', () => null);
    const loggedIn = useState('loggedIn', () => false);
    const errorMessage = useState('errorMessage', () => '');
    const pending = useState('pending', () => false);

    const setUser = (data) => {
        user.value = data;
        loggedIn.value = Boolean(data);
    };

    const login = async ({ email, password }) => {
        errorMessage.value = '';
        pending.value = true;
        try {
            const data: UserWithoutPassword = await $fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
            setUser(data);
            await navigateTo('/');
        } catch (err) {
            errorMessage.value = err.data.statusMessage;
        }
        pending.value = false;
    };

    const register = async ({ email, password }) => {
        errorMessage.value = '';
        pending.value = true;
        try {
            const data: UserWithoutPassword = await $fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
            await navigateTo('/auth/login');
        } catch (err) {
            errorMessage.value = err.data.statusMessage;
        }
        pending.value = false;
    };

    const logout = async () => {
        try {
            const data: UserWithoutPassword = await $fetch('/api/auth/logout', {
                method: 'POST',
            });
            setUser(null);
        } catch (err) {}
    };

    const me = async () => {
        try {
            const data = await $fetch('/api/me');
            setUser(data);
        } catch (err) {}
    };

    return { errorMessage, loggedIn, pending, user, register, login, logout, me };
}
