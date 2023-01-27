import ActionRecord from "../../library/ActionRecord";
import { Fields } from "../../types/ActionRecordTypes";

export default class Products extends ActionRecord {
  tableName = "products";

  fields: Fields[] = [
    {
      name: "id",
      property: { type: "int", notNull: true },
      dependency: { type: "ispk" },
    },
    { name: "collectionId", property: { type: "int", notNull: true } }, // 0 => Cacti, 1 => Plants, 2 => Succulents
    { name: "title", property: { type: "varchar", size: 255, notNull: true } },
    { name: "description", property: { type: "varchar", size: 1000 } },
    { name: "price", property: { type: "int", notNull: true } },
    { name: "discount", property: { type: "int" } },
    { name: "inventory_count", property: { type: "int", notNull: true } },
    { name: "status", property: { type: "int" } }, // 0 => active, 1 => inactive, -1 => deleted
  ];
}
