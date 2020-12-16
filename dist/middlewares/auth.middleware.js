"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _jwtsimple = require('jwt-simple'); var _jwtsimple2 = _interopRequireDefault(_jwtsimple);
var _datefns = require('date-fns'); var dateFns = _interopRequireWildcard(_datefns);

exports. default = (req, res, next) => {
  const token = _optionalChain([req, 'access', _ => _.headers, 'access', _2 => _2["authorization"], 'optionalAccess', _3 => _3.split, 'call', _4 => _4("Bearer "), 'access', _5 => _5[1]]);

  if (!token) return res.status(401).json({ msg: "No token provided" });

  try {
    const payload = _jwtsimple2.default.decode(token, process.env.TOKEN_SECRET);

    if (payload.exp < dateFns.getUnixTime(new Date()))
      return res.status(401).send({ message: "Token has expired" });

    req.user = payload.sub;
  } catch (err) {
    return res.status(401).send({ message: err.message });
  }

  next();
};
