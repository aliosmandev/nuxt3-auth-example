import { send } from 'h3';
import { validateBody, Type } from 'h3-typebox';
import { registerSchema } from '~/server/validations/index';
import jwt from 'jsonwebtoken';

import userModal from '~/server/models/User';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    const { email, password } = await validateBody(event, registerSchema);

    const user = await userModal.findOne({ email });
    if (user) {
        const validatePass = await user.validatePassword(password);
        if (!validatePass) return createError({ statusCode: 400, statusMessage: 'Your password is wrong' });

        const token = jwt.sign({ id: user._id }, config.JWT_ACCESS_SECRET, { expiresIn: '1d' });

        setCookie(event, 'token', token, {
            maxAge: 60 * 60 * 8,
            httpOnly: true,
            path: '/',
            sameSite: true,
            secure: process.env.NODE_ENV === 'production' ? true : false,
        });

        return user;
    } else return createError({ statusCode: 400, statusMessage: 'Your email is wrong' });
});
