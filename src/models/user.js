import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, unique: true, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;
