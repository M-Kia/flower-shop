import { Table, Column, DataType, ForeignKey } from "sequelize-typescript";

import { BaseModel } from "./BaseModel";

import { Users } from "./Users";

import type { StatusType } from "../../types/dataTypes";

@Table({
  tableName: "chats",
})
export class Chats extends BaseModel {
  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    field: "user_id",
    allowNull: false,
  })
  public userId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public title!: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    comment: "0 => active, 1 => inactive, 2 => deleted",
  })
  get status(): StatusType {
    switch (this.getDataValue("status")) {
      case 0:
        return "active";
      case 1:
        return "inactive";
      default: // -1
        return "deleted";
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
      default: // deleted
        this.setDataValue("status", -1);
    }
  }
}
