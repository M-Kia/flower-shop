import ActionRecord from "../../library/ActionRecord";
import { Fields } from "../../types/ActionRecordTypes";

export default class Files extends ActionRecord {
  tableName = "files";

  fields: Fields[] = [
    {
      name: "id",
      property: { type: "int", notNull: true },
      dependency: { type: "ispk" },
    },
    { name: "path", property: { type: "varchar", size: 1000, notNull: true } },
    { name: "table_id", property: { type: "int", notNull: true } }, // 0 => products
    { name: "record_id", property: { type: "int", notNull: true } },
  ];
}
