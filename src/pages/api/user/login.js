import { Op } from "sequelize";

import { Users } from "../../../../server/models";

export default function handler(req, res) {
  const {mobile, password} = req.body;
  
  res.status(200).json({ status: true, user: {
    firstName: "Mohammad",
    lastName: "Kia",
    mobile: "09119691078",
    email: "smhkh1380@gmail.com",
  } });
}
