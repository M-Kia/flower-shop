import ActionRecord from "../../library/ActionRecord";
import { Fields } from "../../types/ActionRecordTypes";

export default class Orders extends ActionRecord {
  tableName = "orders";

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
        table: "users",
        field: "id",
        force: true,
      },
    },
    {
      name: "user_address_id",
      property: { type: "int", notNull: true },
      dependency: {
        type: "isfk",
        table: "user_addresses",
        field: "id",
        force: true,
      },
    },
    { name: "status", property: { type: "int" } }, // 0 => saved, 1 => processing, 2 => sending, 3 => completed, -1 => cancelled
  ];
}
