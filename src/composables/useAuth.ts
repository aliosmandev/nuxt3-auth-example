import type { IUser } from '~/types/IUser';

export default function () {
    const user = useState<IUser>('user', () => {
        return {};
    });
    const loggedIn = useState('loggedIn', () => false);
    const errorMessage = useState('errorMessage', () => '');

    const getUser = async () => {
        try {
            const response = await $fetch('/api/me');
            user.value = response;
            loggedIn.value = true;
        } catch (err) {}
    };

    const login = async ({ email, password }) => {
        errorMessage.value = '';
        try {
            const response = await $fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
            await getUser();
            navigateTo('/dashboard');
        } catch (err) {
            errorMessage.value = err.data.statusMessage;
        }
    };

    return { loggedIn, user, getUser, login, errorMessage };
}
