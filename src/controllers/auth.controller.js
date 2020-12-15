import User from "../models/User";
import session from "../lib/session";

export default {
  create: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ msg: "User not found" });

    if (await user.comparePassword(password)) {
      const token = session.create(user);

      return res.json({ token });
    } else {
      return res.status(401).json({ msg: "Password not does match" });
    }
  },
};
