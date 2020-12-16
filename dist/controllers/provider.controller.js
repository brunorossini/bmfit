"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = {
  index: async (req, res) => {
    const user = await _User2.default.find({ provider: true });

    res.json(user);
  },
};
