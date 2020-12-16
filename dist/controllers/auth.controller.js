"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _session = require('../lib/session'); var _session2 = _interopRequireDefault(_session);

exports. default = {
  index: async (req, res) => {
    const user = await _User2.default.findOne({ _id: req.user });

    res.json(user);
  },
  create: async (req, res) => {
    const { email, password } = req.body;

    const user = await _User2.default.findOne({ email });

    if (!user) return res.status(401).json({ msg: "User not found" });

    if (await user.comparePassword(password)) {
      const token = _session2.default.create(user);

      return res.json({ token });
    } else {
      return res.status(401).json({ msg: "Password not does match" });
    }
  },
};
