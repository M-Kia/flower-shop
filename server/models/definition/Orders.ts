import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";

import { Users } from "./Users";
import { UserAddresses } from "./UserAddresses";

import type { OrderStatusType } from "../../types/dataTypes";

@Table({
  tableName: "orders",
})
export class Orders extends BaseModel {
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
    field: "user_id",
    allowNull: false,
  })
  public userId: number;

  @BelongsTo(() => Users)
  public user: Users;

  @ForeignKey(() => UserAddresses)
  @Column({
    type: DataType.INTEGER,
    field: "user_address_id",
    allowNull: false,
  })
  public userAddressId: number;

  @BelongsTo(() => UserAddresses)
  public userAddress: UserAddresses;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    comment:
      "0 => saved, 1 => processing, 2 => sending, 3 => completed, -1 => cancelled",
  })
  get status(): OrderStatusType {
    switch (this.getDataValue("status")) {
      case 0:
        return "saved";
      case 1:
        return "processing";
      case 2:
        return "sending";
      case 3:
        return "completed";
      case -1:
        return "cancelled";
      default:
    }
  }

  set status(value: OrderStatusType) {
    switch (value) {
      case "saved":
        this.setDataValue("status", 0);
        break;
      case "processing":
        this.setDataValue("status", 1);
        break;
      case "sending":
        this.setDataValue("status", 2);
        break;
      case "completed":
        this.setDataValue("status", 3);
        break;
      case "cancelled":
        this.setDataValue("status", -1);
        break;
      default:
    }
  }
}
