import ActionRecord from "../../library/ActionRecord";
import { Fields } from "../../types/ActionRecordTypes";

export default class CartItems extends ActionRecord {
  tableName = "cart_items";

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
    { name: "count", property: { type: "int" } },
    { name: "status", property: { type: "int" } }, // 0 => active, 1 => deleted, 2 => ordered
  ];
}
