"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _errormiddleware = require('./middlewares/error.middleware'); var _errormiddleware2 = _interopRequireDefault(_errormiddleware);

require('./lib/database');

const app = _express2.default.call(void 0, );

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

app.use(_cors2.default.call(void 0, ));
app.use(_express2.default.json());

app.use(_routes2.default);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// app.use(errorMiddleware);

exports. default = app;
