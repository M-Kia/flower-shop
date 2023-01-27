import ActionRecord from "../../library/ActionRecord";
import { Fields } from "../../types/ActionRecordTypes";

export default class OrdersItems extends ActionRecord {
  tableName = "order_items";

  fields: Fields[] = [
    {
      name: "id",
      property: { type: "int", notNull: true },
      dependency: { type: "ispk" },
    },
    {
      name: "order_id",
      property: { type: "int", notNull: true },
      dependency: {
        type: "isfk",
        table: "orders",
        field: "id",
        force: true,
      },
    },
    {
      name: "product_id",
      property: { type: "int", notNull: true },
      dependency: {
        type: "isfk",
        table: "products",
        field: "id",
        force: true,
      },
    },
    { name: "collectionId", property: { type: "int", notNull: true } }, // 0 => Cacti, 1 => Plants, 2 => Succulents
    { name: "title", property: { type: "varchar", size: 255, notNull: true } },
    { name: "description", property: { type: "varchar", size: 1000, notNull: true } },
    { name: "price", property: { type: "int", notNull: true } },
    { name: "discount", property: { type: "int" } },
  ];
}
