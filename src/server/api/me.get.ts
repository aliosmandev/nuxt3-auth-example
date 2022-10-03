import { defineAuthenticatedEventHandler } from '../utils/defineAuthenticatedEventHandler';

export default defineAuthenticatedEventHandler((_, user) => {
    return user;
});
