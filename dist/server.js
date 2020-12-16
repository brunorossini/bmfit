"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require("dotenv").config();

var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
var _chalk = require('chalk'); var _chalk2 = _interopRequireDefault(_chalk);

const port = process.env.PORT;

_app2.default.listen(port, () => {
  console.log(_chalk2.default.cyan(`App listening at http://localhost:${port}`));
});
