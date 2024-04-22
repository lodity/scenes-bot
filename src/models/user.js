import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: Number, unique: true, required: true },
    firstName: { type: String },
    username: { type: String },
});

const User = mongoose.model('User', userSchema);

export default User;
