import User from "../models/User";

export default {
  index: async (req, res) => {
    const user = await User.find({ provider: true });

    res.json(user);
  },
};
