import { Op } from "sequelize";

import { Users } from "../../../../server/models";

export default function handler(req, res) {
  const users = Users.findOne({
    where: {
      mobile: req.body.mobile,
    },
  });
  console.log(users);
  res.status(200).json({ name: "product", price: 15, description: "anything" });
}
