import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";

import { Orders } from "./Orders";
import { Products } from "./Products";

import type { CollectionsType, } from "../../types/dataTypes";

@Table({
  tableName: "order_items",
})
export class OrderItems extends BaseModel {
  @ForeignKey(() => Orders)
  @Column({
    type: DataType.INTEGER,
    field: "order_id",
    allowNull: false,
  })
  public orderId!: number;

  @BelongsTo(() => Orders)
  public order!: Orders;

  @ForeignKey(() => Products)
  @Column({
    type: DataType.INTEGER,
    field: "product_id",
    allowNull: false,
  })
  public productId!: number;

  @BelongsTo(() => Products)
  public product!: Products;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: "0 => Cacti, 1 => Plants, 2 => Succulents",
  })
  get collection(): CollectionsType {
    switch (this.getDataValue("collection")) {
      case 0:
        return "Cacti";
      case 1:
        return "Plants";
      default: // 2
        return "Succulents";
    }
  }

  set collection(value: CollectionsType) {
    switch (value.toLowerCase()) {
      case "Cacti":
        this.setDataValue("collection", 0);
        break;
      case "Plants":
        this.setDataValue("collection", 1);
        break;
      default: // Succulents
        this.setDataValue("collection", 2);
    }
  }

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public title!: string;

  @Column({
    type: DataType.STRING,
    defaultValue: "",
  })
  public description!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  public price!: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  public discount!: number;
}
