import { IUser } from '~/types/IUser';
import { CompatibilityEvent } from 'h3';
import getAuth from './getAuth';

export function defineAuthenticatedEventHandler<T>(handler: (event: CompatibilityEvent, user: IUser) => T | Promise<T>) {
    return defineEventHandler<T>(async (event) => {
        try {
            const user = await getAuth(event);
            return handler(event, user);
        } catch (err) {
            sendError(event, createError({ statusCode: 400, statusMessage: 'no authorization' }));
        }
    });
}
