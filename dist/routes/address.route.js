"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _schemamiddleware = require('../middlewares/schema.middleware'); var _schemamiddleware2 = _interopRequireDefault(_schemamiddleware);
var _addressvalidation = require('../validations/address.validation'); var _addressvalidation2 = _interopRequireDefault(_addressvalidation);

var _addresscontroller = require('../controllers/address.controller'); var _addresscontroller2 = _interopRequireDefault(_addresscontroller);

const router = _express.Router.call(void 0, );

router.get("/", _addresscontroller2.default.index);

router.post("/", _schemamiddleware2.default.call(void 0, _addressvalidation2.default.create), _addresscontroller2.default.create);

router.delete("/:id", _addresscontroller2.default.delete);

exports. default = router;
