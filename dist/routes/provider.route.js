"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _providercontroller = require('../controllers/provider.controller'); var _providercontroller2 = _interopRequireDefault(_providercontroller);

const router = _express.Router.call(void 0, );

router.get("/", _providercontroller2.default.index);

exports. default = router;
