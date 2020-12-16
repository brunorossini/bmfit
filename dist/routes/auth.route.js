"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _schemamiddleware = require('../middlewares/schema.middleware'); var _schemamiddleware2 = _interopRequireDefault(_schemamiddleware);
var _authvalidation = require('../validations/auth.validation'); var _authvalidation2 = _interopRequireDefault(_authvalidation);

var _authcontroller = require('../controllers/auth.controller'); var _authcontroller2 = _interopRequireDefault(_authcontroller);

const router = _express.Router.call(void 0, );

router.post("/", _schemamiddleware2.default.call(void 0, _authvalidation2.default.create), _authcontroller2.default.create);

exports. default = router;
