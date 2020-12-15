import jwt from "jwt-simple";
import * as dateFns from "date-fns";

export default {
  create: (user) => {
    const payload = {
      sub: user._id,
      iat: dateFns.getUnixTime(new Date()),
      exp: dateFns.getUnixTime(dateFns.addMinutes(new Date(), 30)),
    };

    return jwt.encode(payload, process.env.TOKEN_SECRET);
  },
};
