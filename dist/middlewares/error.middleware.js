"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _expressvalidation = require('express-validation'); var _expressvalidation2 = _interopRequireDefault(_expressvalidation);

exports. default = (err, req, res, next) => {
  if (err instanceof _expressvalidation2.default.ValidationError) {
    return res.status(err.status).json(err);
  }

  return next();
};
