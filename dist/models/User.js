"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

const schema = new (0, _mongoose.Schema)({
  name: String,
  email: {
    type: _mongoose.Schema.Types.String,
    unique: true,
  },
  password: String,
  phone: String,
  provider: {
    type: _mongoose.Schema.Types.Boolean,
    default: false,
  },
});

schema.pre("save", async function (next) {
  const { password } = this;

  this.password = await _bcryptjs2.default.hash(password, 8);
  next();
});

schema.methods.comparePassword = function (candidatePassword) {
  return _bcryptjs2.default.compare(candidatePassword, this.password);
};

exports. default = _mongoose2.default.model("User", schema);
