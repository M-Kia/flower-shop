// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from "next";
import { checkInputs, makeResponse } from "../../../../server/helpers";
import { Users } from "../../../../server/models";
import Encryption from "../../../../server/library/Encryption";
import { ResponseData } from "../../../../server/types/ActionRecordTypes";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>
) {
  let result: ResponseData;
  try {
    // check entries
    let checker = checkInputs(
      [
        "firstname",
        "lastname",
        "mobile",
        "password",
        // "email",
      ],
      request.body
    );
    if (!checker.status) throw new Error(checker.missing);
    // get values
    let { firstname, lastname, mobile, password } = checker.data;

    let email = request.body.email;

    // encrypt password
    password = Encryption.encode(password);

    const UserModel = new Users();
    // insert user
    await UserModel.insert({
      firstname,
      lastname,
      mobile,
      password,
      email,
    });

    result = makeResponse();
    response.status(200).json(result);
  } catch (err) {
    result = makeResponse(err.message, "error");
  }

  response.status(200).json(result);
}
