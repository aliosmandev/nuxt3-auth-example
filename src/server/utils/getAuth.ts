import type { IUser } from '~/types/IUser';
import { CompatibilityEvent } from 'h3';
import userModal from '~/server/models/User';
import jwt from 'jsonwebtoken';

export default async function (event: CompatibilityEvent): Promise<IUser> {
    const { token } = useCookies(event);
    if (!token) throw new Error('no token');

    const { id } = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    const user: IUser = await userModal.findById(id);
    if (!user) throw new Error('no user');

    return user;
}
