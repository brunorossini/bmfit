"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _schemamiddleware = require('../middlewares/schema.middleware'); var _schemamiddleware2 = _interopRequireDefault(_schemamiddleware);
var _appointmentvalidation = require('../validations/appointment.validation'); var _appointmentvalidation2 = _interopRequireDefault(_appointmentvalidation);

var _appointmentcontroller = require('../controllers/appointment.controller'); var _appointmentcontroller2 = _interopRequireDefault(_appointmentcontroller);

const router = _express.Router.call(void 0, );

router.get("/", _appointmentcontroller2.default.index);

router.post("/", _schemamiddleware2.default.call(void 0, _appointmentvalidation2.default.create), _appointmentcontroller2.default.create);

router.delete("/:id", _appointmentcontroller2.default.delete);

exports. default = router;
