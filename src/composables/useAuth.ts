import type { UserWithoutPassword } from '~/types/IUser';

export default function () {
    const user = useState<UserWithoutPassword | null>('user', () => null);
    const loggedIn = useState<boolean>('loggedIn', () => false);
    const errorMessage = useState('errorMessage', () => '');

    const login = async ({ email, password }) => {
        errorMessage.value = '';
        try {
            const data: UserWithoutPassword = await $fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
            user.value = data;
            loggedIn.value = true;
            navigateTo('/dashboard');
        } catch (err) {
            errorMessage.value = err.data.statusMessage;
        }
    };

    const me = async () => {
        try {
            const data = await $fetch('/api/me');
            user.value = data;
            loggedIn.value = true;
        } catch (err) {}
    };

    return { errorMessage, loggedIn, user, login, me };
}
