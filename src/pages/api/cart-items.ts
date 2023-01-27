// @ts-nocheck
import { checkInputs, makeResponse } from "@server/helpers";
import Encryption from "@server/library/Encryption";
import { CartItems, Users } from "@server/models";

import type { IncomingHttpHeaders } from "http";
import type { NextApiRequest, NextApiResponse } from "next";
import type { ResponseData } from "@server/types/ActionRecordTypes";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  let result: ResponseData;
  try {
    switch (request.method?.toUpperCase()) {
      case "POST":
        result = await add(request.body, request.headers);
        break;
      case "DELETE":
        result = await reduce(request.body, request.headers);
    }
  } catch (err) {
    result = makeResponse(err.message, "error");
  }

  response.status(200).json(result);
}

async function add(
  data: { [key: string]: string },
  headers: IncomingHttpHeaders
) {
  let checker = checkInputs(["product_id"], data);
  if (!checker.status) throw new Error(checker.missing);
  let { product_id } = checker.data;

  let token: string | undefined | string[] = headers.authorization;
  token = token?.split(" ");
  if (token?.length !== 2) {
    throw new Error("Invalid token");
  }

  token = Encryption.decode(token[1]).split("##");

  let user_id = token[1];

  const UserModel = new Users();

  let result = await UserModel.find(`id/=/${user_id}&&status/=/0`);
  if (result.length === 0) {
    throw new Error("Wrong Token");
  }

  const CartItemsModel = new CartItems();

  result = await CartItemsModel.find(
    `user_id/=/${user_id}&&product_id/=/${product_id}&&status/=/0`
  );
  if (result.length === 0) {
    await CartItemsModel.insert({ user_id, product_id });
  } else {
    await CartItemsModel.update({
      user_id,
      product_id,
      count: result[0].count + 1,
    });
  }

  return makeResponse();
}

async function reduce(
  data: { [key: string]: string },
  headers: IncomingHttpHeaders
) {
  let checker = checkInputs(["product_id"], data);
  if (!checker.status) throw new Error(checker.missing);
  let { product_id } = checker.data;

  let token: string | undefined | string[] = headers.authorization;
  token = token?.split(" ");
  if (token?.length !== 2) {
    throw new Error("Invalid token");
  }

  token = Encryption.decode(token[1]).split("##");

  let user_id = token[1];

  const UserModel = new Users();

  let result = await UserModel.find(`id/=/${user_id}&&status/=/0`);
  if (result.length === 0) {
    throw new Error("Wrong Token");
  }

  const CartItemsModel = new CartItems();

  result = await CartItemsModel.find(
    `user_id/=/${user_id}&&product_id/=/${product_id}&&status/=/0`
  );
  if (result.length === 0) {
    throw new Error("Wrong cart");
  } else {
    let keyValues: {
      user_id: string;
      product_id: string;
      count: number;
      status?: number;
    } = {
      user_id,
      product_id,
      count: result[0].count - 1,
    };
    if (keyValues.count === 0) {
      keyValues.status = 1;
    }

    await CartItemsModel.update(keyValues, `id/=/${result[0].id}`);
  }

  return makeResponse();
}
