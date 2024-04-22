import User from '../models/user.js';

class UserService {
    async createUser({id, firstName, username}) {
        try {
            const user = {id};
            if (firstName) {
                user.firstName = firstName;
            }
            if (username) {
                user.username = username;
            }
            await new User(user).save();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default new UserService();