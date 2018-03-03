import User from '../../models/users';

export default {
    getUsers: () => User.find({}).sort({ createdAt: -1 }),
    getUser: (_, { _id }) => User.findById(_id),
    createUser: (_, args) => User.create(args),
    updateUser: (_, { _id, ...rest}) => User.findByIdAndUpdate(_id, rest, { new: true }),
    deleteUser: async (_, { _id }) => {
        try {
            await User.findByIdAndRemove(_id);
            return {
                message: 'User deleted success!'
            }
        } catch (error) {
            throw error
        }
    },
    loginUser: async (_, { uemail, upassword }) => {
        const user = await User.findOne({ uemail });

        if (!user) {
            throw new Error('User not exist');
        }
        if (!user._authenticate(upassword)) {
            throw new Error('User password not match');
        }

        return user;
    }
}