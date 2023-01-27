// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from "next";
import { checkInputs, makeResponse } from "@server/helpers";
import Encryption from "@server/library/Encryption";
import { Users, CartItems, FavoriteProducts } from "@server/models";
import { ResponseData } from "@server/types/ActionRecordTypes";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>
) {
  let result: ResponseData;
  try {
    let checker = checkInputs(["mobile", "password"], request.body);
    if (!checker.status) throw new Error(checker.missing);
    let { mobile, password } = checker.data;

    const UserModel = new Users();

    let res = await UserModel.find(`mobile/=/${mobile}&&status/=/0`, [
      "`users`.`id`",
      "`users`.`firstname`",
      "`users`.`lastname`",
      "`users`.`mobile`",
      "`users`.`email`",
      "`users`.`password`",
    ]);
    let user: {
      id: number;
      token: "";
      firstname: string;
      lastname: string;
      mobile: string;
      email: string;
      favoriteProducts: number[];
      cartItems: number[];
    };
    if (res.length !== 0 && Encryption.decode(res[0].password) === password) {
      user = {
        id: res[0].id,
        token: "",
        firstname: res[0].firstname,
        lastname: res[0].lastname,
        mobile: res[0].mobile,
        email: res[0].email,
        cartItems: [],
        favoriteProducts: [],
      };
    } else {
      throw new Error("Wrong mobile or password");
    }
    delete user.password;
    user.token = Encryption.encode(`${Date.now()}##${user.id}`);

    const CartItemsModel = new CartItems();
    const FavoriteProductsModel = new FavoriteProducts();

    let cartItems = await CartItemsModel.find(`user_id/=/${user.id}`);
    let favorites = await FavoriteProductsModel.find(`user_id/=/${user.id}`);

    for (let i = 0; i < cartItems.length || i < favorites.length; i++) {
      if (typeof favorites[i] !== "undefined") {
        user.favoriteProducts.push(favorites[i].id);
      }
      if (typeof cartItems[i] !== "undefined") {
        user.favoriteProducts.push(cartItems[i].id);
      }
    }

    result = makeResponse(user);
  } catch (err) {
    result = makeResponse(err.message, "error");
  }

  response.status(200).json(result);
}
