"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Address = require('../models/Address'); var _Address2 = _interopRequireDefault(_Address);

exports. default = {
  index: async (req, res) => {
    const addresses = await _Address2.default.find({ user: req.user });

    return res.json(addresses);
  },
  create: async (req, res) => {
    const address = new (0, _Address2.default)({ ...req.body, user: req.user });

    await address.save();
    return res.json(address);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await _Address2.default.deleteOne({ _id: id });

    return res.json({ msg: "Object deleted" });
  },
};
