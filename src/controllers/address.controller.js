import Address from "../models/Address";

export default {
  index: async (req, res) => {
    const addresses = await Address.find({ user: req.user });

    return res.json(addresses);
  },
  create: async (req, res) => {
    const address = new Address({ ...req.body, user: req.user });

    await address.save();
    return res.json(address);
  },
  update: async (req, res) => {
    const address = Address.findById(req.params.id);
    await address.update({ ...req.body });

    return res.end();
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await Address.deleteOne({ _id: id });

    return res.json({ msg: "Object deleted" });
  },
};
