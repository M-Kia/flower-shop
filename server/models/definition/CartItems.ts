import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";

import { Users } from "./Users";
import { Products } from "./Products";

import type { StatusType } from "../../types/dataTypes";

@Table({
  tableName: "cart_items",
})
export class CartItems extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  public id!: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: "user_id",
  })
  public userId!: number;

  @BelongsTo(() => Users)
  public user!: Users;

  @ForeignKey(() => Products)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: "product_id",
  })
  public productId!: number;

  @BelongsTo(() => Products)
  public product!: Products;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    comment: "0 => active, 1 => deleted, 2 => ordered",
  })
  get status(): StatusType {
    switch (this.getDataValue("status")) {
      case 0:
        return "active";
      case 1:
        return "inactive";
      case -1:
        return "deleted";
      default:
    }
  }

  set status(value: StatusType) {
    switch (value) {
      case "active":
        this.setDataValue("status", 0);
        break;
      case "inactive":
        this.setDataValue("status", 1);
        break;
      case "deleted":
        this.setDataValue("status", -1);
        break;
      default:
    }
  }
}
