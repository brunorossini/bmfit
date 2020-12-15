import User from "../models/User";

export default {
  index: async (req, res) => {
    const users = await User.find();

    return res.json(users);
  },
  create: async (req, res) => {
    const user = new User(req.body);

    await user.save();
    return res.json(user);
  },
};
