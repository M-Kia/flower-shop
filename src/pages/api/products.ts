// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from "next";
import type { ResponseData } from "@server/types/ActionRecordTypes";

import { makePath, makeResponse } from "../../../server/helpers";
import { Files, Products } from "@server/models";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  let result: ResponseData;
  try {
    switch (request.method?.toUpperCase()) {
      case "GET":
        result = await get();
        break;
      default:
        throw new Error("Wrong Method!!");
    }
  } catch (err) {
    result = makeResponse(err.message, "error");
  }

  response.status(200).json(result);
}

async function get(): Promise<ResponseData> {
  const ProductsModel = new Products();
  const FilesModel = new Files();

  const res = await ProductsModel.find();

  let products: ResponseProductType[] = [];
  for (let i = 0; i < res.length; i++) {
    const files = FilesModel.find(`table_id/=/0&&record_id/=/${res[i].id}`);

    let images: { value: string }[] = [];
    for (let j = 0; j < files.length; j++) {
      images.push({ value: makePath(files[j].path) });
    }

    products.push({
      name: res[i].title,
      relatedCode: +res[i].collection_id - 1,
      code: res[i].id,
      pictures: images,
      price: res[i].price,
      discount: res[i].discount,
      stock: res[i].inventory_count,
      order: false, //TODO
      favorite: false, //TODO
      productInfo: res[i].description,
    });
  }

  return makeResponse(products);
}

type ResponseProductType = {
  name: string;
  relatedCode: number;
  code: number;
  pictures: { value: string }[];
  price: number;
  discount: number;
  stock: number;
  order: boolean;
  favorite: boolean;
  productInfo: string;
};
