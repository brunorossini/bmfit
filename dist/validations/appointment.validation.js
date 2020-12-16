"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _joi = require('joi'); var _joi2 = _interopRequireDefault(_joi);

exports. default = {
  create: _joi2.default.object({
    date: _joi2.default.date().min(new Date()).required(),
    provider: _joi2.default.string().required(),
  }),
};
