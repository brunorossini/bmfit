"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _addressroute = require('./address.route'); var _addressroute2 = _interopRequireDefault(_addressroute);
var _userroute = require('./user.route'); var _userroute2 = _interopRequireDefault(_userroute);
var _authroute = require('./auth.route'); var _authroute2 = _interopRequireDefault(_authroute);
var _appointmentroute = require('./appointment.route'); var _appointmentroute2 = _interopRequireDefault(_appointmentroute);
var _providerroute = require('./provider.route'); var _providerroute2 = _interopRequireDefault(_providerroute);

var _authmiddleware = require('../middlewares/auth.middleware'); var _authmiddleware2 = _interopRequireDefault(_authmiddleware);

const router = _express.Router.call(void 0, );

router.use("/auth", _authroute2.default);
router.use("/users", _userroute2.default);

router.use(_authmiddleware2.default);

router.use("/addresses", _addressroute2.default);
router.use("/appointments", _appointmentroute2.default);
router.use("/providers", _providerroute2.default);

exports. default = router;
