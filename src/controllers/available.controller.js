import Appointment from "../models/Appointment";
import {
  endOfDay,
  format,
  isAfter,
  setHours,
  setMinutes,
  setSeconds,
  startOfDay,
  parseISO,
} from "date-fns";

export default {
  index: async (req, res) => {
    const { date } = req.query;
    const { providerId } = req.params;

    if (!date) {
      return res.status(400).json({ error: "Invalid date" });
    }

    const searchDate = Number(date);

    const appointments = await Appointment.find({
      provider: providerId,
      canceled_at: null,
      date: {
        $gte: startOfDay(searchDate),
        $lt: endOfDay(searchDate),
      },
    });

    const schedule = [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
    ];

    const available = schedule.map((time) => {
      const [hour, minute] = time.split(":");
      const value = setSeconds(
        setMinutes(setHours(searchDate, parseInt(hour)), minute),
        0
      );

      return {
        time,
        value: format(value, "yyyy-MM-dd'T'HH:mm:ssxxx"),
        available:
          isAfter(value, new Date()) &&
          !appointments.find((a) => format(parseISO(a.date), "HH:mm") === time),
      };
    });

    return res.json(available);
  },
};
