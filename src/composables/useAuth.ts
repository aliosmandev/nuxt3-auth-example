import type { UserWithoutPassword } from '~/types/IUser';

export default function () {
    const user = useState<UserWithoutPassword | null>('user', () => null);
    const loggedIn = useState('loggedIn', () => false);
    const errorMessage = useState('errorMessage', () => '');
    const pending = useState('pending', () => false);

    const setUser = (user) => {
        user.value = user;
        loggedIn.value = true;
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
            navigateTo('/dashboard');
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
            navigateTo('/auth/login');
        } catch (err) {
            errorMessage.value = err.data.statusMessage;
        }
        pending.value = false;
    };

    const me = async () => {
        try {
            const data = await $fetch('/api/me');
            setUser(data);
        } catch (err) {}
    };

    return { errorMessage, loggedIn, pending, user, register, login, me };
}
