export default {
  index: async (req, res) => {
    console.log(req.body);

    res.json({ message: "webhook d4sign" });
  },
  create: async (req, res) => {
    console.log(req.body);

    res.json({ message: "webhook d4sign" });
  },
};
