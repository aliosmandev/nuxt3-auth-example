import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema: mongoose.Schema = new mongoose.Schema(
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

UserSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};

export default mongoose.model('users', UserSchema);
