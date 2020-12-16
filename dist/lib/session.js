"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jwtsimple = require('jwt-simple'); var _jwtsimple2 = _interopRequireDefault(_jwtsimple);
var _datefns = require('date-fns'); var dateFns = _interopRequireWildcard(_datefns);

exports. default = {
  create: (user) => {
    const payload = {
      sub: user._id,
      iat: dateFns.getUnixTime(new Date()),
      exp: dateFns.getUnixTime(dateFns.addMinutes(new Date(), 30)),
    };

    return _jwtsimple2.default.encode(payload, process.env.TOKEN_SECRET);
  },
};
