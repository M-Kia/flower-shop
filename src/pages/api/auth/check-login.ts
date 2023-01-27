// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from "next";
import {
  checkInputs,
  makePath,
  makeResponse,
} from "../../../../server/helpers";
import Encryption from "../../../../server/library/Encryption";
import { Users } from "../../../../server/models";
import { ResponseData } from "../../../../server/types/ActionRecordTypes";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>
) {
  let result: ResponseData;
  try {
    let checker = checkInputs(["token"], request.body);
    if (!checker.status) throw new Error(checker.missing);
    let { token } = checker.data;

    let temp = Encryption.decode(token).split("##");

    let uid = temp[1];

    const UserModel = new Users();

    let res = await UserModel.find(`users\`.\`id/=/${uid}`, [
      "`users`.`id`",
      "`users`.`firstname`",
      "`users`.`lastname`",
      "`users`.`mobile`",
      "`users`.`email`",
    ]);
    let user = res[0];
    if (typeof user === "undefined") throw new Error("Wrong token");
    user.token = Encryption.encode(`${Date.now()}##${user.id}`);
    result = makeResponse(user);
  } catch (err) {
    result = makeResponse(err.message, "error");
  }

  response.status(200).json(result);
}
