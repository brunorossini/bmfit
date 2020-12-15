import Appointment from "../models/Appointment";

export default {
  index: (req, res) => {
    const appointments = Appointment.find({ user: req.user });

    return res.json(appointments);
  },
  create: (req, res) => {
    const appointment = new Appointment({ ...req.body, user: req.user });

    return res.json(appointment);
  },
};
