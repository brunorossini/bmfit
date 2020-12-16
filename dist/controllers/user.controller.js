"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = {
  index: async (req, res) => {
    const users = await _User2.default.find();

    return res.json(users);
  },
  create: async (req, res) => {
    const user = new (0, _User2.default)(req.body);

    try {
      await user.save();
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
};
