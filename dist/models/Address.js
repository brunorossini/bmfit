"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const schema = new (0, _mongoose.Schema)({
  street: String,
  number: String,
  neighborhood: String,
  city: String,
  state: String,
  zip: String,
  complement: String,
  reference: String,
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

exports. default = _mongoose2.default.model("Adress", schema);
