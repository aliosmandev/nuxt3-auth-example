import type { IUser } from '~~/src/types/IUser';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

interface IUserDocument extends IUser, Document {
    validatePassword: (data: string) => Promise<boolean>;
}

const UserSchema: mongoose.Schema = new mongoose.Schema<IUser>(
    {
        email: { type: String, requied: true },
        password: { type: String, requied: true },
    },
    { timestamps: true }
);

UserSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    try {
        user.password = await bcrypt.hash(user.password, 10);
        return next();
    } catch (e) {
        return next(e);
    }
});

UserSchema.methods.validatePassword = async function validatePassword(password) {
    return bcrypt.compare(password, this.password);
};

export default mongoose.model<IUserDocument>('users', UserSchema);
