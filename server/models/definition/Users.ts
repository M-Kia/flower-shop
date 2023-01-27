import ActionRecord from "../../library/ActionRecord";
import { Fields } from "../../types/ActionRecordTypes";

export default class Users extends ActionRecord {
  tableName = "users";

  fields: Fields[] = [
    {
      name: "id",
      property: { type: "int", notNull: true },
      dependency: { type: "ispk" },
    },
    { name: "firstname", property: { type: "varchar", size: 255, notNull: true } },
    { name: "lastname", property: { type: "varchar", size: 255, notNull: true } },
    { name: "mobile", property: { type: "varchar", size: 255, notNull: true } },
    { name: "email", property: { type: "varchar", size: 255 } },
    {
      name: "password",
      property: { type: "varchar", size: 255 },
      config: { encryption: true },
    },
    { name: "status", property: { type: "int" } }, // 0 => active, 1 => inactive, -1 => deleted
  ];
}
