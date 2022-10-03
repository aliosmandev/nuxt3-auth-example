import { send } from 'h3';
import { validateBody, Type } from 'h3-typebox';
import { registerSchema } from '~/server/validations/index';
import jwt from 'jsonwebtoken';

import userModal from '~/server/models/User';

export default defineEventHandler(async (event) => {
    const { email, password } = await validateBody(event, registerSchema);

    const user = await userModal.findOne({ email });
    if (user) {
        const validatePass = await user.validatePassword(password);
        if (!validatePass) return createError({ statusCode: 400, statusMessage: 'your password is wrong' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_ACCESS_SECRET, { expiresIn: '1d' });

        setCookie(event, 'token', token, {
            maxAge: 60 * 60 * 8,
            httpOnly: true,
            path: '/',
            sameSite: true,
            secure: process.env.NODE_ENV === 'production' ? true : false,
        });

        return { token };
    } else return createError({ statusCode: 400, statusMessage: 'your email is wrong' });
});