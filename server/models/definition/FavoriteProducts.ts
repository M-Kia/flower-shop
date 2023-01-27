import ActionRecord from "../../library/ActionRecord";
import { Fields } from "../../types/ActionRecordTypes";

export default class FavoriteProducts extends ActionRecord {
  tableName = "favorite_products";

  fields: Fields[] = [
    {
      name: "id",
      property: { type: "int", notNull: true },
      dependency: { type: "ispk" },
    },
    {
      name: "user_id",
      property: { type: "int", notNull: true },
      dependency: {
        type: "isfk",
        field: "id",
        table: "users",
        force: true,
      },
    },
    {
      name: "product_id",
      property: { type: "int", notNull: true },
      dependency: {
        type: "isfk",
        field: "id",
        table: "users",
        force: true,
      },
    },
  ];
}
