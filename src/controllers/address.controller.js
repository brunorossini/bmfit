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
  delete: async (req, res) => {
    const { id } = req.params;

    const { deletedCount } = await Address.deleteOne({ _id: id });

    if (deletedCount === 0) return res.json({ msg: "Object not found" });

    return res.json({ msg: "Object deleted" });
  },
};
