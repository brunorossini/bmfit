export default {
  index: async (req, res) => {
    res.json({ message: "webhook d4sign" });
  },
  create: async (req, res) => {
    console.log(`post:d4sign`, req.body);

    res.json({ message: "webhook d4sign" });
  },
};
