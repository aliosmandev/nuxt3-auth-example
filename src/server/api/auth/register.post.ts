import { H3Error } from 'h3';
import { validateBody, Type } from 'h3-typebox';
import { registerSchema } from '~/server/validations/index';

import UserModal from '~/server/models/User';

export default defineEventHandler(async (event) => {
    const { email, password } = await validateBody(event, registerSchema);

    const user = await UserModal.findOne({ email });
    if (user) return createError({ statusCode: 400, statusMessage: 'email alread user' });

    const newUser = await UserModal.create({ email, password });
    return { code: 200, message: 'account created' };
});
