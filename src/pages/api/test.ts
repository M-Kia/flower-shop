import type { NextApiRequest, NextApiResponse } from "next";

import { tablesChecker } from "../../../server/library/Controler";

export default async function test(
  req: NextApiRequest,
  res: NextApiResponse<Object>
): Promise<void> {
  let result = await tablesChecker();
  res.status(200).json({ result });
}
