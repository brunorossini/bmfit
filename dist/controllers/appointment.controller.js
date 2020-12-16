"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _datefns = require('date-fns'); var dateFns = _interopRequireWildcard(_datefns);
var _Appointment = require('../models/Appointment'); var _Appointment2 = _interopRequireDefault(_Appointment);

exports. default = {
  index: async (req, res) => {
    const appointments = await _Appointment2.default.find({
      user: req.user,
    });

    return res.json(appointments);
  },
  create: async (req, res) => {
    const { date, provider } = req.body;

    const hourStart = dateFns.startOfHour(dateFns.parseISO(date));

    const checkAvailable = await _Appointment2.default.findOne({
      provider,
      canceled_at: null,
      date: hourStart,
    });

    console.log(checkAvailable);

    /**
     * Check date availability
     */
    if (checkAvailable)
      return res
        .status(400)
        .json({ error: "Appointment date is not available" });

    const appointment = new (0, _Appointment2.default)({
      provider,
      date: hourStart,
      user: req.user,
    });

    await appointment.save();
    return res.json(appointment);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      await _Appointment2.default.updateOne(
        { _id: id, user: req.user },
        { canceled_at: new Date() }
      );

      return res.json({ msg: "Appointment canceled" });
    } catch (err) {
      return res.status(400).json({ msg: "Appointment not found" });
    }
  },
};
