"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _schemamiddleware = require('../middlewares/schema.middleware'); var _schemamiddleware2 = _interopRequireDefault(_schemamiddleware);
var _uservalidation = require('../validations/user.validation'); var _uservalidation2 = _interopRequireDefault(_uservalidation);

var _usercontroller = require('../controllers/user.controller'); var _usercontroller2 = _interopRequireDefault(_usercontroller);

const router = _express.Router.call(void 0, );

router.get("/", _usercontroller2.default.index);

router.post("/", _schemamiddleware2.default.call(void 0, _uservalidation2.default.create), _usercontroller2.default.create);

exports. default = router;
