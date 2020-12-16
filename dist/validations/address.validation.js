"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _joi = require('joi'); var _joi2 = _interopRequireDefault(_joi);

exports. default = {
  create: _joi2.default.object({
    street: _joi2.default.string().required(),
    number: _joi2.default.string()
      .min(0)
      .max(6)
      .pattern(/^[0-9]+$/),
    neighborhood: _joi2.default.string().required(),
    city: _joi2.default.string().required(),
    state: _joi2.default.string().required(),
    zip: _joi2.default.string()
      .length(8)
      .pattern(/^[0-9]+$/),
    complement: _joi2.default.string(),
    reference: _joi2.default.string(),
  }),
};
