import * as dateFns from "date-fns";
import Appointment from "../models/Appointment";

export default {
  index: async (req, res) => {
    const appointments = await Appointment.find({
      user: req.user,
    });

    return res.json(appointments);
  },
  create: async (req, res) => {
    const { date, provider, address } = req.body;

    const hourStart = dateFns.startOfHour(dateFns.parseISO(date));

    const checkAvailable = await Appointment.findOne({
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

    const appointment = new Appointment({
      provider,
      date: hourStart,
      user: req.user,
      address,
    });

    await appointment.save();
    return res.json(appointment);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      await Appointment.updateOne(
        { _id: id, user: req.user },
        { canceled_at: new Date() }
      );

      return res.json({ msg: "Appointment canceled" });
    } catch (err) {
      return res.status(400).json({ msg: "Appointment not found" });
    }
  },
};
