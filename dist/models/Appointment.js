"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const schema = new (0, _mongoose.Schema)({
  date: String,
  canceled_at: String,
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  provider: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

exports. default = _mongoose2.default.model("Appointment", schema);
