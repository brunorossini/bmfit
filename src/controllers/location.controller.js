import Location from "../models/Location";

export default {
  index: async (req, res) => {
    const locations = await Location.find({ user: req.user });

    return res.json(locations);
  },
  create: async (req, res) => {
    const location = new Location({ ...req.body, user: req.user });

    await location.save();
    return res.json(location);
  },
  update: async (req, res) => {
    const location = Location.findById(req.params.id);
    await location.update({ ...req.body });

    return res.end();
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await Location.deleteOne({ _id: id });

    return res.json({ msg: "Object deleted" });
  },
};
