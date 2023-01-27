import ActionRecord from "../../library/ActionRecord";
import { Fields } from "../../types/ActionRecordTypes";

export default class UserAddresses extends ActionRecord {
  tableName = "user_addresses";

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
    { name: "title", property: { type: "varchar", size: 255, notNull: true } },
    { name: "address", property: { type: "varchar", size: 255, notNull: true } },
    { name: "status", property: { type: "int" } }, // 0 => active, 1 => inactive, -1 => deleted
  ];
}
